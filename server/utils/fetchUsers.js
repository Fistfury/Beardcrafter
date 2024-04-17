const path = require("path");
const fs = require("fs").promises;

const fetchUsers = async () => {
  
  const filePath = path.join(__dirname, '..', 'data', 'users.json');

  console.log(`Attempting to read users from ${filePath}`);

  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Failed to fetch users from ${filePath}:`, error);
    throw error; d
  }
};

module.exports = fetchUsers;