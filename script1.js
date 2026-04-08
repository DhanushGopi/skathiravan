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


// // --- 2. LANGUAGE SWITCHER LOGIC ---
// // Targets the English and Tamil main containers
// const englishSection = document.querySelector('.container');
// const tamilSection = document.querySelector('.tamil-container');

// // Targets all toggles (English: langToggle1, Tamil: langToggle2)
// const langToggles1 = document.querySelectorAll('#langToggle1');
// const langToggles2 = document.querySelectorAll('#langToggle2');

// // Function to synchronize and switch language
// function switchLanguage(isChecked) {
//     // Sync all checkboxes so mobile and web toggles match
//     [...langToggles1, ...langToggles2].forEach(toggle => {
//         toggle.checked = isChecked;
//     });

//     if (isChecked) {
//         // Switch to Tamil
//         tamilSection.classList.remove('cont-hides');
//         englishSection.classList.add('cont-hides');
//     } else {
//         // Switch to English
//         englishSection.classList.remove('cont-hides');
//         tamilSection.classList.add('cont-hides');
//     }
// }

// // Attach event listeners to all toggle instances
// [...langToggles1, ...langToggles2].forEach(toggle => {
//     toggle.addEventListener('change', (e) => {
//         switchLanguage(e.target.checked);
//     });
// });

// --- 2. LANGUAGE SWITCHER LOGIC ---

// Targets the English and Tamil main containers
const englishSection = document.querySelector('.container');
const tamilSection = document.querySelector('.tamil-container');

// Targets all toggles by class for reliability (instead of just IDs)
const allToggles = document.querySelectorAll('.lang-check');

/**
 * Function to synchronize and switch language
 * @param {boolean} isChecked - The state of the toggle
 */
function switchLanguage(isChecked) {
    // 1. Sync all checkboxes so mobile and web toggles match visually
    allToggles.forEach(toggle => {
        toggle.checked = isChecked;
    });

    // 2. Logic: If Checked, show Tamil. If Unchecked, show English.
    // (Adjust this if you want the "On" state to be English)
    if (isChecked) {
        // Show Tamil
        tamilSection.classList.remove('cont-hides');
        englishSection.classList.add('cont-hides');
    } else {
        // Show English
        englishSection.classList.remove('cont-hides');
        tamilSection.classList.add('cont-hides');
    }
}

// Attach event listeners to all toggle instances
allToggles.forEach(toggle => {
    toggle.addEventListener('change', (e) => {
        switchLanguage(e.target.checked);
    });
});

// --- 3. INITIAL STATE CHECK ---
// Since Tamil is default, ensure all toggles are "Checked" on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(true); 
});