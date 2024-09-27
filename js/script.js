
(function removeExtraLinks() {
    const links = document.querySelectorAll("link");
    links.forEach((link) => {

      if (!link.href.includes("style.css")) {
        link.remove(); 
      }
    });
  })();
  

  const buttons = document.querySelectorAll("button");
  
  let activeLink = null;
  let isDarkMode = false; 
  
  function loadCSS(href) {
    if (activeLink) {
      activeLink.remove();
    }
  
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
  
    document.head.appendChild(link);
  
    activeLink = link;
  

    const container = document.querySelector(".container");
    container.style.opacity = 0; 
    setTimeout(() => {
      container.style.opacity = 1; 
      container.style.transition = "opacity 1.5s"; 
    }, 500);
  }
  
  // Fonction pour basculer le mode sombre
  function toggleDarkMode() {
    const body = document.body;
  
    if (!isDarkMode) {
      body.style.backgroundColor = "#ffffff"; 
      body.style.color = "#121212";

      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#c6c6c6"; 
        button.style.color = "#121212";
      });
    } else {

      body.style.backgroundColor = "#121212"; 
      body.style.color = "#ffffff"; 
       const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#3a3a3a";
        button.style.color = "#ffffff"; 
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
        child.classList.add('piece'); 
    });
}


addPieceClassToChildren();