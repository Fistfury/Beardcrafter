const fs = require("fs").promises;
const path = require("path");

const fetchUsers = async () => {
  const filePath = path.join(__dirname, "./data/users.json");
  console.log(`Attempting to read users from ${filePath}`);
  
  try {
    const data = await fs.readFile(filePath);
    const users = JSON.parse(data);
    console.log(`Found ${users.length} users`);
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error; // or handle the error as needed
  }
};

module.exports = fetchUsers;
