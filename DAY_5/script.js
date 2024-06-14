document.addEventListener("DOMContentLoaded", function() {
    var counterElement = document.getElementById('counter');
    var loader = document.getElementById('loader');
    var content = document.getElementById('content');
    var count = 0;
    var interval;

    // Créer une nouvelle image pour charger le background-image
    var image = new Image();
    image.src = 'welding_man.jpg'; // Remplacez par l'URL de votre image

    // Attendre que l'image soit chargée avant de démarrer le compteur
    image.onload = function() {
        // Afficher l'image de fond et commencer le compteur
        content.style.display = 'flex';
        startCounter();
    };

    // Fonction pour démarrer le compteur
    function startCounter() {
        interval = setInterval(function() {
            counterElement.textContent = count + '%';
            count++;
            if (count > 100) {
                clearInterval(interval);
                loader.style.display = 'none';
                document.body.style.overflow = 'auto'; // Rétablit le défilement
            }
        }, 30); // Augmente le compteur de 1% toutes les 30ms
    }
});
