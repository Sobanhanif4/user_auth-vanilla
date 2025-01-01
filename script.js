// document.addEventListener('DOMContentLoaded', () => {
//     const navButtons = document.querySelector('.nav-buttons');

//     // Create Sign-Up Form HTML inside a container with class 'form-container'
//     const formContainer = document.createElement('div');
//     formContainer.classList.add('form-container');
//     formContainer.innerHTML = `
//       <div class="form-box">
//         <h2>Sign Up</h2>
//         <input type="text" id="signup-username" placeholder="Username" required />
//         <input type="email" id="signup-email" placeholder="Email" required />
//         <input type="password" id="signup-password" placeholder="Password" required />
//         <button id="signup-submit">Sign Up</button>
//         <p><a href="#" class="toggle-signin">Already have an account? Sign In</a></p>
//       </div>
//     `;
//     document.body.appendChild(formContainer);
//     formContainer.style.display = 'none'; // Hide the form initially

//     // Create Sign-In Form HTML
//     const signInFormHTML = `
//       <div class="form-box">
//         <h2>Sign In</h2>
//         <input type="email" id="signin-email" placeholder="Email" required />
//         <input type="password" id="signin-password" placeholder="Password" required />
//         <button id="signin-submit">Sign In</button>
//         <p><a href="#" class="toggle-signup">Don't have an account? Sign Up</a></p>
//       </div>
//     `;
//     formContainer.innerHTML += signInFormHTML;

//     // Initially display only sign-in form
//     const signInForm = formContainer.querySelector('.form-box:last-child');
//     const signUpForm = formContainer.querySelector('.form-box:first-child');
//     signUpForm.style.display = 'none'; // Hide the sign-up form initially

//     // Function to reset Sign In/Sign Up buttons
//     function resetSignInSignUp() {
//         const signUpButton = document.querySelector('.sign-up');
//         const signInButton = document.querySelector('.sign-in');

//         // Show Sign-Up Form when "Sign Up" is clicked
//         signUpButton?.addEventListener('click', () => {
//             signUpForm.style.display = 'block';
//             signInForm.style.display = 'none';
//             formContainer.style.display = 'flex';
//         });

//         // Show Sign-In Form when "Sign In" is clicked
//         signInButton?.addEventListener('click', () => {
//             signInForm.style.display = 'block';
//             signUpForm.style.display = 'none';
//             formContainer.style.display = 'flex';
//         });
//     }

//     // Initially bind the event listeners for Sign In and Sign Up buttons
//     resetSignInSignUp();

//     // Close the form by clicking outside
//     formContainer.addEventListener('click', (e) => {
//         if (e.target === formContainer) {
//             formContainer.style.display = 'none';
//         }
//     });

//     // Handle Sign-Up Form Submission
//     document.getElementById('signup-submit').addEventListener('click', (e) => {
//         e.preventDefault();
//         const username = document.getElementById('signup-username').value;
//         const email = document.getElementById('signup-email').value;
//         const password = document.getElementById('signup-password').value;

//         // Check if the user already exists
//         if (localStorage.getItem(email)) {
//             alert('User already exists. Please sign in.');
//             return;
//         }

//         // Save user data to localStorage
//         const user = { username, email, password };
//         localStorage.setItem(email, JSON.stringify(user));

//         alert('Sign Up Successful!');
//         signInForm.style.display = 'block';
//         signUpForm.style.display = 'none';
//     });

//     // Handle Sign-In Form Submission
//     document.getElementById('signin-submit').addEventListener('click', (e) => {
//         e.preventDefault();
//         const email = document.getElementById('signin-email').value;
//         const password = document.getElementById('signin-password').value;

//         // Retrieve user data from localStorage
//         const user = JSON.parse(localStorage.getItem(email));

//         if (user && user.password === password) {
//             alert('Sign In Successful!');
//             localStorage.setItem('loggedIn', 'true');
//             navButtons.innerHTML = '<a href="#" class="logout">Log Out</a>';
//             formContainer.style.display = 'none';
//         } else {
//             alert('Invalid credentials. Please try again.');
//         }
//     });

//     // Handle Log Out
//     navButtons.addEventListener('click', (e) => {
//         if (e.target.classList.contains('logout')) {
//             localStorage.removeItem('loggedIn');
//             navButtons.innerHTML = `
//               <a href="#" class="sign-in">Sign In</a>
//               <a href="#" class="sign-up">Sign Up</a>
//             `;
//             alert('Logged out successfully!');
//             resetSignInSignUp(); // Reattach the event listeners after logout
//         }
//     });

//     // Check if the user is already logged in
//     if (localStorage.getItem('loggedIn') === 'true') {
//         navButtons.innerHTML = '<a href="#" class="logout">Log Out</a>';
//     }

//     // Add the event listener for toggling between Sign Up and Sign In
//     const toggleSignUpLink = document.querySelector('.toggle-signup');
//     const toggleSignInLink = document.querySelector('.toggle-signin');

//     // Show Sign-Up Form when link "Don't have an account? Sign Up" is clicked
//     toggleSignUpLink?.addEventListener('click', (e) => {
//         e.preventDefault();
//         signInForm.style.display = 'none';
//         signUpForm.style.display = 'block';
//     });

//     // Show Sign-In Form when link "Already have an account? Sign In" is clicked
//     toggleSignInLink?.addEventListener('click', (e) => {
//         e.preventDefault();
//         signUpForm.style.display = 'none';
//         signInForm.style.display = 'block';
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelector('.nav-buttons');
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  formContainer.innerHTML = `
    <div class="form-box" id="signup-form">
      <h2>Sign Up</h2>
      <input type="text" id="signup-username" placeholder="Username" required />
      <input type="email" id="signup-email" placeholder="Email" required />
      <input type="password" id="signup-password" placeholder="Password" required />
      <button id="signup-submit">Sign Up</button>
      <p><a href="#" class="toggle-signin">Already have an account? Sign In</a></p>
    </div>
  `;
  document.body.appendChild(formContainer);
  formContainer.style.display = 'none'; // Hide the form initially

  // Create Sign-In Form HTML
  const signInFormHTML = `
    <div class="form-box" id="signin-form">
      <h2>Sign In</h2>
      <input type="email" id="signin-email" placeholder="Email" required />
      <input type="password" id="signin-password" placeholder="Password" required />
      <button id="signin-submit">Sign In</button>
      <p><a href="#" class="toggle-signup">Don't have an account? Sign Up</a></p>
    </div>
  `;
  formContainer.innerHTML += signInFormHTML;

  // Initially display only the sign-in form
  const signInForm = document.querySelector('#signin-form');
  const signUpForm = document.querySelector('#signup-form');
  signUpForm.style.display = 'none'; // Hide the sign-up form initially

  // Function to reset Sign In/Sign Up buttons
  function resetSignInSignUp() {
    const signUpButton = document.querySelector('.sign-up');
    const signInButton = document.querySelector('.sign-in');

    // Show Sign-Up Form when "Sign Up" is clicked
    signUpButton?.addEventListener('click', () => {
      signUpForm.style.display = 'block';
      signInForm.style.display = 'none';
      formContainer.style.display = 'flex';
    });

    // Show Sign-In Form when "Sign In" is clicked
    signInButton?.addEventListener('click', () => {
      signInForm.style.display = 'block';
      signUpForm.style.display = 'none';
      formContainer.style.display = 'flex';
    });
  }

  // Initially bind the event listeners for Sign In and Sign Up buttons
  resetSignInSignUp();

  // Close the form by clicking outside
  formContainer.addEventListener('click', (e) => {
    if (e.target === formContainer) {
      formContainer.style.display = 'none';
    }
  });

  // Handle Sign-Up Form Submission
  document.getElementById('signup-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if the user already exists
    if (localStorage.getItem(email)) {
      alert('User already exists. Please sign in.');
      return;
    }

    // Save user data to localStorage
    const user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert('Sign Up Successful!');
    signInForm.style.display = 'block';
    signUpForm.style.display = 'none';
  });

  // Handle Sign-In Form Submission
  document.getElementById('signin-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(email));

    if (user && user.password === password) {
      alert('Sign In Successful!');
      localStorage.setItem('loggedIn', 'true');
      navButtons.innerHTML = '<a href="#" class="logout">Log Out</a>';
      formContainer.style.display = 'none';
      displayWriteSection();
      loadStories(); // Load stories when logged in
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });

  // Handle Log Out
  navButtons.addEventListener('click', (e) => {
    if (e.target.classList.contains('logout')) {
      localStorage.removeItem('loggedIn');
      navButtons.innerHTML = `
        <a href="#" class="sign-in">Sign In</a>
        <a href="#" class="sign-up">Sign Up</a>
      `;
      alert('Logged out successfully!');
      resetSignInSignUp(); // Reattach the event listeners after logout
    }
  });

  // Check if the user is already logged in
  if (localStorage.getItem('loggedIn') === 'true') {
    navButtons.innerHTML = '<a href="#" class="logout">Log Out</a>';
    displayWriteSection();
    loadStories();
  }

  // Add the event listener for toggling between Sign Up and Sign In
  const toggleSignUpLink = document.querySelector('.toggle-signup');
  const toggleSignInLink = document.querySelector('.toggle-signin');

  // Show Sign-Up Form when link "Don't have an account? Sign Up" is clicked
  toggleSignUpLink?.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.style.display = 'none';
    signUpForm.style.display = 'block';
  });

  // Show Sign-In Form when link "Already have an account? Sign In" is clicked
  toggleSignInLink?.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.style.display = 'none';
    signInForm.style.display = 'block';
  });

  // Story Writing Section
  const writeSection = document.querySelector('#write-section');
  const storiesList = document.getElementById('stories-list');

  function displayWriteSection() {
    writeSection.style.display = 'block';
  }

  // Load Published Stories
  function loadStories() {
    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    storiesList.innerHTML = '';
    stories.forEach((story) => {
      const storyItem = document.createElement('div');
      storyItem.classList.add('story-item');
      storyItem.innerHTML = `<h3>${story.title}</h3><p>${story.content}</p>`;
      storiesList.appendChild(storyItem);
    });
  }

  // Handle Story Submission
  const storyForm = document.getElementById('write-story-form');
  const titleInput = document.getElementById('story-title');
  const contentInput = document.getElementById('story-content');
  const submitStoryButton = document.getElementById('submit-story');

  storyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
      alert('Please enter both title and content.');
      return;
    }

    const newStory = { title, content };

    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    stories.push(newStory);

    localStorage.setItem('stories', JSON.stringify(stories));

    alert('Story published!');
    titleInput.value = '';
    contentInput.value = '';
    loadStories();
  });
});
