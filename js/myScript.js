// Function to update the current time
        function updateTime() {
            const currentDate = new Date();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();

            // Format the time to ensure two digits for minutes and seconds
            const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

            // Display the current time in the div with id 'time'
            document.getElementById("time").innerText = formattedTime;
        }

        // Call the updateTime function every second (1000 ms)
        setInterval(updateTime, 1000);





        function createBubble() {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            // Set random size and position for each bubble
            const size = Math.random() * 50 + 10;  // Bubble size between 10px and 60px
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}vw`;  // Random horizontal position
            
            // Set random animation duration and delay
            bubble.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Duration between 2s and 5s
            bubble.style.animationDelay = `${Math.random() * 2}s`;  // Delay between 0s and 2s
    
            // Append bubble to the body
            document.body.appendChild(bubble);
    
            // Remove bubble when animation ends
            bubble.addEventListener('animationend', () => {
                bubble.remove();
            });
        }
    
        // Create bubbles at intervals
        setInterval(createBubble, 300);  // Creates a new bubble every 300ms
    