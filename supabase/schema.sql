create table if not exists public.progress (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  skill text not null,
  score int not null default 0,
  created_at timestamptz default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  status text default 'inactive',
  plan text default 'free',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table public.progress enable row level security;
alter table public.subscriptions enable row level security;

create policy "Users can read own progress"
on public.progress for select
using (auth.uid()::text = user_id);

create policy "Users can insert own progress"
on public.progress for insert
with check (auth.uid()::text = user_id);
