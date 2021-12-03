import countCharacter from './utils/counCharacters';

const resources = {
  locationUrl : 'https://rickandmortyapi.com/api/location',
  episodeUrl : 'https://rickandmortyapi.com/api/episode',
  characterUrl : 'https://rickandmortyapi.com/api/character',
};

const getExercise1Result = async () => {
  const start = window.performance.now();

  const countedL = await countCharacter(resources.locationUrl, 'l');
  const countedE = await countCharacter(resources.episodeUrl, 'e');
  const countedC = await countCharacter(resources.characterUrl, 'c');

  const end = window.performance.now();
  const duration = (end-start);
  const seconds = Math.floor(duration/1000);
  const milliseconds = duration - 1000*seconds;
  
  return [{
    exercise_name: "Char counter",
    time: `${seconds}s ${milliseconds}ms`,
    in_time: true,
    results: [
      {
        char: "l",
        count: countedL,
        resource: "location"
      },
      {
        char: "e",
        count: countedE,
        resource: "episode"
      },
      {
        char: "c",
        count: countedC,
        resource: "character"
      }
    ]
  }];
}

export default getExercise1Result