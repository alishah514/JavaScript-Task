async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    const names = data.map((user) => user.name).sort();
    return names;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
}

module.exports = { fetchUserData };
