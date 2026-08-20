// ========================================
// ULAR SUVAI - SCRIPT.JS
// PART 3
// ========================================


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");


// Open / Close mobile menu

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ========================================
// CATEGORY BUTTON
// ========================================

function openCategory(categoryId) {

    const category = document.getElementById(categoryId);

    if (!category) {
        return;
    }

    // Scroll smoothly to selected category

    category.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ========================================
// CATEGORY HIGHLIGHT
// ========================================

function highlightCategory(categoryId) {

    const category = document.getElementById(categoryId);

    if (!category) {
        return;
    }

    category.classList.add("category-highlight");


    setTimeout(function () {

        category.classList.remove("category-highlight");

    }, 1500);

}


// ========================================
// UPDATE CATEGORY BUTTON FUNCTION
// ========================================

document.querySelectorAll(".category-button").forEach(function (button) {

    button.addEventListener("click", function () {

        const categoryId = button
            .getAttribute("onclick")
            .match(/'([^']+)'/);

        if (categoryId && categoryId[1]) {

            setTimeout(function () {

                highlightCategory(categoryId[1]);

            }, 500);

        }

    });

});


// ========================================
// CLOSE MOBILE MENU WHEN SCROLLING
// ========================================

window.addEventListener("scroll", function () {

    if (navLinks.classList.contains("active")) {

        navLinks.classList.remove("active");

    }

});


// ========================================
// PREVENT EMPTY LINKS
// ========================================

document.querySelectorAll('a[href="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

    });

});


// ========================================
// PAGE LOADED
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Ular Suvai website loaded successfully.");

});
