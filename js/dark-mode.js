const $html = document.querySelector('html')
const toggle = document.getElementById('toggle');
const ball = document.getElementById('ball');

// Create Event Listener for the click
toggle.addEventListener('click', () => {
    //If the ball is at left position of 3 on click itll move it to 26px
    if (ball.style.left == "1px") {
        ball.style.left = "26px";
        ball.style.transition = ".3s linear";
    }
    // Otherwise itll move it back to 1px
    else {
        ball.style.left = "1px";
        ball.style.transition = ".3s linear";
    }
    //Created a function within the Event listener that changed the style for dark mode
    const DarkMode = () => {
        if (ball.style.left == "1px") {
            $html.classList.remove('dark-mode')

        } else if (ball.style.left == "26px") {
            $html.classList.toggle('dark-mode')
        }
    }
    DarkMode();
})