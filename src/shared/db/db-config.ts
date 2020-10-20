export const dbConfig = {
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'MeganRussell13',
    host: 'localhost',
    port: 5432,
    database: 'kanban',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/shared/db/migrations/',
  },
};
