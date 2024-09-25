const container = document.querySelector('.container');
const childDivs = container.querySelectorAll('div');
childDivs.forEach(div => {
    div.classList.add('piece')
});

// Sélectionner tous les boutons
const boutons = document.querySelectorAll('button');

// Ajouter des IDs uniques aux boutons
boutons.forEach((bouton, index) => {
    bouton.id = `btn-${index + 1}`; // Attribuer un id basé sur l'index
});

// Ajouter un événement de clic à chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener('click', (event) => {
        const boutonId = event.target.id; // Récupère l'id du bouton cliqué

        switch (boutonId) {
            case 'btn-1':
                console.log('cas pour  mode nuit ');
                break;
            case 'btn-2':
                console.log('carre a faire par max ');
                break;
            case 'btn-3':
                console.log('chat a faire par flo ');
                break;
            case 'btn-4':
                console.log('cygne a faire par max ');
                break;
            case 'btn-5':
                console.log('canard a faire par flo');
                break;
            case 'btn-6':
                console.log('coeur a faire par flo');
                break;
            case 'btn-7':
                console.log('tortue a faire par yo');
                break;
            case 'btn-8':
                console.log('bateau a faire par yo');
                break;
            case 'btn-9':
                console.log('mystere max a faire par max ');
                break;
            case 'btn-10':
                console.log('myster flo a faire par flo');
                break;
                case 'btn-11':
                console.log('mystere yo a faire par yoh ');
                break;
            default:
                console.log('Aucun bouton correspondant');
        }
    });
});

