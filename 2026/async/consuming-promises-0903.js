/* 

fetchUser returns a promise: it resolves with a user object {id, name} if the id is positive, or rejects with an error string if the id is 0 or negative. 
(This stands in for a real server call.)

Your task: write a function showUser(id) that:

calls fetchUser(id)
when it resolves, logs "Found: <name>" (e.g. "Found: User5")
when it rejects, logs "Error: <reason>" (e.g. "Error: Invalid id: -1")

*/ 

function showUser(id) {
    fetchUser(id)
        .then((user) => {
            console.log(`Found: ${user.name}`);
        })
        .catch((reason) => {
            console.log(`Error ${reason}`);
        });
}

// PROVIDED — you don't write this. It simulates fetching a user by id.
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id: id, name: "User" + id });
      } else {
        reject("Invalid id: " + id);
      }
    }, 500);
  });
}

showUser(5);    // after 0.5s, logs: "Found: User5"
showUser(-1);   // after 0.5s, logs: "Error: Invalid id: -1"

/* 

Key learning points: 

1. The result of a promise is not stored in a separate variable. The delay makes the use of a Promises necessary. When the container of the promise is filled we
then use .then or .catch to deal with the result. 

2. Then and catch receive the result of the Promise as a parameter, which you can run functions on. 

Overall impression: This was difficult because I am still learning the mental model of Promises. Last time I got the container mental model sorted out. In this 
exercise, I learned the mechanics of what happens after the Promise container is filled. In particular, that we don't need a variable to store the result of the promise.
The container is what stores the result and .then and .catch allow us to act upon it. The result of the Promise gets passed as a parameter to .then and .catch. These
are important parts of the mental model and there is no way I could have derived it from logic. I feel like I am slowly making progress on the mental model. 

*/ 