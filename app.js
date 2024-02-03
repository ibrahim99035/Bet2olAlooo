const SolarIcon = document.getElementById('solarIcon');
const RingPopup = document.getElementById('ringpopup');

function closePopup() {
    RingPopup.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function openPopup(){
    RingPopup.style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

SolarIcon.addEventListener('click',() => {
    openPopup();
});

