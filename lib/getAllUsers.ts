export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );

  return res;
}
