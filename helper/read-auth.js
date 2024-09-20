const fs = require('fs/promises');
const path = require('path');

const readAuth = async () => {
  try {
    const readData = await fs.readFile(
      path.join(__dirname, '../database/auth.json'),
      'utf-8'
    );

    const jsonData = await JSON.parse(readData);

    return jsonData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const saveAuth = async (newData) => {
  try {
    const data = await readAuth();

    const dataUpdate = [...data, newData];

    await fs.writeFile(
      path.join(__dirname, '../database/auth.json'),
      JSON.stringify(dataUpdate, null, 2), // Format JSON dengan indentasi 2 spasi
      'utf-8'
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  readAuth,
  saveAuth,
};
