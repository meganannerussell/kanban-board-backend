import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.raw(`
    CREATE TABLE boards (
      id UUID NOT NULL,
      name TEXT NOT NULL,
      description TEXT
    );
  `);
}

export async function down(knex: Knex): Promise<void> {
  return knex.raw(`
    DROP TABLE boards;
  `);
}
