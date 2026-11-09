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



**NEW FEATURE: JS First to 5**

~~□ gameOver flag declared~~

~~□ if (gameOver) return; at top of playRound~~

~~□ Match-win check at end of playRound (player ≥ 5, computer ≥ 5)~~

~~□ gameOver = false in reset handler~~





**JS localStorage**

~~□ saveScores() function~~

~~□ loadScores() function~~

~~□ saveScores() called after score updates in playRound~~

~~□ saveScores() called in reset handler~~

~~□ loadScores() called once at bottom of file~~



**Testing**

~~□ All three buttons trigger a round~~

~~□ Win/lose/tie all display correctly~~

~~□ Buttons flash green/red on win/lose (not on tie)~~

~~□ First to 5 shows match result and blocks further clicks~~

~~□ Reset clears scores and re-enables gameplay~~

~~□ Reloading the page preserves scores~~

~~□ Reloading after reset keeps scores at 0~~

~~□ No red errors in browser console (F12)~~

**HTML**

~~□ Add a mode selector area (two buttons: "First to 3" and "First to 5")~~

~~□ Give each mode button a data-target attribute (3 or 5)~~

~~□ Give mode buttons a shared class (e.g. mode-btn)~~

~~□ Add a visible label showing current target (e.g. "Playing to: 5")~~

**JavaScript**

~~□ Declare let targetScore = 5; at top with other state~~

~~□ Replace both hardcoded >= 5 checks in playRound with >= targetScore~~

~~□ Add DOM reference for mode buttons and target label~~

~~□ Write a setMode(newTarget) function that updates targetScore, updates the label, resets the game~~

~~□ Wire click listeners on mode buttons calling setMode~~

~~□ Highlight the active mode button (add/remove an active class)~~

~~□ Update match-win messages to say "first to {targetScore}" instead of "5"~~

~~□ Make reset respect targetScore (reset clears scores but keeps chosen mode)~~

**CSS**

~~□ Style .mode-btn (secondary button style)~~

~~□ Style .mode-btn.active to show which mode is selected~~

**Testing**

~~□ Default mode is "First to 5"~~

~~□ Clicking "First to 3" changes the label and starts a fresh match~~

~~□ Playing to 3 ends the match at 3 wins~~

~~□ Switching modes mid-match resets scores and restarts~~

~~□ Active mode button is visually distinct~~

~~□ Reset button preserves current mode (doesn't change back to 5)~~



**New Feature: Animation**

**HTML**

□ Add a <div id="reveal-area"> (or reuse #result — see notes) to hold the animated text

□ Nothing else needed — the animation uses existing elements

CSS

□ Add a .reveal-pulse class for a subtle animation (optional)

□ Ensure #result has a min-height so text doesn't jump

**JavaScript**

~~□ Add a let isRevealing = false; flag to block input during animation~~

~~□ Extract round logic into a finishRound(playerChoice, computerChoice) function~~

~~□ Modify playRound to: pick computer choice → show "..." → wait 500ms → call finishRound~~

~~□ Block button clicks while isRevealing === true~~

~~□ Reset isRevealing = false at the end of finishRound~~

**Testing**

~~□ Click a button → "..." appears immediately~~

~~□ After \~500ms, actual result appears~~

~~□ Rapid clicking during animation does nothing~~

~~□ Game over screen doesn't get covered by "..." if match ends~~

~~□ Reset button works even mid-animation~~

