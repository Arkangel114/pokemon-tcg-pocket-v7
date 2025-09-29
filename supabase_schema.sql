-- Example schema for Pokémon TCG Pocket
create table profiles (
  id uuid primary key default gen_random_uuid(),
  username text unique,
  created_at timestamp default now()
);
create table decks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  name text,
  created_at timestamp default now()
);
create table comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  deck_id uuid references decks(id),
  content text,
  created_at timestamp default now()
);
create table tournaments (
  id uuid primary key default gen_random_uuid(),
  name text,
  created_at timestamp default now()
);
create table tournament_players (
  tournament_id uuid references tournaments(id),
  user_id uuid references profiles(id),
  primary key (tournament_id, user_id)
);
