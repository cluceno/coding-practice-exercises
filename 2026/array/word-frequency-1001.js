/*

Write a function topWords(text, n) that takes a string of text and returns the n most frequent words, 
as an array of [word, count] pairs, ordered from most to least frequent.

If text isn't a string, return [].

*/ 

function topWords(text, n) {
    if (typeof text !== "string" || text.length === 0) return [];

    let wordsArray = text.split(" ");

    let wordCount = wordsArray.reduce((count, word) => {
        count[word] = (count[word] || 0) + 1;
        return count;
    }, {})

    let wordCountArray = Object.entries(wordCount);

    let sorted = wordCountArray.sort((a, b) => b[1] - a[1]) ;

    return sorted.slice(0, n);
}

topWords("the cat the dog the bird cat", 2);
// [["the", 3], ["cat", 2]]

topWords("apple banana apple cherry banana apple", 2);
// [["apple", 3], ["banana", 2]]

topWords("hello world", 5);
// [["hello", 1], ["world", 1]]   (n bigger than distinct words → all of them)

topWords("", 3);        // []
topWords("hi", 0);      // []

/* 

Key learning points: 

1. I still struggle with assignments when reducing into an object accumulator. I was able to refactor my if/else statement into the single line: 
    count[word] = (count[word] || 0) + 1; I am hoping that seeing it multiple ways will help me remember. 

2. There are 3 object static methods to convert an object into an array. 
    Object.keys(obj) --> returns an array of keys
    Object.values(obj) --> returns an array of values
    Object.entries(obj) --> returns an array of key/value pairs

3. Two common ways to check for an empty string. 
    str.length === 0 
    str === ""

Overall impression: I understand each of these pipe components now that I've seen the answer but generating them from memory was difficult. There had 
been some forgetting since the last time I saw these concepts, which I guess is part of the process of deep learning. It is kind of discouraging but 
I just need to keep going.

*/