

const fetchLocationsFromCharacters = async (characterEndpoints) => {

    const promises = characterEndpoints.map( async (characterEndpoint) => {
        const originLocation = await fetch(characterEndpoint)
        .then((response) => response.json())
        .then((character) => character.origin.name);
        
        return originLocation;
    });

    return Promise.all(promises)

}

const fetchEpisodesAndGetUniqueCharacterLocations = async (endpoint='https://rickandmortyapi.com/api/episode', episodesResult = [] ) => {


    const response = await fetch(endpoint)
      .then(response => response.json());

    const episodes = response.results;

    const resultPromises = episodes.map(async (episode) => {
        const uniqueLocations = [...new Set(await fetchLocationsFromCharacters(episode.characters))];
        return {
            name: episode.name,
            episode: episode.episode,
            locations: uniqueLocations
        };
    });

    const result = await Promise.all(resultPromises);

    const mergedResults = [...episodesResult, ...result]

    if (response.info.next) {
        return await fetchEpisodesAndGetUniqueCharacterLocations(response.info.next, mergedResults);
    }

    return  mergedResults;
}

export default fetchEpisodesAndGetUniqueCharacterLocations
