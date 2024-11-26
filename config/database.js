module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),  // Verwende die Umgebungsvariable für die URL
      ssl: {
        rejectUnauthorized: false,  // Wichtiger Schritt für Heroku-Verbindungen (SSL erforderlich)
      },
    },
  },
});