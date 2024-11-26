require('dotenv').config(); // Lädt Umgebungsvariablen aus der .env-Datei

const express = require('express');
const app = express();
const port = process.env.PORT || 1337; // Standardport aus der .env-Datei

// Beispiel für Zugriff auf Umgebungsvariablen
const dbUrl = process.env.DATABASE_URL;
const appKeys = process.env.APP_KEYS;
const jwtSecret = process.env.JWT_SECRET;

// Beispiel für eine Datenbankverbindung mit dem Client (z.B. pg für PostgreSQL)
const { Client } = require('pg');
const dbClient = new Client({
  connectionString: dbUrl,
});

dbClient.connect()
  .then(() => {
    console.log("Datenbankverbindung erfolgreich!");
  })
  .catch(err => {
    console.error("Fehler bei der Datenbankverbindung", err);
  });

// Beispiel für den JWT Secret
const jwt = require('jsonwebtoken');
const token = jwt.sign({ data: 'example' }, jwtSecret, { expiresIn: '1h' });

app.get('/', (req, res) => {
  res.send('Server läuft auf Port ' + port);
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
