-- Na Mosca — regra autoritativa de pontuação no Postgres.
-- Deve permanecer em paridade com src/domain/scoring.ts.

create or replace function public.nm_error_percent(
  p_guess numeric,
  p_answer numeric
)
returns numeric
language plpgsql
immutable
strict
set search_path = public
as $$
begin
  if p_answer <= 0 then
    raise exception 'answer must be greater than zero';
  end if;

  return (abs(p_guess - p_answer) / p_answer) * 100;
end;
$$;

create or replace function public.nm_points_for_error_percent(
  p_error_percent numeric
)
returns integer
language plpgsql
immutable
strict
set search_path = public
as $$
begin
  if p_error_percent < 0 then
    raise exception 'error percent cannot be negative';
  end if;

  if p_error_percent = 0 then return 1000; end if;
  if p_error_percent <= 1 then return 900; end if;
  if p_error_percent <= 5 then return 750; end if;
  if p_error_percent <= 10 then return 600; end if;
  if p_error_percent <= 25 then return 400; end if;
  if p_error_percent <= 50 then return 200; end if;

  return 50;
end;
$$;

create or replace function public.nm_score_guess(
  p_guess numeric,
  p_answer numeric
)
returns table (
  error_percent numeric,
  points integer,
  exact boolean
)
language sql
immutable
strict
set search_path = public
as $$
  with scored as (
    select public.nm_error_percent(p_guess, p_answer) as error_percent
  )
  select
    scored.error_percent,
    public.nm_points_for_error_percent(scored.error_percent) as points,
    scored.error_percent = 0 as exact
  from scored;
$$;

-- Essas funções são peças internas do motor.
-- Permissão pública para chamá-las diretamente deve ser decidida junto das RPCs do jogo,
-- não por acidente nesta migration.
revoke all on function public.nm_error_percent(numeric, numeric) from public;
revoke all on function public.nm_points_for_error_percent(numeric) from public;
revoke all on function public.nm_score_guess(numeric, numeric) from public;
