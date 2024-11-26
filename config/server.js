module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Standardhost
  port: env.int('PORT', 1337), // Standardport
  app: {
    keys: env.array('APP_KEYS'), // API-Schlüssel aus Umgebungsvariablen
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false), // Webhooks-Optionen
  },
  cron: {
    enabled: env.bool('CRON_ENABLED', false), // Falls du Cron-Jobs nutzen möchtest
  },
});