export default defineEventHandler(async (event) => {
  const { id } = event.context.params;

  const data = await $fetch(`https://rickandmortyapi.com/api/character/${id}`);
  // const character = await $fetch(
  //   `https://rickandmortyapi.com/api/character/${id}`
  // );

  // const data = { character };
  return data;
});
