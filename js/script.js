// Sélectionner tous les boutons
const boutons = document.querySelectorAll('button');

// Ajouter des IDs uniques aux boutons
boutons.forEach((bouton, index) => {
    bouton.id = `btn-${index + 1}`; // Attribuer un id basé sur l'index
});

// Associer chaque bouton à la div correspondante
const divs = {
    'btn-1': document.querySelector('.carre'),  // Exemple pour le carré
    'btn-2': document.querySelector('.chat'),   // Exemple pour le chat
    'btn-3': document.querySelector('.cygne'),  // Exemple pour le cygne
    'btn-4': document.querySelector('.canard'), // Exemple pour le canard
    'btn-5': document.querySelector('.coeur'),  // Exemple pour le coeur
    'btn-6': document.querySelector('.tortue'), // Exemple pour la tortue
    'btn-7': document.querySelector('.bateau'), // Exemple pour le bateau
    'btn-8': document.querySelector('.mystereyo') // Exemple pour le mystère
};

// Ajouter un gestionnaire d'événements à chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener('click', (event) => {
        const boutonId = event.target.id; // Récupérer l'id du bouton cliqué
        const div = divs[boutonId]; // Récupérer la div correspondante

        if (div) {
            // Basculer entre 'block' et 'none' pour afficher/masquer
            if (div.style.display === 'none' || div.style.display === '') {
                div.style.display = 'block'; // Afficher la div
            } else {
                div.style.display = 'none'; // Masquer la div
            }
        } else {
            console.log('Aucun élément correspondant à ce bouton');
        }
    });
});
