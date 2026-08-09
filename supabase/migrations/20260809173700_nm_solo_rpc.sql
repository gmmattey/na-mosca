-- Na Mosca — primeira vertical funcional do modo solo.
-- O cliente recebe só o necessário antes do palpite e a resposta correta só depois do envio.

create or replace function public.nm_get_solo_question(
  p_excluded_question_ids uuid[] default '{}'::uuid[],
  p_category_ids uuid[] default null
)
returns table (
  question_id uuid,
  prompt text,
  unit text,
  difficulty text,
  min_guess numeric,
  max_guess numeric
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  return query
  select
    q.id,
    q.prompt,
    q.unit,
    q.difficulty,
    q.min_guess,
    q.max_guess
  from public.nm_questions q
  join public.nm_categories c on c.id = q.category_id
  where q.status = 'published'
    and c.is_active = true
    and not (q.id = any(coalesce(p_excluded_question_ids, '{}'::uuid[])))
    and (p_category_ids is null or q.category_id = any(p_category_ids))
  order by random()
  limit 1;

  if not found then
    raise exception 'no question available';
  end if;
end;
$$;

create or replace function public.nm_submit_solo_guess(
  p_question_id uuid,
  p_guess numeric
)
returns table (
  question_id uuid,
  answer_numeric numeric,
  unit text,
  error_percent numeric,
  points integer,
  exact boolean,
  reveal_text text,
  source_label text,
  source_url text,
  reference_date date
)
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_question public.nm_questions%rowtype;
  v_error numeric;
begin
  if auth.uid() is null then
    raise exception 'authentication required';
  end if;

  if p_guess is null then
    raise exception 'guess required';
  end if;

  select *
    into v_question
  from public.nm_questions q
  where q.id = p_question_id
    and q.status = 'published';

  if not found then
    raise exception 'question not available';
  end if;

  if v_question.min_guess is not null and p_guess < v_question.min_guess then
    raise exception 'guess below minimum';
  end if;

  if v_question.max_guess is not null and p_guess > v_question.max_guess then
    raise exception 'guess above maximum';
  end if;

  v_error := public.nm_error_percent(p_guess, v_question.answer_numeric);

  return query
  select
    v_question.id,
    v_question.answer_numeric,
    v_question.unit,
    v_error,
    public.nm_points_for_error_percent(v_error),
    v_error = 0,
    v_question.reveal_text,
    v_question.source_label,
    v_question.source_url,
    v_question.reference_date;
end;
$$;

revoke all on function public.nm_get_solo_question(uuid[], uuid[]) from public;
revoke all on function public.nm_submit_solo_guess(uuid, numeric) from public;

grant execute on function public.nm_get_solo_question(uuid[], uuid[]) to authenticated;
grant execute on function public.nm_submit_solo_guess(uuid, numeric) to authenticated;
