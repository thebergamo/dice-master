import { nanoid } from "nanoid";
import { turso } from "./turso";

export async function generateToken({
  reason,
  requester,
  diceCount,
  sides,
}: {
  reason: string;
  requester: string;
  diceCount: number;
  sides: number;
}) {
  const token = nanoid();

  try {
    await turso.execute({
      sql: `INSERT INTO rolls (token, requester, reason, diceCount, sides, expires_at) VALUES (?, ?, ?, ?, ?, DATETIME('now', '+1 hour'))`,
      args: [token, requester, reason, diceCount, sides],
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create token");
  }

  return token;
}

export async function getToken(token: string) {
  const resultSet = await turso.execute({
    sql: `SELECT * FROM rolls WHERE token = ?`,
    args: [token],
  });

  if (!resultSet.rows.length) {
    return null;
  }

  const row = resultSet.rows[0];

  return {
    token: row.token?.valueOf(),
    requester: row.requester?.valueOf(),
    reason: row.reason?.valueOf(),
    diceCount: row.diceCount?.valueOf(),
    sides: row.sides?.valueOf(),
    results: row.results?.valueOf(),
  };
}

export async function performRoll({
  token,
  results,
}: {
  token: string;
  results: string;
}) {
  console.log("performRoll", { token, results });
  const resultSet = await turso.execute({
    sql: `UPDATE rolls SET rolled_at = DATETIME('now'), results = ? WHERE token = ?`,
    args: [results, token],
  });

  console.log(resultSet);

  if (!resultSet.rowsAffected) {
    throw new Error("Token not found");
  }

  console.log(`${token}(token) used`);
}
