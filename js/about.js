const siteContent = {
    "nav": {
      "nav1": "Find Your School",
      "nav2": "Learn More",
      "nav3": "About Us",
      "nav4": "Login",
      "nav5": "Home",
    },
    "main-content": {
        "about-h2":"About Bubl",
        "about-content": "Making friends can be difficult. Throw in a new school with a new enviroment and it can seem even harder. Bubl seeks to assist elementary children transitioning to middle school. With Bubl, social bubbles can begin to grow before classes even begin.",
        "layout-h2":"Kid Friendly Layout",
        "layout-content": "With our simple layout, kids will be able to navigate the app with ease. With less time spent figuring out the layout, children can quickly begin to make connections.",
        "controls-h2":"Parental Controls",
        "controls-content": "In the age of rising technology and limitless social media, many parents worry their children may have access to worrisome content. Find out more about our parental controls and safety features.",
    },
    "mid": {
    "button": "Sign Up"
    },
    "footer": {
        "copyright" : "©2019 BUBL, INC. ALL RIGHTS RESERVED.",
        "copyright2" :"===All trademarks referenced herein are the properties of their respective owners.",
    }
}

let foot = document.querySelector(".container h3")
foot.textContent = (siteContent["footer"]["copyright"])





//===== Event Listeners =====//

const colorNav1 = document.querySelectorAll(".navbar a")

colorNav1.forEach(a => {
    a.addEventListener("pointerover", () => {
        a.style.color = "#bdd13e";
    })
});

colorNav1.forEach(b => {
    b.addEventListener("mouseout", () => {
        b.style.color = "#485161";
    })
});

colorNav1.forEach(c => {
    c.addEventListener('drag', () => {
        c.style.color = "#ffffff";
    })
})