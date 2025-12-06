
    const toggleMode = () => {
        document.body.classList.toggle('dark');
        const btn = document.querySelector('.toggle-btn');
        if (document.body.classList.contains('dark')) {
            btn.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
            localStorage.setItem('cv-mode', 'dark'); 
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
            localStorage.setItem('cv-mode', 'light'); 
        }
    };

    
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem('cv-mode') === 'dark') {
            document.body.classList.add('dark');
            document.querySelector('.toggle-btn').innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
        }
    });

    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.style.animation = 'fadeIn 1.2s ease forwards';

               
                if (entry.target.querySelector('.skill-level')) {
                    entry.target.querySelectorAll('.skill-level').forEach(skillBar => {
                        const level = skillBar.getAttribute('data-level');
                        skillBar.style.setProperty('--level', level);
                        skillBar.style.animation = 'fill 2s forwards';
                    });
                }

                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


  
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

    
    window.jsPDF = window.jspdf.jsPDF;
    function downloadCV() {
        const doc = new jsPDF('p', 'mm', 'a4');
        doc.text("Mon CV Professionnel - Salma El Guarh", 10, 10);
        doc.text("Ceci est une version basique. Pour une conversion complète, veuillez utiliser la fonction d'impression du navigateur (Ctrl+P).", 10, 20);
        doc.save("CV_Salma_El_Guarh_Preview.pdf");

        alert("Fonctionnalité de téléchargement PDF activée ! Pour un résultat optimal sur ce design complexe, veuillez utiliser le menu d'impression de votre navigateur (Ctrl+P ou Cmd+P) et choisir 'Enregistrer en PDF').");
    }
