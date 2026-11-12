/* 

Write a function makeRateLimitedToggle(cooldownMs) that returns an object with a switch that can only be flipped once per cooldown period.

.toggle(currentTime) — attempts to flip the switch (on↔off). Only succeeds if at least cooldownMs has passed since the last successful toggle. 
Returns the new state (true/false) if it flipped, 
or the string "Too soon" if still in cooldown. The switch starts off (false), and the first toggle always succeeds.
.isOn() — returns the current state (true/false) without changing it.

*/ 

function makeRateLimitedToggle(cooldownMs) {
    let lastSuccessTime = -cooldownMs;
    let state = false;
    
    return {
        toggle(time) {
            let adjusted = time - lastSuccessTime;
            
            if (adjusted >= cooldownMs) {
                lastSuccessTime = time;
                state = !state;
                return state;
            } else if (adjusted < cooldownMs) {
                return "Too soon";
            }
        },
        isOn() {
            return state;
        }
    }
}

const sw = makeRateLimitedToggle(1000);
console.log(sw.toggle(0));      // true      (first toggle always works → on)
console.log(sw.toggle(500));    // "Too soon" (only 500ms passed, need 1000)
console.log(sw.toggle(1000));   // false     (1000ms since last success → flips to off)
console.log(sw.toggle(1500));   // "Too soon" (only 500ms since the success at 1000)
console.log(sw.toggle(2000));   // true      (1000ms since success at 1000 → on)
console.log(sw.isOn());         // true

/*

Key Learning Points: 

1. An elegant way to avoid hard coding special cases is to set preconditions. A lot of times this wil be the initialy value. In this case 
it was the negative of the initial value, cooldownMs. 

2. I need to understand the spec carefully. I had started to code and had different parameters than what the spec had intended. This 
led to many errors. 

3. The cooldown period must equal cooldownMs regardless of when the lastSuccessTime was. For exampe, if lastSuccessTime was 1500 then 1000 still needs
to pass before the next toggle. This allows us to compare the time to the lastSuccessTime and if it time is < 1000 ms then it will not toggle. 

Overall impression: This exercise was hard because of the reasoning. The syntax was actually easy. I wrote many iterations with the correct syntax
but incorrect logic. I still struggle with the first cases and preconditions. I tend to hard code the special cases. I also misunderstood the spec and
needed heavy assistance to understand it properly. My first interpretation was using accumulated time, which I could've possibly made work but
it wouldn't have been optimal. The good news is that I wasn't struggling with syntax today but instead, the logic. 

*/ 