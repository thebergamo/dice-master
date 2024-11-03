-- Create table for rolls
CREATE TABLE rolls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  token TEXT UNIQUE NOT NULL,
  reason TEXT NOT NULL,
  requester TEXT NOT NULL,
  diceCount INTEGER NOT NULL,
  sides INTEGER NOT NULL,
  results TEXT NULL,
  rolled_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP
);