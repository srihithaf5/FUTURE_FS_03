/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});

/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙";
    }

});

/* =========================
   TOAST MESSAGE
========================= */

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}

/* =========================
   MENU DATA
========================= */

const menuItems = [
    {
        name: "Veg Burger",
        category: "veg",
        price: "₹149",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },

    {
        name: "Paneer Pizza",
        category: "veg",
        price: "₹299",
        image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    },

    {
        name: "Chicken Biryani",
        category: "nonveg",
        price: "₹349",
        image:
            "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd"
    },

    {
        name: "Grilled Chicken",
        category: "nonveg",
        price: "₹399",
        image:
            "https://images.unsplash.com/photo-1532550907401-a500c9a57435"
    },

    {
        name: "Chocolate Brownie",
        category: "dessert",
        price: "₹129",
        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
    },

    {
        name: "Ice Cream Sundae",
        category: "dessert",
        price: "₹119",
        image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb"
    }
];

/* =========================
   DISPLAY MENU
========================= */

const menuContainer =
    document.getElementById("menuContainer");

function displayMenu(items) {

    if (!menuContainer) return;

    menuContainer.innerHTML = "";

    items.forEach(item => {

        menuContainer.innerHTML += `
        
        <div class="menu-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="menu-content">

                <h3>${item.name}</h3>

                <p class="price">${item.price}</p>

                <button class="btn add-cart">
                    Order Now
                </button>

            </div>

        </div>

        `;
    });
}

displayMenu(menuItems);

/* =========================
   FILTER MENU
========================= */

function filterMenu(category) {

    if (category === "all") {
        displayMenu(menuItems);
        return;
    }

    const filtered =
        menuItems.filter(item =>
            item.category === category
        );

    displayMenu(filtered);
}

window.filterMenu = filterMenu;

/* =========================
   SEARCH MENU
========================= */

const searchInput =
    document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", e => {

        const value =
            e.target.value.toLowerCase();

        const filtered =
            menuItems.filter(item =>
                item.name.toLowerCase().includes(value)
            );

        displayMenu(filtered);

    });

}

/* =========================
   AI FOOD RECOMMENDATION
========================= */

function recommendFood() {

    const mood =
        document.getElementById("foodMood").value;

    const result =
        document.getElementById("result");

    const recommendations = {

        spicy:
            "🔥 Chicken Biryani",

        healthy:
            "🥗 Grilled Chicken",

        sweet:
            "🍫 Chocolate Brownie",

        veg:
            "🍕 Paneer Pizza"
    };

    if (!mood) {

        result.textContent =
            "Please select a preference.";

        return;
    }

    result.textContent =
        recommendations[mood];

}

window.recommendFood =
    recommendFood;

/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const reservation = {

                name:
                    document.getElementById("name").value,

                phone:
                    document.getElementById("phone").value,

                date:
                    document.getElementById("date").value,

                time:
                    document.getElementById("time").value,

                guests:
                    document.getElementById("guests").value
            };

            let reservations =
                JSON.parse(
                    localStorage.getItem(
                        "reservations"
                    )
                ) || [];

            reservations.push(reservation);

            localStorage.setItem(
                "reservations",
                JSON.stringify(reservations)
            );

            showToast(
                "Table Reserved Successfully!"
            );

            reservationForm.reset();
        }
    );

}

/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );

if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const email =
                document.getElementById(
                    "newsletterEmail"
                ).value;

            let subscribers =
                JSON.parse(
                    localStorage.getItem(
                        "subscribers"
                    )
                ) || [];

            subscribers.push(email);

            localStorage.setItem(
                "subscribers",
                JSON.stringify(subscribers)
            );

            showToast(
                "Subscribed Successfully!"
            );

            newsletterForm.reset();
        }
    );
}

/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const messageData = {

                name:
                    document.getElementById(
                        "contactName"
                    ).value,

                email:
                    document.getElementById(
                        "contactEmail"
                    ).value,

                message:
                    document.getElementById(
                        "message"
                    ).value
            };

            let messages =
                JSON.parse(
                    localStorage.getItem(
                        "messages"
                    )
                ) || [];

            messages.push(messageData);

            localStorage.setItem(
                "messages",
                JSON.stringify(messages)
            );

            showToast(
                "Message Sent Successfully!"
            );

            contactForm.reset();
        }
    );
}

/* =========================
   TESTIMONIAL SLIDER
========================= */

const reviews =
    document.querySelectorAll(".review");

let reviewIndex = 0;

function changeReview() {

    if (!reviews.length) return;

    reviews.forEach(review =>
        review.classList.remove("active")
    );

    reviewIndex++;

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    reviews[reviewIndex]
        .classList.add("active");
}

setInterval(changeReview, 4000);

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-grid img"
    );

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay =
            document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background =
            "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent =
            "center";
        overlay.style.alignItems =
            "center";
        overlay.style.zIndex = "99999";

        const image =
            document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "15px";

        overlay.appendChild(image);

        document.body.appendChild(
            overlay
        );

        overlay.addEventListener(
            "click",
            () => {
                overlay.remove();
            }
        );
    });
});

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(255,255,255,0.95)";

            navbar.style.boxShadow =
                "0 4px 20px rgba(0,0,0,.1)";
        } else {

            navbar.style.background =
                "rgba(255,255,255,.1)";

            navbar.style.boxShadow =
                "none";
        }

    }
);

/* =========================
   ORDER BUTTONS
========================= */

document.addEventListener(
    "click",
    function (e) {

        if (
            e.target.classList.contains(
                "add-cart"
            )
        ) {

            showToast(
                "Order Request Added!"
            );
        }

    }
);

/* =========================
   SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "95px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#ff6b35";
scrollBtn.style.color = "#fff";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(
    "🍽️ Royal Taste Restaurant Website Loaded Successfully!"
);