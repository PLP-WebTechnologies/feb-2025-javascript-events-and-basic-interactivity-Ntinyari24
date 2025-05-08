document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const showLoginBtn = document.getElementById("show-login");
    const showSignupBtn = document.getElementById("show-signup");
    const cancelBtns = document.querySelectorAll(".cancel-btn");
  
    // Hide both forms on load
    loginForm.classList.add("hidden");
    signupForm.classList.add("hidden");
  
    // Show login form when Login button is clicked
    showLoginBtn.addEventListener("click", () => {
      loginForm.classList.remove("hidden");
      signupForm.classList.add("hidden");
    });
  
    // Show signup form when Sign Up button is clicked
    showSignupBtn.addEventListener("click", () => {
      signupForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
    });
  
    // Hide the current form when the cancel button is clicked
    cancelBtns.forEach(button => {
      button.addEventListener("click", () => {
        loginForm.classList.add("hidden");
        signupForm.classList.add("hidden");
      });
    });
  });
  
  

