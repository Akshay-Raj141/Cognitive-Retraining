var score = 0;
var tries = 0;
function generateRandomAlphabet() {
        // Define the set of alphabets
        var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // Randomly select an index from 0 to 25 (for 26 alphabets)
        var randomIndex = Math.floor(Math.random() * alphabets.length);
        // Get the alphabet at the selected index
        var selectedAlphabet = alphabets[randomIndex];
    
        // Prompt user to click the correct alphabet
        document.getElementById('popup').innerText = "Click on the letter: " + selectedAlphabet;
        document.getElementById('popup').style.display = 'block';
        
        // Add event listeners to all alphabet elements
        var alphabetElements = document.querySelectorAll('.alphabet');
        alphabetElements.forEach(function(element) {
            element.onclick = function() {
                if (tries < 10) {
                    if (element.textContent === selectedAlphabet) {
                        // Increment score and display
                        score++;
                        document.getElementById('score').innerText = "Score: " + score;
                        document.getElementById('popup').innerText = "Correct! You clicked on the letter: " + selectedAlphabet;
                        document.getElementById('popup').style.color = 'green';
                    } else {
                        document.getElementById('popup').innerText = "Incorrect! Try again.";
                        document.getElementById('popup').style.color = 'red';
                    }
                    tries++;
                    setTimeout(function() {
                        document.getElementById('popup').style.display = 'none';
                    }, 2000);
                }
                if (tries === 10) {
                    // When the user completes 10 tries, save the score
                    saveGameScore(score); 
                }
            };
        });
    }
    
    // Function to save game score
    async function saveGameScore(score) {
        try {
            // Send an HTTP request to save the score
            const response = await fetch('/save-score', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    score: score
                })
            });
            if (response.ok) {
                console.log('Score saved successfully:', score);
            } else {
                console.error('Failed to save score:', response.status);
            }
        } catch (error) {
            console.error('Error saving score:', error);
        }
    }