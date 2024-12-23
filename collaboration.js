const cardContainer = document.querySelector('.Card_Collaboration_Container');
cardContainer.addEventListener('click', () => {
    cardContainer.classList.toggle('flipped'); // Bascule la classe flipped  pour EDISER
});

const DimoContainer = document.querySelector('#collaboration_Dimo');
DimoContainer.addEventListener('click', () => {
    DimoContainer.classList.toggle('DIMO'); // Bascule la classe flipped  pour DIMO
});

const BMWContainer = document.querySelector('#collaboration_BMW');
BMWContainer.addEventListener('click', () => {
    BMWContainer.classList.toggle('BMW'); // Bascule la classe flipped  pour BMW
});

const AudioContainer = document.querySelector('#collaboration_Audio');
AudioContainer.addEventListener('click', () => {
    AudioContainer.classList.toggle('Audio'); // Bascule la classe flipped  pour AUDIOPRO
});

const LeadeoContainer = document.querySelector('#collaboration_LEADEO');
LeadeoContainer.addEventListener('click', () => {
    LeadeoContainer.classList.toggle('LEADEO'); // Bascule la classe flipped  pour AUDIOPRO
});

const CICContainer = document.querySelector('#collaboration_CIC');
CICContainer.addEventListener('click', () => {
    CICContainer.classList.toggle('CIC'); // Bascule la classe flipped  pour AUDIOPRO
});




