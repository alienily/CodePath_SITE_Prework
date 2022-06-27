# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Lily Zhou**
## What's in this project?

Time spent: **15** hours spent in total

Link to project/code: https://glitch.com/edit/#!/sulfuric-cloudy-oak.  
Live Site link: https://sulfuric-cloudy-oak.glitch.me## 

The following **required** functionality is complete:
* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn


The following **additional** features are implemented:
* N/A


## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

1. Game win with no mistakes 
![](http://g.recordit.co/PMNw1eLT6C.gif)

2. Game lost with 3 mistakes 
![](http://g.recordit.co/zFnFbpUx7A.gif)

3. Game lost because time ran out
![](http://g.recordit.co/uSVJ1v9RFg.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* StackOverflow
* MDN Web Docs
* W3Schools 
* Youtube

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered was figuring out how to implement the timer/ticking clock. I first had to familiarize myself with the methods ‘setInterval()’  and ‘clearInterval()’ by using MDN Web Docs and referenced Youtube videos that used setInterval and clearInterval to create timers. I definitely struggled with not knowing where to place setInterval and clearInterval. I initially only had one clearinterval() in my timer function, and soon realized that my timer was starting from the time that it was paused at and wouldn’t refresh back to the default time. I used the console to try to debug and see if any errors were popping up. None of the errors applied to the timer so, I proceeded to search on StackOverflow to see if other people have had this issue. After looking through several posts, a solution emerged. The solution was talking about how multiple setInterval() methods could have been running at the same time, which is why I needed to add one more clearInterval() before calling setInterval() in my playClueSequence() function. This was a pretty frustrating process, but extremely essential because I learned a lot more about the methods that I wouldn’t have really known through just reading on MDN Web Docs. Really goes to show the importance of reaching out for help and collaborating with other people. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
* How to import an audio file? 
* How would I go about animating the hearts to move? 
* How were we able to directly access the sound library without having to import the library?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
* I would like to customize the game audio buttons to snippets of Studio Ghilbi songs. 
* Make it so that my timer starts after the last clue is played, because right now it starts while the clue is still playing. 
* Make the game customizable: so the player can decide how many buttons and how long the pattern is. 
* Make code more efficient by using loops to create repetitive things like buttons, heart emojis. 
* Add more comments for each chunk of code, so other people understand whats going on. 



## Interview Recording URL Link


## License

    Copyright [Lily Zhou]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
