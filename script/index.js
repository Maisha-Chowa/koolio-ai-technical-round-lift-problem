const level1UpArrow = document.getElementById("level-1-up-arrow");
const level2UpArrow = document.getElementById("level-2-up-arrow");
const level2DownArrow = document.getElementById("level-2-down-arrow");
const level3DownArrow = document.getElementById("level-3-down-arrow");

level1UpArrow.addEventListener("click", () => moveUp(2));
level2UpArrow.addEventListener("click", () => moveUp(3));
level2DownArrow.addEventListener("click", () => moveDown(1));
level3DownArrow.addEventListener("click", () => moveDown(2));
let currentLevel = 0;
function moveUp(targetLevel) {
  console.log(targetLevel);
  if (currentLevel < targetLevel) {
    const time = targetLevel === 1 ? 5000 : 10000;
    console.log(time, targetLevel);
    moveLift(time, targetLevel);
  } else if (currentLevel === 1 && targetLevel === 2) {
    console.log(time, targetLevel);
    moveLift(time, targetLevel);
  }
}

function moveDown(targetLevel) {
  if (currentLevel > targetLevel) {
    const time = currentLevel === 1 ? 5000 : 10000;
    console.log(time, targetLevel);
    moveLift(time, targetLevel);
  } else if (currentLevel === 1 && targetLevel === 0) {
    console.log(time, targetLevel);
    // Skip level 1 if up is pressed or no button is pressed
    moveLift(time, targetLevel);
  }
}

function moveLift(time, targetLevel) {
  console.log(time, targetLevel);
  if (targetLevel === 2) {
    // const lift = document.querySelector(".myDiv");
    const lift = document.getElementById("elevator2");
    // Optional: Add a sound effect for movement start
    lift.innerText = "Elevator";
    lift.style.width = "280px";
    lift.style.height = "180px";
    lift.style.margin = "0 auto";
    lift.style.backgroundColor = "bisque";
    lift.style.transition = `transform 0s ease-in-out ${time}ms`;
    lift.style.transform = `translateY(${-targetLevel * 100}%)`;
    const liftRemove = document.getElementById("elevator1");
    if (liftRemove) {
      liftRemove.style.backgroundColor = "lightblue";
    }
  } else {
    const lift = document.getElementById("elevator3");
    // Optional: Add a sound effect for movement start
    lift.innerText = "Elevator";
    lift.style.width = "280px";
    lift.style.height = "180px";
    lift.style.margin = "0 auto";
    lift.style.backgroundColor = "bisque";
    lift.style.transition = `transform 0s ease-in-out ${time}ms`;
    lift.style.transform = `translateY(${-targetLevel * 100}%)`;

    const liftRemove = document.getElementById("elevator2");
    if (liftRemove) {
      // Check if element exists before removal
      liftRemove.style.backgroundColor = "lightblue";
    }
  }

  setTimeout(() => {
    lift.style.transition = "";
    currentLevel = targetLevel;
    // Optional: Add a sound effect for movement end
    // Optional: Highlight the current level visually
  }, time);
}
