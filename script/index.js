const level1UpArrow = document.getElementById("level-1-up-arrow");
const level3DownArrow = document.getElementById("level-3-down-arrow");
const elevator1 = document.getElementById("elevator1");
const elevator2 = document.getElementById("elevator2");
const elevator3 = document.getElementById("elevator3");
const audio = document.getElementById("myAudio");
level1UpArrow.addEventListener("click", function () {
  let startTime = Date.now();
  console.log(startTime);
  audio.play();
  elevator1.style.transition = "transform 10s ease-in-out";
  setTimeout(function () {
    elevator1.style.transform = "translateY(-480px)";
    const level2UpArrow = document.getElementById("level-2-up-arrow");
    if (level2UpArrow) {
      level2UpArrow.addEventListener(
        "click",
        function () {
          const endTime = Date.now();
          const timeElapsed = (endTime - startTime) / 1000;
          console.log(timeElapsed);
          elevator1.style.transition = `transform ${
            5 - timeElapsed
          }s ease-in-out`;
          elevator1.style.transform = "translateY(-240px)";

          setTimeout(() => {
            level2UpArrow.addEventListener("click", function () {
              console.log("btn");
              audio.play();
              elevator1.style.transition = "transform 5s ease-in-out";
              elevator1.style.transform = "translateY(-480px)";
            });
          }, 1000);
          setTimeout(() => {
            const level2DownArrow =
              document.getElementById("level-2-down-arrow");
            level2DownArrow.addEventListener("click", function () {
              // console.log("btn");
              elevator1.style.transition = "transform 5s ease-in-out";
              elevator1.style.transform = "translateY(+20px)";
            });
          }, 1000);
        },
        500
      );
    }
  });
});
level3DownArrow.addEventListener("click", function () {
  audio.play();
  let startTime = Date.now();
  elevator1.style.transition = "transform 10s ease-in-out";
  setTimeout(function () {
    elevator1.style.transform = "translateY(+20px)";
    const level2DownArrow = document.getElementById("level-2-down-arrow");
    if (level2DownArrow) {
      level2DownArrow.addEventListener("click", function () {
        const endTime = Date.now();
        const timeElapsed = (endTime - startTime) / 1000;
        console.log(timeElapsed);
        elevator1.style.transition = `transform ${
          5 - timeElapsed
        }s ease-in-out`;
        elevator1.style.transform = "translateY(-240px)";

        setTimeout(() => {
          level2DownArrow.addEventListener("click", function () {
            elevator1.style.transition = `transform 5s ease-in-out`;
            elevator1.style.transform = "translateY(+20px)";
          });
        }, 1000);
      });
    }
  }, 500);
});
