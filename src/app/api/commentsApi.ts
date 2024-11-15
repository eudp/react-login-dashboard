export const getComments = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  return res.json();
};
