// app.js - Global application logic

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Logic ---
    const navLoggedIn = document.getElementById('nav-logged-in');
    const navLoggedOut = document.getElementById('nav-logged-out');
    const logoutButton = document.getElementById('logout-button');
    const loginTestButton = document.getElementById('login-test-button'); // This is for testing

    // Function to check login state and update navbar
    function checkLoginStatus() {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            navLoggedIn.style.display = 'flex';
            navLoggedOut.style.display = 'none';
        } else {
            navLoggedIn.style.display = 'none';
            navLoggedOut.style.display = 'flex';
        }
    }

    // Event listener for the "Log Out" button
    if (logoutButton) {
        logoutButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'false');
            alert('You have been logged out.'); // User feedback
            window.location.reload(); // Refresh to see the change
        });
    }

    // --- FOR PROTOTYPE TESTING ONLY ---
    // A test button to simulate logging in
    if (loginTestButton) {
        loginTestButton.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem('isLoggedIn', 'true');
            alert('You are now logged in!'); // User feedback
            window.location.reload(); // Refresh to see the change
        });
    }

    // Run the check when the page loads
    checkLoginStatus();

});