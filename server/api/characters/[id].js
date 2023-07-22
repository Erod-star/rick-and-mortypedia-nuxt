export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  console.log("::Hey");

  const data = await $fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  ).catch((error) => {
    console.log(":Error", error);
  });
  // const character = await $fetch(
  //   `https://rickandmortyapi.com/api/character/${id}`
  // );

  // const data = { character };
  return data;
});
