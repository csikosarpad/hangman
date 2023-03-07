/*
 *
 just a simple idea
 *
 */

let defaultDictionary = ["alma", "körte", "finom", "erős", "iskola"];
let dictionary = [];
let thisWord;
let game;

if (!localStorage.getItem("hangman")) {
  localStorage.setItem("hangman", defaultDictionary);
} else {
  defaultDictionary = localStorage.getItem("hangman").split(",");
}

const reset = () => (dictionary = defaultDictionary);

reset();

const lottery = () => {
  if (dictionary.length > 0) {
    const toBeResolve =
      dictionary[parseInt(Math.random() * dictionary.length, 10)];
    let kiiras = [];
    dictionary = dictionary.filter((item) => item != toBeResolve);
    toBeResolve.split("").forEach((item) => kiiras.push("_"));
    return [toBeResolve, kiiras];
  } else {
    return "Mindent kitaláltál már!";
  }
};
let answer = "";
const newWord = (thisWord) => {
  if (typeof thisWord === "string" && thisWord.length >= 2) {
    if (defaultDictionary.indexOf(thisWord) < 0) {
      defaultDictionary.push(thisWord);
      answer = `Köszi szépen az új bejegyzést a szótárba: ${thisWord}`;
    } else {
      answer = `Ez a szó: "${thisWord}" már létezik a szótárban`;
    }
  } else {
    answer = `Ez nem volt megfelelő!`;
  }

  return answer;
};

run = () => {
  [thisWord, game] = lottery();
  console.log(game);
};
