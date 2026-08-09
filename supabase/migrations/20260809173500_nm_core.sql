-- Na Mosca — schema inicial para o projeto Supabase compartilhado auê-games.
-- Esta migration é versionada agora e só deve ser aplicada ao projeto remoto após a auditoria do antigo 20T.

create table if not exists public.nm_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.nm_questions (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.nm_categories(id),
  prompt text not null check (length(trim(prompt)) > 0),
  answer_numeric numeric not null check (answer_numeric > 0),
  unit text not null check (length(trim(unit)) > 0),
  difficulty text not null check (difficulty in ('easy', 'medium', 'hard')),
  reveal_text text,
  source_label text not null,
  source_url text not null,
  reference_date date,
  min_guess numeric,
  max_guess numeric,
  status text not null default 'draft' check (status in ('draft', 'published', 'disabled')),
  version integer not null default 1 check (version > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (min_guess is null or max_guess is null or min_guess <= max_guess)
);

create table if not exists public.nm_rooms (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  host_user_id uuid not null references auth.users(id),
  status text not null default 'lobby' check (status in ('lobby', 'playing', 'finished', 'expired')),
  round_count integer not null check (round_count in (5, 10)),
  answer_time_seconds integer not null default 20 check (answer_time_seconds in (10, 20, 30)),
  category_filter jsonb,
  current_round_index integer not null default 0 check (current_round_index >= 0),
  created_at timestamptz not null default now(),
  started_at timestamptz,
  finished_at timestamptz,
  expires_at timestamptz not null
);

create table if not exists public.nm_room_players (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.nm_rooms(id) on delete cascade,
  user_id uuid not null references auth.users(id),
  nickname text not null check (length(trim(nickname)) between 1 and 32),
  status text not null default 'active' check (status in ('active', 'disconnected', 'left')),
  total_score integer not null default 0 check (total_score >= 0),
  joined_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  unique (room_id, user_id)
);

create table if not exists public.nm_rounds (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.nm_rooms(id) on delete cascade,
  question_id uuid not null references public.nm_questions(id),
  round_index integer not null check (round_index >= 0),
  status text not null default 'waiting' check (status in ('waiting', 'accepting_guesses', 'revealing', 'finished')),
  starts_at timestamptz,
  deadline_at timestamptz,
  revealed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (room_id, round_index)
);

create table if not exists public.nm_guesses (
  id uuid primary key default gen_random_uuid(),
  round_id uuid not null references public.nm_rounds(id) on delete cascade,
  player_id uuid not null references public.nm_room_players(id) on delete cascade,
  guess_numeric numeric not null,
  error_percent numeric,
  points integer check (points is null or points >= 0),
  submitted_at timestamptz not null default now(),
  unique (round_id, player_id),
  check (error_percent is null or error_percent >= 0)
);

create index if not exists nm_questions_status_category_idx
  on public.nm_questions (status, category_id);

create index if not exists nm_rooms_status_expires_idx
  on public.nm_rooms (status, expires_at);

create index if not exists nm_room_players_room_status_idx
  on public.nm_room_players (room_id, status);

create index if not exists nm_rounds_room_status_idx
  on public.nm_rounds (room_id, status);

create index if not exists nm_guesses_round_idx
  on public.nm_guesses (round_id);

alter table public.nm_categories enable row level security;
alter table public.nm_questions enable row level security;
alter table public.nm_rooms enable row level security;
alter table public.nm_room_players enable row level security;
alter table public.nm_rounds enable row level security;
alter table public.nm_guesses enable row level security;

-- Intencionalmente não há policies permissivas nesta primeira migration.
-- Até as RPCs e policies específicas entrarem, acesso direto pelo cliente deve falhar fechado.
