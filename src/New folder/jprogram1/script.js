const cityForm = document.getElementById('city-form');
const citySelect = document.getElementById('city');
const weatherIframe = document.getElementById('weather-iframe');
const cityDescription = document.getElementById('city-description');

/*const descriptions = {
    'Beograd': 'Beograd je glavni i najveći grad Srbije...',
    'Novi Sad': 'Novi Sad je poznat po Petrovaradinskoj tvrđavi...',
    'Niš': 'Niš je poznat po Niškoj tvrđavi...',
    'Kragujevac': 'Kragujevac je poznat po Šumadijskom upravnom okrugu...',
    'Subotica': 'Subotica je poznata po svojoj secesijskoj arhitekturi...',
    'Zrenjanin': 'Zrenjanin je poznat po svojoj bogatoj kulturnoj baštini...',
    'Pančevo': 'Pančevo je poznato po svojim mnogim industrijama...',
    'Čačak': 'Čačak je poznat po svojim termalnim izvorima...',
    'Kruševac': 'Kruševac je poznat po svojoj srednjovekovnoj istoriji...',
    'Leskovac': 'Leskovac je poznat po svojoj roštiljadi...'
};*/

cityForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedCity = citySelect.value;
    weatherIframe.src = `https://www.naslovi.net/vremenska-prognoza/${selectedCity.toLowerCase()}/`;
    //cityDescription.textContent = descriptions[selectedCity];
});
