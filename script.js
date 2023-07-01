document.addEventListener("DOMContentLoaded", function () {
        const images = document.querySelectorAll("img");
        const resetButton = document.getElementById("reset");
        const verifyButton = document.getElementById("btn");
        const messagePara = document.getElementById("para");
        let selectedImages = [];

        // Helper function to shuffle array
        function shuffleArray(array) {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        }

        // Helper function to reset the state
        function resetState() {
          selectedImages = [];
          verifyButton.style.display = "none";
          resetButton.style.display = "none";
          messagePara.style.display = "none";
          messagePara.textContent = "";
        }

        // Helper function to check if selected images are identical
        function areImagesIdentical() {
          return (
            selectedImages.length === 2 &&
            selectedImages[0].src === selectedImages[1].src
          );
        }

        // Helper function to handle tile clicks
        function handleTileClick(img) {
          if (selectedImages.length < 2 && !selectedImages.includes(img)) {
            selectedImages.push(img);
            resetButton.style.display = "block";
            if (selectedImages.length === 2) {
              verifyButton.style.display = "block";
            }
          }
        }

        // Add click event listeners to the images
        images.forEach((img) => {
          img.addEventListener("click", () => {
            handleTileClick(img);
          });
        });

        // Add click event listener to the reset button
        resetButton.addEventListener("click", () => {
          resetState();
        });

        // Add click event listener to the verify button
        verifyButton.addEventListener("click", () => {
          if (areImagesIdentical()) {
            messagePara.textContent = "You are a human. Congratulations!";
          } else {
            messagePara.textContent =
              "We can't verify you as a human. You selected the non-identical tiles.";
          }
          messagePara.style.display = "block";
          verifyButton.style.display = "none";
        });

        // Initialize the app
        resetState();

        // Generate an array of image URLs (replace with your API endpoint or local image URLs)
        const imageUrls = [
          "./images/g2.jpg",
          "./images/f1.jpg",
          "./images/f2.jpg",
          "./images/f3.jpg",
          "./images/g1.jpg",
          "./images/g2.jpg",
        ];

        // Shuffle the array of images URLs
        shuffleArray(imageUrls);

        // Set the image URLs to the corresponding img elements
        images.forEach((img, index) => {
          img.src = imageUrls[index];
        });
      });