document.addEventListener('DOMContentLoaded', () => {   // Réinistialisation des classes à chaque rafraîchissement
    CardVisible.classList.remove('visible');
    NavPortrait.classList.remove('visible');
    CollabVisible.classList.remove('visible');
    baliseContactInfo.classList.remove('visible');
    animationCVCard.classList.remove('visible');
});


                            /*       Animation du défilement des cards en page d'accueil   */

const portrait = document.getElementsByClassName('Portrait')[0];
const animationCVCard = document.getElementsByClassName('reception_photo-icon')[0];

const CardVisible = document.getElementById('Pos_Presentation');
const NavPortrait = document.getElementsByClassName('Portrait')[0];

const collaboration = document.getElementsByClassName('Collaboration')[0];
const CollabVisible = document.getElementById('Pos_Collaboration');

const navContact = document.getElementsByClassName('Contact')[0];
const baliseContactInfo = document.getElementById('contact_Info');

const htmlElement = document.documentElement;
const body = document.body;
       

// Permet de scroll tout en cachant les pages
portrait.addEventListener('click', () => {
    // Vérifie la valeur actuelle de overflow
    if (htmlElement.style.overflow === 'hidden' || htmlElement.style.overflow === '') {
        htmlElement.style.overflow = 'visible' ; // Réactive le défilement
        body.style.overflow= 'visible';        
    } else {
        htmlElement.style.overflow = 'hidden'; // Désactive le défilement
    }
}); 

portrait.addEventListener('click', () => {   
    CardVisible.classList.toggle('visible');
    NavPortrait.classList.toggle('visible');  //Animation header
    animationCVCard.classList.toggle('visible'); //Animation de la photo de CV    
    if (collaboration.classList.contains("visible") || baliseContactInfo.classList.contains('visible')) { // On ajoute ces conditions au cas où on acrtive à la suite 2 headers
        collaboration.classList.remove('visible');  //Permet d'enlever les autres cards
        CollabVisible.classList.remove('visible');

        navContact.classList.remove('visible');
        baliseContactInfo.classList.remove('visible');
    }
    if (CardVisible.classList.contains("visible")) { htmlElement.style.overflow = 'visible'}; //Pour être sur qu'à chaque fois que la page apparait on puisse scroller
});


// Pour la partie collaboration
collaboration.addEventListener('click', () => {
    if (htmlElement.style.overflow === 'hidden' || htmlElement.style.overflow === '') {
        htmlElement.style.overflow = 'visible'; // Réactive le défilement
        body.style.overflow= 'visible'; 
    } else {
        htmlElement.style.overflow = 'hidden'; // Désactive le défilement
    }
});

collaboration.addEventListener('click', () => {    
    CollabVisible.classList.toggle('visible');
    collaboration.classList.toggle('visible'); //Animation header
    animationCVCard.classList.remove('visible'); //Animation de la photo de CV
    if (portrait.classList.contains("visible") || navContact.classList.contains('visible')) { // On ajoute ces conditions au cas où on acrtive à la suite 2 headers
            portrait.classList.remove('visible'); // Le but est d'enlever l'autre CARD
            CardVisible.classList.remove('visible');

            navContact.classList.remove('visible');
            baliseContactInfo.classList.remove('visible');
    }

    if (CollabVisible.classList.contains("visible")) { htmlElement.style.overflow = 'visible'}; //Pour être sur qu'à chaque fois que la page apparait on puisse scroller
});



//Pour la partie contact
clickContact.addEventListener('click', () => { //Au clic on fait apparaître l'encadr avec les coordonnées
    navContact.classList.toggle('visible'); //Pour donner l'effet du hover au clic
    animationCVCard.classList.remove('visible'); 
    body.style.overflow= 'hidden'; 
    htmlElement.style.overflow = 'hidden';
    if (baliseContactInfo.classList.contains('visible')) {
        // Retire la classe pour la disparition
        baliseContactInfo.classList.remove('visible');
    } else {
        // Ajoute la classe pour l’apparition
        baliseContactInfo.classList.add('visible');
    }

    //Effet pour enlever toute autre card activé à la selection de la nav ccontact
    if (portrait.classList.contains("visible") || collaboration.classList.contains("visible")) { // On ajoute ces conditions au cas où on acrtive à la suite 2 headers
        portrait.classList.remove('visible'); // Le but est d'enlever l'autre CARD
        CardVisible.classList.remove('visible');

        collaboration.classList.remove('visible');  
        CollabVisible.classList.remove('visible');
}
    
})