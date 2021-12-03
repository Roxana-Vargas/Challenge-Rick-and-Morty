import fetchEpisodesAndGetUniqueCharacterLocations from './fetchEpisodesAndGetUniqueCharacterLocations';

const getExercise2Result = async () => {
  const start = window.performance.now();

  const results = await fetchEpisodesAndGetUniqueCharacterLocations();

  const end = window.performance.now();
  const duration = (end-start);
  const seconds = Math.floor(duration/1000);
  const milliseconds = duration - 1000*seconds;
  
  return {
    exercise_name: "Episode locations",
    time: `${seconds}s ${milliseconds}ms`,
    in_time: seconds < 3,
    results
  };
}

export default getExercise2Result