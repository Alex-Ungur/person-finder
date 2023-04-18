export default async function getRandom() {
  // const data = await fetch("https://blague.xyz/api/joke/random");
  const data = await fetch("https://randomuser.me/api/?results=100", {
    cache: "no-cache",
  });
  const listePersonnes = await data.json();
  return listePersonnes;
}
