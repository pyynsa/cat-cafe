const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".dropdown-menu");

const menuIcon = document.getElementById("menuIcon")

toggleBtn.addEventListener("click", () => {
    dropdown.classList.toggle("top-24")

    // change menu icon
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-xmark')
    } else {
        menuIcon.classList.remove('fa-xmark')
        menuIcon.classList.add('fa-bars')
    }
})