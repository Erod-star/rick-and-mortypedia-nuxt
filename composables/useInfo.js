export const useInfo = async (characterId) => {
  const getCharacter = async () => {
    const character = await $fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`
    );

    return character;
  };

  return {
    getCharacter,
  };
};
