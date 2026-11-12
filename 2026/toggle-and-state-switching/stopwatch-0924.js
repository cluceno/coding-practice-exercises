/* 

Write a function makeLapTracker() that returns an object for tracking lap times, where each lap records the time since the previous lap.

.lap(currentTime) — records a lap at currentTime (a number, e.g. seconds), and returns the duration of this lap 
    (time since the previous lap, or since the start for the first lap). The tracker starts at time 0.
.laps() — returns an array of all recorded lap durations, in order.
.total() — returns the total elapsed time (sum of all lap durations).

*/ 

function makeLapTracker() {
    let lapTime = 0;
    let elapsedTime = 0;
    let lapSummary = [];

    return {
        lap(currentTime) {
            //calculate lap time 
            lapTime = currentTime - elapsedTime;

            //add lap to lapsSummary
            lapSummary.push(lapTime);

            //calculate elapsed time 
            elapsedTime = currentTime;

            return lapTime;
        },
        laps() {
            return lapSummary;
        },
        total() {
            return elapsedTime;
        }
    }
}

const t = makeLapTracker();
console.log(t.lap(5));      // 5   (5 - 0 = first lap is 5)
console.log(t.lap(12));     // 7   (12 - 5 = 7)
console.log(t.lap(20));     // 8   (20 - 12 = 8)
console.log(t.laps());      // [5, 7, 8]
console.log(t.total());     // 20  (5 + 7 + 8, which equals the last currentTime)

const t2 = makeLapTracker();
console.log(t2.lap(10));    // 10  (independent, first lap from 0)
console.log(t2.laps());     // [10]

/* 

Key learning points: 

1. Sequence of events is important. Elapsed time can equal current time after the lapTime has already been calculated. This ensures that the 
previous time is used to calculate lapTime. Summing up the array of laps is not necessary. 

Overall impression: This was difficult because of all the states I had to keep track of. I got here with some guidance but I was able to do it mostly 
on my own. I wouldn't have been able to solve this independently just a few months ago. This is a small win on a very long journey.

*/