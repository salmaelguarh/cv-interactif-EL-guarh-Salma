
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.onclick = function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    };
});

// Mode Dark
let btn = document.getElementById("modeBtn");
btn.onclick = () => {
    document.body.classList.toggle("dark");
};
