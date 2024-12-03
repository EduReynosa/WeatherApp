const { sql } = require("../config/db");

const findUserByEmail = async (email) => {
  const query = "SELECT * FROM Users WHERE email = @email";
  const result = await sql.query(query, { email });
  return result.recordset[0];
};

const createUser = async (email, password) => {
  const query = `
    INSERT INTO Users (email, password)
    VALUES (@email, @password)
  `;
  await sql.query(query, { email, password });
};

module.exports = { findUserByEmail, createUser };
