/*

Write a function nextTrack(playlist, current) that returns the next track in a playlist, cycling back to the first after the last.

playlist is an array of track-name strings
current is the track currently playing
Return the next track in order; after the last track, wrap around to the first
If current isn't in the playlist, return the first track (a safe default)
If playlist isn't a non-empty array, return null

Pseudocode: 

write function 
    if current isn't in the playlist, return the first track 
        using playlist.includes 
    if playlist is an empty array or not an array, return null 

    return next track 
        index is the (current index + 1 % 3) + 1

*/

function nextTrack(playlist, current) {
    if (!Array.isArray(playlist) || playlist.length === 0) return null; 
    if (!playlist.includes(current)) return playlist[0];

    let currentIndex = playlist.indexOf(current);
    let next = playlist[(currentIndex + 1) % playlist.length]; 

    return next; 
}

console.log(nextTrack(["a", "b", "c"], "a"))        // "b"
console.log(nextTrack(["a", "b", "c"], "b"))        // "c"
console.log(nextTrack(["a", "b", "c"], "c"))        // "a"   (wrapped around)
console.log(nextTrack(["a", "b", "c"], "x"))         // "a"   (not found → first)
console.log(nextTrack(["solo"], "solo"))            // "solo" (single track wraps to itself)
console.log(nextTrack([], "a"))                     // null
console.log(nextTrack("not array", "a"))            // null

/* Key learning points 

1. Remember that the first check of validation should be if it is the correct type. Otherwise, if it is not, every other test 
could be problematic. 

2. Avoid creating variables that incorporate the function name, as it could cause confusion. 

3. Avoid hard coding the length of the array so that it can remain dynamic if more array items are added. In this exercise
I tried to hard code 3 into the modulo operator calculation. However, a playlist can have more than just 3 tracks. 

Overall impression: This one was pretty easy. It was a good rep because the subtleties of validation still need to reinforced. I think 
have got the hang of the modulo operator, at least for this scale and use case. 

*/ 