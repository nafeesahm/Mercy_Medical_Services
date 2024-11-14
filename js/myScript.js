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
