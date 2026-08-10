/* 

Write a function parseQuery(queryString) that parses a URL query string into an object.

Input looks like "name=alice&age=30&city=denver" — key/value pairs joined by &, each pair split by =
Return an object mapping each key to its value: { name: "alice", age: "30", city: "denver" } (values stay strings)
A leading ? should be ignored if present ("?name=alice" → { name: "alice" })
Skip malformed pairs — anything without exactly one = (a pair with no =, or empty segments)
If input isn't a string, or is empty/whitespace-only, return {}

Pseudocode: 

write function 
    if input is not a string or if it is empty/white-space only, return {}
    trim leading question marks using .replace with regex 
    split pairs with the delimiter "&"" which creates an array
    split again with "=" as a delimter and get an array of an array with [key, value]

    use the reduce method to build the object 
        use the object as the starting value 
        filter out malformed pairs (ignore arrays with length > 2 or < 2)
        if valid, return item[0] = item[1]

*/


function parseQuery(querystring) {
    if (typeof querystring !== "string" || querystring.trim() === "") return {}; 

    let cleaned = querystring
                    .replace(/^\?/, "")
                    .split("&");

    let newObject = cleaned.reduce((info, item) => {
        let splitItem = item.split("=");
        if (splitItem.length === 2) {
            info[splitItem[0]] = splitItem[1];
            return info;
        } else {
            return info; 
        }
    }, {})

    return newObject;
}

console.log(parseQuery("name=alice&age=30&city=denver"))   // { name: "alice", age: "30", city: "denver" }
console.log(parseQuery("?name=alice&age=30"))               // { name: "alice", age: "30" }
console.log(parseQuery("name=alice&broken&age=30"))         // { name: "alice", age: "30" }
console.log(parseQuery(""))                                  // {}
console.log(parseQuery(42))                                  // {}

/* Key learning points: 

1. A regex compared with === never matches a string. The simplest way to check for any empty string is to trim the input 
and use the equals operator to see if it is an empty string. 

2. When using reduce to make a key:value pair in an object, make the assignement first and then return the whole object. If you 
try and return the object and make the assigment all at once, you will return the value only.  

3. To review, slice is a string and array method. Split is a string method that outputs an array. 

4. Notice how we used two sets of square brackets to make the object assigment.

5. If forgot to return the new object again. 

Summary: There are many ways to solve a problem. I could have used the pipeline method on this problem and it would have worked as well. 
Although it  would take multiple passes to come to the same solution. I think I'm progressing... I know I have to make mistakes to improve 
and it's just part of the process. At least my questions are becoming targeted and I am understanding why things happen now. Each time
I work with reduce, it seems like I learn something new or I polish my knowledge just a little bit more. At some point this will have to slow down. 

*/ 
