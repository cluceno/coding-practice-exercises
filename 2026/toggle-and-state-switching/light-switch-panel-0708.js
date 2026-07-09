/* You're modeling a simple panel of light switches for a room.
Write a function toggleLight(lights, id) that:

Takes lights — an array of objects, each shaped like { id: 1, isOn: false }
Takes id — the id of the light to toggle
Returns a new array (don't mutate the original!) where the light with the matching id has its isOn value flipped (true → false, or false → true), 
and every other light is unchanged

Example:
jsconst lights = [
  { id: 1, isOn: false },
  { id: 2, isOn: true },
  { id: 3, isOn: false }
];

toggleLight(lights, 2);
// → [
//     { id: 1, isOn: false },
//     { id: 2, isOn: false },   <-- flipped
//     { id: 3, isOn: false }
//   ]
Skill focus: boolean flipping (!value) combined with immutable array updates (.map() + spread { ...obj }) — 
this exact pattern shows up constantly in real UI state management. 

*/

function toggleLight(lights, id) {
    return lights.map(light => {
        return light.id === id ? { ...light, isOn: !light.isOn} :light;     
    })
}

/* 

This was a more difficult exercise, that I wouldn't have been able to complete with AI help. 

Key missing knowledge: 

If there is a duplicate key in an object, the last instance will override the value. This is why we're able to use the spread operator
and then simply just declare that the isOn value is switched. 

By using this method, we are not mutating the original array but creatining a new one and then returning it. Map does not mutate an array. 
We take the original array and build an new object by placing it in the object literal. Once in the object literal, we can toggle the value we want. 

Reflection: 

The array method, map, and probably others is still difficult for me to set up. I don't have confidence setting it up, although when I 
see the answer I am usually on the right track. 

I can set up a basic ternary expression but when the spread operator and object are layered on, it becomes difficult. Again, without the 
duplicate object precedence knowledge, I wouldn't have been able to get this anyway. 

*/ 