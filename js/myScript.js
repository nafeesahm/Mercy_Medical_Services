
    // JavaScript to create and animate stars
    const starfield = document.getElementById("starfield");

    // Function to create a random number within a given range
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to create stars
    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");

      // Assign random size to the star
      const size = getRandom(2, 6);  // Size between 2px and 6px
      if (size < 3) {
        star.classList.add("small");
      } else if (size < 5) {
        star.classList.add("medium");
      } else {
        star.classList.add("large");
      }

      // Assign random position to the star
      star.style.top = getRandom(0, 100) + "%";
      star.style.left = getRandom(0, 100) + "%";

      // Append the star to the starfield container
      starfield.appendChild(star);

      // Make the star twinkle by changing its opacity
      setInterval(() => {
        star.style.opacity = getRandom(0.4, 1);
      }, getRandom(1000, 3000));  // Randomize twinkle speed (between 1s to 3s)
    }

    // Create multiple stars
    for (let i = 0; i < 200; i++) {
      createStar();
    }
