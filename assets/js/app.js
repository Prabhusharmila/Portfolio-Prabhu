// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });


// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

    // const moreAboutMeBtn = document.getElementById('more-about-me-btn');
    // const moreAboutMeContent = document.getElementById('more-about-me-content');
    // //const moreAboutMeContent = document.getElementById('bio-text');


    // moreAboutMeBtn.addEventListener('click', function() {
    //     if (moreAboutMeContent.style.display === 'none') {
    //         moreAboutMeContent.style.display = 'block';
    //         moreAboutMeBtn.textContent = 'Close More About Me';
    //     } else {
    //         moreAboutMeContent.style.display = 'none';
    //         moreAboutMeBtn.textContent = 'More About Me';
    //     }
    // });
