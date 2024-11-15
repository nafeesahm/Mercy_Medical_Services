    // Text to display
    const text = "Welcome to Mercy Medical Services";
    let index = 0;

    function showText() {
      // If there's more text to display
      if (index < text.length) {
        document.getElementById('assistant-text').textContent += text[index];
        index++;
        setTimeout(showText, 50); // Adjusted speed: 50 milliseconds between characters
      }
    }

    // Start displaying the text
    showText();


// --------------JavaScript for heartbeat effect--------------------

const heartbeatText = document.getElementById('heartbeatText');
        
// Set up the heartbeat effect using JavaScript
let scale = 1;
let growing = true;

function pulse() {
    if (growing) {
        scale += 0.006; // Increase scale
        if (scale >= 1.0) { // If scale is too large, start shrinking
            growing = false;
        }
    } else {
        scale -= 0.05; // Decrease scale
        if (scale <= 1) { // If scale is too small, start growing
            growing = true;
        }
    }
    heartbeatText.style.transform = `scale(${scale})`; // Apply scale transform to the text
}

// Call the pulse function every 100ms for the heartbeat effect
setInterval(pulse, 100);    
