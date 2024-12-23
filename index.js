                                        /* Fonction pour charger afin de corriger les bugs de responsiv */

window.onload = function() {                            // On recharge la page au lancement du site 
    if (!localStorage.getItem('hasRefreshed')) {
        localStorage.setItem('hasRefreshed', 'true');
        window.location.reload();
    } else {
        localStorage.removeItem('hasRefreshed');
    }
};       

/*window.addEventListener('resize', function() {         // On refresh quand la largeur de l'écran change
    window.location.reload();
});/*

                        /*   Effet de survol de la souris pour changer la couleur du logo et de la police  */

//Les variables pour les diffrentes couleurs
const textHover = document.querySelector('.Collaboration'); // La balise qui aura l'effet hover
const targetImage = document.getElementById('targetLogo');   // Le logo principal à changer
const newImageGreen = './Image/icon/logo_vert.png'; 
let isClicked = false; // Variable d'état pour vérouiller le logo orange au clic


//Pour le logo vert
const widthScreen = window.innerWidth                        // Pour définir la taille de l'écran en responsiv design
textHover.addEventListener("mouseover", () => {             // Ajoute un événement au survol de la balise
    if (widthScreen <= 1040) {                             // On ajoute une condition pour le responsiv design
        targetImage.src = 'Image/icon/logo_vert.png';
        targetImage.style.paddingTop = '29px';
        targetImage.style.paddingLeft = '30px';
        targetImage.style.paddingRight = '30px';
        targetImage.style.width = '200px';
        targetImage.style.height = '200px';
    }
    else {  
        targetImage.src = newImageGreen;                  // Change l'image bleue en verte
        targetImage.style.paddingTop = '29px';
        targetImage.style.paddingLeft = '30px';
        targetImage.style.paddingRight = '30px';
        targetImage.style.width = '290px';
        targetImage.style.height = '290px';
    }

    if (widthScreen <= 530) {                         //Pour les petites résolutions
        targetImage.style.paddingTop = '20px';
        targetImage.style.paddingLeft = '20px';
        targetImage.style.paddingRight = '0px';
        targetImage.style.width = '220px';
        targetImage.style.height = '220px';
    }

    if (widthScreen <= 440) {                         //Pour les très petites résolutions
        targetImage.style.paddingTop = '10px';
        targetImage.style.paddingLeft = '10px';
        targetImage.style.paddingRight = '0px';
        targetImage.style.width = '180px';
        targetImage.style.height = '180px';
    }

   
});
 
textHover.addEventListener('mouseout', () => {        // Remet l'image bleue quand la souris quitte la balise nav
    if (!isClicked) {                                // Ne remet pas l'image en bleu si elle est verrouillée en orange
        targetImage.src = 'Image/icon/logo_vert.png';             
    }

    if (widthScreen <= 1040) {
        targetImage.src = 'Image/icon/logo_site.png';
        targetImage.style.paddingTop = '0px';  
        targetImage.style.padding = '0px';
        targetImage.style.paddingLeft = '0px';
        targetImage.style.paddingRight = '0px';
        targetImage.style.width = '260px';
        targetImage.style.height = '260px';
    } else {
    targetImage.src = 'Image/icon/logo_site.png';  
    targetImage.style.paddingTop = '0px';  
    targetImage.style.padding = '0px';
    targetImage.style.paddingLeft = '0px';
    targetImage.style.paddingRight = '0px';
    targetImage.style.width = '340px';
    targetImage.style.height = '340px';}

    if (widthScreen <= 440) {                         //Pour les très petites résolutions
        targetImage.style.paddingTop = '0px';
        targetImage.style.paddingLeft = '0px';
        targetImage.style.paddingRight = '0px';
        targetImage.style.width = '200px';
        targetImage.style.height = '200px';
    }


});



                                            /*  On créer une boucle pour changer les couleurs des polices au survol  */  
//Pour le texte en vert                                            
const greenStyles = {
    color: 'rgb(209, 224, 210)',
    textShadow: '0 0 5px #00c40ae3, 0 0 10px #00c40ae3, 0 0 20px #00c40ae3, 0 0 40px #04ca04aa, 0 0 120px #01ac01aa '      // Ombre portée
};

// Paramètres de style par défaut
const defaultStyles = {
    color: '#b6ffffff',
    textShadow: '0 0 5px #0a00f0e3, 0 0 10px #0a00f0e3, 0 0 20px #0a00f0e3, 0 0 40px #1f14f0aa, 0 0 120px #1f14f0aa'

};
const letters = document.querySelectorAll('.P_Logo, .S_Logo, .And_Logo, .CO_Logo');      //Pour les autres lettres du logo
// Fonction de survol
textHover.addEventListener('mouseover', () => {
    letters.forEach(text => {
        text.style.color = greenStyles.color;
        text.style.textShadow = greenStyles.textShadow;
    });
});
// Fonction pour réinitialiser
textHover.addEventListener('mouseout', () => {
    letters.forEach(text => {
        text.style.color = defaultStyles.color;
        text.style.textShadow = defaultStyles.textShadow;
    });
});


//Pour le texte en orange

const textHoverOrange = document.querySelector('.Contact')
const orangeStyles = {
    color: 'rgb(255, 243, 236)',
    textShadow: '0 0 5px #ff7519, 0 0 10px #ff7519, 0 0 20px #ff7519, 0 0 40px #ff7519, 0 0 120px #e96610'      
};
textHoverOrange.addEventListener('mouseover', () => {
    letters.forEach(text => {
        text.style.color = orangeStyles.color;
        text.style.textShadow = orangeStyles.textShadow;
    });
});
// Fonction pour réinitialiser
textHoverOrange.addEventListener('mouseout', () => {
    letters.forEach(text => {
        text.style.color = defaultStyles.color;
        text.style.textShadow = defaultStyles.textShadow;
    });
});


//Partie contact
const clickContact = document.getElementsByClassName('Contact')[0];

function effetClicOrange(styles) { //On est obligé de créer cette fonction afin de définir le style que l'on veut pour le clic
    letters.forEach(text => {  //On applique une boucle pour prendre toutes les lettres dans la fonction
        text.style.color = styles.color;
        text.style.textShadow = styles.textShadow;
    });
}

                                /*    Partie Logo rattaché à la case contact effet de survol et clic  */

const newImageOrange = './Image/icon/logo_orange.png'; 

textHoverOrange.addEventListener("mouseover", () => {      
    if (!isClicked) { // Ne change l'image que si elle n'a pas été cliquée
        targetImage.src = newImageOrange;                
    }
});
                            /* Hover */
textHoverOrange.addEventListener('mouseout', () => {       
    if (!isClicked) { // Ne remet pas l'image en bleu si elle a été cliquée
        targetImage.src = 'Image/icon/logo_site.png';             
    }
});




