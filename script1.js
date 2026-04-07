// // const openBtn = document.querySelector(".navbar-mobile-open");
// // const closeBtn = document.querySelector(".navbar-mobile-close");
// // const menu = document.querySelector(".navbar-btns-mob");

// // openBtn.addEventListener("click", () => {
// //     menu.classList.remove("navbar-mob-hide");   // show menu
// //     openBtn.classList.add("navbar-mob-hide");   // hide open icon
// //     closeBtn.classList.remove("navbar-mob-hide"); // show close icon
// // });

// // closeBtn.addEventListener("click", () => {
// //     menu.classList.add("navbar-mob-hide");      // hide menu
// //     openBtn.classList.remove("navbar-mob-hide"); // show open icon
// //     closeBtn.classList.add("navbar-mob-hide");   // hide close icon
// // });

// // const openBtn = document.querySelector(".navbar-mobile-open");
// // const closeBtn = document.querySelector(".navbar-mobile-close");
// // const menu = document.querySelector(".navbar-btns-mob");
// // const menuLinks = document.querySelectorAll(".navbar-btn-mob");

// // // Open menu
// // openBtn.addEventListener("click", () => {
// //     menu.classList.remove("navbar-mob-hide");
// //     openBtn.classList.add("navbar-mob-hide");
// //     closeBtn.classList.remove("navbar-mob-hide");
// // });

// // // Close menu (close button)
// // closeBtn.addEventListener("click", closeMenu);

// // // Close menu when clicking any link
// // menuLinks.forEach(link => {
// //     link.addEventListener("click", closeMenu);
// // });

// // // Reusable function
// // function closeMenu() {
// //     menu.classList.add("navbar-mob-hide");
// //     openBtn.classList.remove("navbar-mob-hide");
// //     closeBtn.classList.add("navbar-mob-hide");
// // }

// // Select both containers
// const englishContainer = document.querySelector(".container");
// const tamilContainer = document.querySelector(".container-tamil");

// // Select both toggles
// const toggle1 = document.getElementById('langToggle1');
// const toggle2 = document.getElementById('langToggle2');

// function handleLanguageChange(event) {
//     const isChecked = event.target.checked;

//     // 1. Keep both toggles in sync
//     toggle1.checked = isChecked;
//     toggle2.checked = isChecked;

//     // 2. Switch visibility
//     if (isChecked) {
//         // Show Tamil
//         englishContainer.classList.add("cont-hides");
//         tamilContainer.classList.remove("cont-hides");
//     } else {
//         // Show English
//         tamilContainer.classList.add("cont-hides");
//         englishContainer.classList.remove("cont-hides");
//     }

//     // 3. Scroll to top so the user starts at the beginning of the new language
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// // Attach the same function to both toggles
// if (toggle1) toggle1.addEventListener('change', handleLanguageChange);
// if (toggle2) toggle2.addEventListener('change', handleLanguageChange);


/* new */


// // Mobile Menu Logic
// const openBtn = document.querySelectorAll('.navbar-mobile-open');
// const closeBtn = document.querySelectorAll('.navbar-mobile-close');
// const mobileMenu = document.querySelectorAll('.navbar-btns-mob');

// // Function to toggle menu
// const toggleMenu = (isOpen) => {
//     mobileMenu.forEach(menu => {
//         if (isOpen) {
//             menu.classList.remove('navbar-mob-hide');
//         } else {
//             menu.classList.add('navbar-mob-hide');
//         }
//     });
    
//     openBtn.forEach(btn => btn.style.display = isOpen ? 'none' : 'block');
//     closeBtn.forEach(btn => {
//         if (isOpen) {
//             btn.classList.remove('navbar-mob-hide');
//             btn.style.display = 'block';
//         } else {
//             btn.classList.add('navbar-mob-hide');
//             btn.style.display = 'none';
//         }
//     });
// };

// openBtn.forEach(btn => btn.addEventListener('click', () => toggleMenu(true)));
// closeBtn.forEach(btn => btn.addEventListener('click', () => toggleMenu(false)));

// // Language Switcher Logic
// const langToggles = [document.getElementById('langToggle1'), document.getElementById('langToggle2')];
// const englishSection = document.querySelector('.container');
// const tamilSection = document.querySelector('.tamil-container');

// langToggles.forEach(toggle => {
//     if (toggle) {
//         toggle.addEventListener('change', function() {
//             // Synchronize both toggles (web and mobile)
//             const isChecked = this.checked;
//             langToggles.forEach(t => t.checked = isChecked);

//             if (isChecked) {
//                 // Show Tamil, Hide English
//                 tamilSection.classList.remove('cont-hides');
//                 englishSection.classList.add('cont-hides');
//             } else {
//                 // Show English, Hide Tamil
//                 englishSection.classList.remove('cont-hides');
//                 tamilSection.classList.add('cont-hides');
//             }
//         });
//     }
// });









// --- 1. MOBILE MENU LOGIC ---
// Selects all menu icons and containers across the site
const openMenuBtns = document.querySelectorAll('.navbar-mobile-open');
const closeMenuBtns = document.querySelectorAll('.navbar-mobile-close');

// Open Menu Functionality
openMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parentNav = btn.closest('.navbar-mob');
        const menuLinks = parentNav.querySelector('.navbar-btns-mob');
        const closeBtn = parentNav.querySelector('.navbar-mobile-close');

        menuLinks.classList.remove('navbar-mob-hide'); // Show links
        closeBtn.classList.remove('navbar-mob-hide');  // Show 'X' icon
        btn.classList.add('navbar-mob-hide');          // Hide hamburger icon
    });
});

// Close Menu Functionality
closeMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const parentNav = btn.closest('.navbar-mob');
        const menuLinks = parentNav.querySelector('.navbar-btns-mob');
        const openBtn = parentNav.querySelector('.navbar-mobile-open');

        menuLinks.classList.add('navbar-mob-hide');    // Hide links
        btn.classList.add('navbar-mob-hide');          // Hide 'X' icon
        openBtn.classList.remove('navbar-mob-hide');   // Show hamburger icon
    });
});


// --- 2. LANGUAGE SWITCHER LOGIC ---
// Targets the English and Tamil main containers
const englishSection = document.querySelector('.container');
const tamilSection = document.querySelector('.tamil-container');

// Targets all toggles (English: langToggle1, Tamil: langToggle2)
const langToggles1 = document.querySelectorAll('#langToggle1');
const langToggles2 = document.querySelectorAll('#langToggle2');

// Function to synchronize and switch language
function switchLanguage(isChecked) {
    // Sync all checkboxes so mobile and web toggles match
    [...langToggles1, ...langToggles2].forEach(toggle => {
        toggle.checked = isChecked;
    });

    if (isChecked) {
        // Switch to Tamil
        tamilSection.classList.remove('cont-hides');
        englishSection.classList.add('cont-hides');
    } else {
        // Switch to English
        englishSection.classList.remove('cont-hides');
        tamilSection.classList.add('cont-hides');
    }
}

// Attach event listeners to all toggle instances
[...langToggles1, ...langToggles2].forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        switchLanguage(e.target.checked);
    });
});