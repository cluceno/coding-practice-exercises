/*

Write a function countTags(posts) that takes an array of post objects, each with a tags array, and returns an object counting how many times each tag appears across all posts.
If posts isn't an array, return {}. Assume each post has a tags array.

Pseudocode: 

write function count tags
    if posts isn't an array return {}
    reduce over posts, accumulator = {} (the counts object):
        for the current post:
        forEach over post.tags (inner loop):
        count this tag into the accumulator (counts[tag] = (counts[tag]||0)+1)
    return the accumulator
        


*/

/*

REDUCE APPROACH 

function countTags(posts) {
    if (!Array.isArray(posts)) return {};
    
    let tagCount = posts.reduce((counts, post) => {
        post.tags.forEach((tag) => {
            counts[tag] = (counts[tag]||0) + 1; 
        })
        return counts;
    }, {})

    return tagCount;
}

*/ 

function countTags(posts) {
    if (!Array.isArray(posts)) return {};

    // flatten 
    let tags = posts.flatMap(post => post.tags); 

    // count

    let tagCount = tags.reduce((counts, tag) => {
        counts[tag] = (counts[tag]||0) + 1; 
        return counts;
    }, {})

    return tagCount;

}

console.log(countTags([
  { title: "A", tags: ["js", "web"] },
  { title: "B", tags: ["js", "css"] },
  { title: "C", tags: ["js", "web", "css"] }
]));
// { js: 3, web: 2, css: 2 }

console.log(countTags([{ title: "D", tags: [] }]));   // {}
console.log(countTags([]));                            // {}

/* 

Key learning points:

1. Know what the outer and inner loop is. In this case, the outer loop is reduce iterating through every array item. The inner loop looks into the object and finds the array via the forEach method. 

2. Be mindful on how you select the array in each object with the forEach method. The outer loop is iterating through every item, which is designated by post. Now, we need to look inside of the 
object and look for the array item, specifically. To do this we look inside each post by using dot notation: post.tags. I still get confused with the nested loops and how to get what I need from them. 

3. I struggled  with this format: counts[tag] = (counts[tag]||0) + 1; 
    Previously I was using if/else statments, which read more like english and was easier to understand. However, it is important to expand your vocabulary. So for this format, the left side creates the assigment
    and the r ight s ide is read and computed. The right side reads, if counts[tag] exists use that and then add 1. However, if it doesn't exist or is undefined, use 0 as the starting value.
    
4. Flatten and reduce is a new approach to this problem that I have not previously considered. This statement, let tags = posts.flatMap(post => post.tags), says to return the tags array of each post and then  
flatten them into a single array. In contrast, the map method would have returned an array of arrays. 

5. For the flatten and reduce method, the second step is to count, which is achieved by the reduce method. The mechanics are similar to the outer/inner loop solution.  

Overall impression: I was not able to come up with the pseudocode for either solution. This is a sign that I do not know these concepts well enough yet. However, I was able to read and explain the code, which is a good 
sign. I think the code generation will come with a few more reps. I still struggle with thhe nested loop format and selecting what I need within the array when there is data I need to ignore. Overall, I think I made 
progress but it was a good test on finding the limit of my current capabilities. 

*/ 

