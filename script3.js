 // 1. Fonction pour activer/désactiver le Mode Sombre
    const toggleMode = () => {
        document.body.classList.toggle('dark');
        const btn = document.querySelector('.toggle-btn');
        if (document.body.classList.contains('dark')) {
            btn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
            localStorage.setItem('cv-mode', 'dark'); // Sauvegarde le mode
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
            localStorage.setItem('cv-mode', 'light'); // Sauvegarde le mode
        }
    };

    // Appliquer le mode sauvegardé au chargement
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('cv-mode') === 'dark') {
            document.body.classList.add('dark');
            document.querySelector('.toggle-btn').innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
        }
    });

    // 2. Animation au défilement (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animation de fondu pour les blocs
                entry.target.style.animation = 'fadeIn 1.2s ease forwards';

                // Animation des barres de compétences
                if (entry.target.querySelector('.skill-level')) {
                    entry.target.querySelectorAll('.skill-level').forEach(skillBar => {
                        const level = skillBar.getAttribute('data-level');
                        skillBar.style.setProperty('--level', level);
                        skillBar.style.animation = 'fill 2s forwards';
                    });
                }

                observer.unobserve(entry.target); // Arrêter d'observer une fois l'animation lancée
            }
        });
    }, {
        threshold: 0.1 // Déclenche l'animation quand 10% de l'élément est visible
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


    // 3. Fonction pour le Déroulement (Toggle) de la carte "À propos de moi"
    document.getElementById('toggle-about').addEventListener('click', function(e) {
        e.preventDefault();
        const detail = document.getElementById('about-detail');
        const button = e.target;

        if (detail.style.display === 'none' || detail.style.display === '') {
            detail.style.display = 'block';
            button.textContent = 'Voir moins';
        } else {
            detail.style.display = 'none';
            button.textContent = 'Voir plus';
        }
    });

    // 4. Fonction de téléchargement PDF (Simulée)
    window.jsPDF = window.jspdf.jsPDF;
    function downloadCV() {
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.text("Mon CV Professionnel - Salma El Guarh", 10, 10);
        doc.text("Ceci est une version basique. Pour une conversion complète, veuillez utiliser la fonction d'impression du navigateur (Ctrl+P).", 10, 20);
        doc.save("CV_Salma_El_Guarh_Preview.pdf");

        alert("Fonctionnalité de téléchargement PDF activée ! Pour un résultat optimal sur ce design complexe, veuillez utiliser le menu d'impression de votre navigateur (Ctrl+P ou Cmd+P) et choisir 'Enregistrer en PDF').");
    }
