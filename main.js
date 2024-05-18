// const signInBtn = document.getElementById("signIn");
// const signUpBtn = document.getElementById("signUp");
// const fistForm = document.getElementById("form1");
// const secondForm = document.getElementById("form2");
// const container = document.querySelector(".container");

// // document.addEventListener('DOMContentLoaded', () => {
// // 	const signUpForm = document.getElementById('form1');
  
// // 	signUpForm.addEventListener('submit', async (event) => {
// // 	  event.preventDefault();
  
// // 	  // Extract user input
// // 	  const username = document.getElementById('signup-username').value;
// // 	  const email = document.getElementById('signup-email').value;
// // 	  const password = document.getElementById('signup-password').value;
  
// // 	  // Send HTTP POST request to backend
// // 	  try {
// // 		const response = await fetch('/signup', {
// // 		  method: 'POST',
// // 		  headers: {
// // 			'Content-Type': 'application/json'
// // 		  },
// // 		  body: JSON.stringify({
// // 			username: username,
// // 			email: email,
// // 			password: password
// // 		  })
// // 		});
  
// // 		if (response.ok) {
// // 		  console.log('User registered successfully');
// // 		  // Redirect or show success message as needed
// // 		} else {
// // 		  console.error('User registration failed');
// // 		  // Handle error response
// // 		}
// // 	  } catch (error) {
// // 		console.error('Error registering user:', error);
// // 		// Handle fetch error
// // 	  }
// // 	});
// //   });
  
// document.addEventListener('DOMContentLoaded', () => {
// 	const signUpForm = document.getElementById('form1');
  
// 	signUpForm.addEventListener('submit', async (event) => {
// 	  event.preventDefault();
  
// 	  // Extract user input
// 	  const username = document.getElementById('signup-username').value;
// 	  const email = document.getElementById('signup-email').value;
// 	  const password = document.getElementById('signup-password').value;
  
// 	  // Send HTTP POST request to backend
// 	  try {
// 		const response = await fetch('/signup', {
// 		  method: 'POST',
// 		  headers: {
// 			'Content-Type': 'application/json'
// 		  },
// 		  body: JSON.stringify({
// 			username: username,
// 			email: email,
// 			password: password
// 		  })
// 		});
  
// 		if (response.ok) {
// 		  console.log('User registered successfully');
// 		  // Redirect to sign-in page
// 		  container.classList.remove("right-panel-active");
// 		} else {
// 		  console.error('User registration failed');
// 		  // Handle error response
// 		}
// 	  } catch (error) {
// 		console.error('Error registering user:', error);
// 		// Handle fetch error
// 	  }
// 	});

// 	signInForm.addEventListener('submit', async (event) => {
// 		event.preventDefault();
		
// 		// Extract user input
// 		const email = document.getElementById('signin-email').value;
// 		const password = document.getElementById('signin-password').value;
		
// 		// Send HTTP POST request to backend for sign-in
// 		try {
// 		  const response = await fetch('/signin', {
// 			method: 'POST',
// 			headers: {
// 			  'Content-Type': 'application/json'
// 			},
// 			body: JSON.stringify({
// 			  email: email,
// 			  password: password
// 			})
// 		  });
		
// 		  if (response.ok) {
// 			// Redirect to main page if credentials are correct
// 			window.location.href = 'main.html';
// 		  } else {
// 			// Display error message if credentials are incorrect
// 			const errorMessage = await response.json();
// 			console.error('Wrong password:', errorMessage.message);
// 			// Display error message to the user (you can update this logic based on your UI)
// 			alert('Wrong password. Please try again.');
// 		  }
// 		} catch (error) {
// 		  console.error('Error signing in:', error);
// 		  // Handle fetch error
// 		}
// 	  });	  
	  
//   });
  
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

document.addEventListener('DOMContentLoaded', () => {
	const signUpForm = document.getElementById('form1');
  
	signUpForm.addEventListener('submit', async (event) => {
	  event.preventDefault();
  
	  // Extract user input
	  const username = document.getElementById('signup-username').value;
	  const email = document.getElementById('signup-email').value;
	  const password = document.getElementById('signup-password').value;
  
	  // Send HTTP POST request to backend
	  try {
		const response = await fetch('/signup', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			username: username,
			email: email,
			password: password
		  })
		});
  
		if (response.ok) {
		  console.log('User registered successfully');
		  // Redirect to sign-in page
		  container.classList.remove("right-panel-active")
		} else {
		  console.error('User registration failed');
		  // Handle error response
		}
	  } catch (error) {
		console.error('Error registering user:', error);
		// Handle fetch error
	  }
	});

	const signInForm = document.getElementById('form2');
    signInForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        // Extract user input
        const email = document.getElementById('signin-email').value;
        const password = document.getElementById('signin-password').value;
        
        // Send HTTP POST request to backend for sign-in
        try {
            const response = await fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            // window.location.href = 'main.html';
            if (!response.ok) {
                // Redirect to main page if credentials are correct
                window.location.href = 'main.html';
            } else {
                // Display error message if credentials are incorrect
                const errorMessage = await response.json();
                console.error('Wrong password:', errorMessage.message);
                // Display error message to the user (you can update this logic based on your UI)
                alert('Wrong password. Please try again.');
            }
        } catch (error) {
            console.error('Error signing in:', error);
            // Handle fetch error
        }
    });	 	  
});
