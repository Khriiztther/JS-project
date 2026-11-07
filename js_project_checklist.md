**BASE GAME**

~~□ A heading~~

~~□ Two score displays (player, computer)~~

~~□ Three buttons (rock, paper, scissors)~~

~~□ A result area to show what happened~~

~~□ A reset button~~

~~□ JS: computer picks randomly~~

~~□ JS: compare choices, decide winner~~

~~□ JS: update the score~~

~~□ JS: update the result text~~

~~□ JS: reset everything~~



**JS Show Choices**

~~□ Template literal building choicesText~~

~~□ outcomeText decided by if/else~~

~~□ resultEl.textContent shows both choices + outcome~~



**JS Highlight Buttons**

~~□ getButtonByChoice(choice) helper~~

~~□ classList.add("win"/"lose") on correct buttons~~

~~□ setTimeout with 200ms to classList.remove~~

□ Optional: clearTimeout guard against rapid clicks



**JS First to 5**

□ gameOver flag declared

□ if (gameOver) return; at top of playRound

□ Match-win check at end of playRound (player ≥ 5, computer ≥ 5)

□ gameOver = false in reset handler





**JS localStorage**

□ saveScores() function

□ loadScores() function

□ saveScores() called after score updates in playRound

□ saveScores() called in reset handler

□ loadScores() called once at bottom of file



**Testing**

□ All three buttons trigger a round

□ Win/lose/tie all display correctly

□ Buttons flash green/red on win/lose (not on tie)

□ First to 5 shows match result and blocks further clicks

□ Reset clears scores and re-enables gameplay

□ Reloading the page preserves scores

□ Reloading after reset keeps scores at 0

□ No red errors in browser console (F12)

