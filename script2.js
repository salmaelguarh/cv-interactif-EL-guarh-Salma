document.getElementById("btnFormation").onclick = function () {
    const zone = document.getElementById("contenuFormation");

    if (zone.style.display === "none") {
        zone.style.display = "block";
        this.textContent = "Afficher moins";
    } else {
        zone.style.display = "none";
        this.textContent = "Afficher plus";
    }
};
