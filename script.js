const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const isOpen = button.getAttribute('aria-expanded');
        if (isOpen === 'false') {
            button.setAttribute('aria-expanded', 'true')
        } else {
            button.setAttribute('aria-expanded', 'false')
        }
    });
});