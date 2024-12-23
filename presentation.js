                    /************************* Effet d'apparition du texter au clic de l'icône *********************/
const iconIdentite = document.getElementById('icon_Profil');
const textIdentite = document.getElementsByClassName('Card_Profil_Identite')[0];

const iconDiplom = document.getElementById('icon_Diplom');
const TextDiplom = document.getElementsByClassName('Card_Profil_Diplome')[0];

const iconVoyage = document.getElementById('icon_Voyage');
const TextVoyage = document.getElementsByClassName('Card_Profil_Voyage')[0];

const iconMusique = document.getElementById('icon_Musique');
const textMusique = document.getElementsByClassName('Card_Profil_Musique')[0];

const iconSport = document.getElementById('icon_Sport');
const textSport = document.getElementsByClassName('Card_Profil_Sport')[0];

const iconZen = document.getElementById('icon_Zen');
const textZen = document.getElementsByClassName('Card_Profil_Annexe')[0];



iconIdentite.addEventListener('click', () => {
    TextDiplom.style.display = 'none'; // Cache l'élément
    TextVoyage.style.display = 'none'; // Cache l'élément
    textMusique.style.display = 'none'; // Cache l'élément
    textSport.style.display = 'none'; // Cache l'élément
    textZen.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (textIdentite.style.display === 'none' || textIdentite.style.display === '') {
        textIdentite.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        textIdentite.style.display = 'none'; // Cache l'élément
    } 
});


iconDiplom.addEventListener('click', () => {
    textIdentite.style.display = 'none'; // Cache l'élément
    TextVoyage.style.display = 'none'; // Cache l'élément
    textMusique.style.display = 'none'; // Cache l'élément
    textSport.style.display = 'none'; // Cache l'élément
    textZen.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (TextDiplom.style.display === 'none' || TextDiplom.style.display === '') {
        TextDiplom.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        TextDiplom.style.display = 'none'; // Cache l'éléments
    } 
});


iconVoyage.addEventListener('click', () => {
    TextDiplom.style.display = 'none'; // Cache l'élément
    textIdentite.style.display = 'none'; // Cache l'élément
    textMusique.style.display = 'none'; // Cache l'élément
    textSport.style.display = 'none'; // Cache l'élément
    textZen.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (TextVoyage.style.display === 'none' || TextVoyage.style.display === '') {
        TextVoyage.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        TextVoyage.style.display = 'none'; // Cache l'élément
    } 
});


iconMusique.addEventListener('click', () => {
    TextDiplom.style.display = 'none'; // Cache l'élément
    textIdentite.style.display = 'none'; // Cache l'élément
    TextVoyage.style.display = 'none'; // Cache l'élément
    textSport.style.display = 'none'; // Cache l'élément
    textZen.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (textMusique.style.display === 'none' || textMusique.style.display === '') {
        textMusique.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        textMusique.style.display = 'none'; // Cache l'élément
    } 
});


iconSport.addEventListener('click', () => {
    TextDiplom.style.display = 'none'; // Cache l'élément
    TextVoyage.style.display = 'none'; // Cache l'élément
    textMusique.style.display = 'none'; // Cache l'élément
    textZen.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (textSport.style.display === 'none' || textSport.style.display === '') {
        textSport.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        textSport.style.display = 'none'; // Cache l'élément
    } 
});

iconZen.addEventListener('click', () => {
    TextDiplom.style.display = 'none'; // Cache l'élément
    textIdentite.style.display = 'none'; // Cache l'élément
    textMusique.style.display = 'none'; // Cache l'élément
    textSport.style.display = 'none'; // Cache l'élément
    
    // Action à effectuer
    if (textZen.style.display === 'none' || textZen.style.display === '') {
        textZen.style.display = 'inline-flex'; // Affiche l'élément
    } else {
        textZen.style.display = 'none'; // Cache l'élément
    } 
});
