/**
 * Async function to get the number of occurrences of the character {@character}. 
 */

import countCharInResourcePage from "./count";

const countCharacter = async (url, character, counted=0) => {
     
    const response = await fetch(url)
       .then(response => response.json());
     
    const countedCharacters = countCharInResourcePage(response.results, character)
         
    counted += countedCharacters;
 
    if (response.info.next) {
         return await countCharacter(response.info.next, character, counted); 
    }
  
    return counted;
}
 
export default countCharacter