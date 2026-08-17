-- Adds a city column to leads, used by the new Visibility Score request
-- form (business name -> company, city -> city). Safe to run any time --
-- purely additive, doesn't touch existing rows or the audit form's insert.
alter table public.leads add column if not exists city text;