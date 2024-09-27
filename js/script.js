// Fonction pour supprimer les balises <link> sauf celle avec style.css
(function removeExtraLinks() {
    const links = document.querySelectorAll("link");
    links.forEach((link) => {
      // Vérifier si le href de la balise <link> n'est pas style.css
      if (!link.href.includes("style.css")) {
        link.remove(); // Supprimer la balise <link>
      }
    });
  })();
  
  // Récupérer tous les boutons
  const buttons = document.querySelectorAll("button");
  
  let activeLink = null;
  let isDarkMode = false; // Variable pour suivre l'état du mode sombre
  
  function loadCSS(href) {
    if (activeLink) {
      activeLink.remove();
    }
  
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
  
    document.head.appendChild(link);
  
    activeLink = link;
  
    // Ajouter une animation après le chargement du CSS
    const container = document.querySelector(".container");
    container.style.opacity = 0; // Masquer l'élément
    setTimeout(() => {
      container.style.opacity = 1; // Révéler avec l'animation
      container.style.transition = "opacity 1.5s"; // Animation sur 1.5 seconde
    }, 500); // Délai court pour que la transition fonctionne
  }
  
  // Fonction pour basculer le mode sombre
  function toggleDarkMode() {
    const body = document.body;
  
    if (!isDarkMode) {
      // Retirer les styles de mode sombre
      body.style.backgroundColor = "#ffffff"; // Inverse de #121212
      body.style.color = "#121212"; // Inverse de #ffffff

      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#c6c6c6"; // Inverse de #3a3a3a
        button.style.color = "#121212"; // Inverse de #ffffff
      });
    } else {
      // Appliquer les styles de mode sombre
      body.style.backgroundColor = "#121212"; // Couleur de fond sombre
      body.style.color = "#ffffff"; // Couleur de texte claire
       const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#3a3a3a"; // Couleur de fond des boutons
        button.style.color = "#ffffff"; // Couleur du texte des boutons
      });
    }
  
    isDarkMode = !isDarkMode;
  }
  
 
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const buttonClass = e.target.classList[0];
  
      switch (buttonClass) {
        case "darkmode":
          toggleDarkMode(); 
           break; 
        case "figure1":
          loadCSS("./style/square.css");
          break;
        case "figure2":
          loadCSS("./style/cat.css");
          break;
        case "figure3":
          loadCSS("./style/swan.css");
          break;
        case "figure4":
          loadCSS("./style/duck.css");
          break;
        case "figure5":
          loadCSS("./style/heart.css");
          break;
        case "figure6":
          loadCSS("./style/turtle.css");
          break;
        case "figure7":
          loadCSS("./style/boat.css");
          break;
        case "figure8":
          loadCSS("./style/mysterymax.css");
          break;
        case "figure9":
          loadCSS("./style/mysteryyo.css");
          break;
        case "figure10":
          loadCSS("./style/mysteryflo.css");
          break;
        default:
          console.log("Aucun fichier CSS correspondant");
      }
    });
  });
  function addPieceClassToChildren() {
    const container = document.querySelector('.container');
    const children = container.children;  
    
    Array.from(children).forEach(child => {
        child.classList.add('piece'); // Ajouter la classe piece à chaque enfant
    });
}

// Appeler la fonction pour ajouter la classe
addPieceClassToChildren();