export default defineEventHandler(async (event) => {
  const { giphyKey } = useRuntimeConfig();
  const { title } = getQuery(event);
  const searchTerm = "rick+" + title.toLowerCase().replaceAll(" ", "+");

  console.log(searchTerm);

  // Recibir el nombre del episodio y enviarlo como query

  const { data: gifs } = await $fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${searchTerm}&limit=3&offset=0`
  );

  // const gifs

  return gifs;
});
