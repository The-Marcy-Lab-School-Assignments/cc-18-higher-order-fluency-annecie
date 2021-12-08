//question 1
const animals = ['dog', 'cat', 'bear'];
const shortWords = (array) => {
    return array.filter(el => el.length < 5);
};
console.log(shortWords(animals));
//question 2
const noVowel = (array) => {
  return array.map(word=> word.replace(/[aeiou]/gi, "x"));  
};
console.log(shortWords(animals));
//question 3
const longToShort = (array) => {
  return array.sort((a, b) => a.length - b.length);   
};
//question 4
const onlyVowelA = (array) => {
    return array.filter(element => element.includes("a"));
};
//question 5
const pluralize = (array) => {
    return array.map(element => element + "s")    
};
// question 6
const longerThanSeven = (array) => {
    return array.some( word => word.length > 7);
}
console.log(longerThanSeven(animals));
// question 7
const oddlength = (array) => {
    
};
const allFour = (array) => {
    return array.some(word => word.length === 4);
};
console.log(allFour(animals));
//question 12
const concatStrings = (array) => {
    return array.reduce((prev, current) => `${prev} ${current}`)
};
console.log(concatStrings(animals));