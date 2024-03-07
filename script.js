function showPlanetInfo(planet) {
    var planetInfo = document.getElementById('planetInfo');
    planetInfo.style.display = 'block';

    // Carga el contenido del archivo HTML del planeta seleccionado en el contenedor de información
    planetInfo.innerHTML = ''; // Limpiamos el contenido anterior
    fetch('planetas/' + planet.toLowerCase() + '.html')
        .then(response => response.text())
        .then(data => {
            planetInfo.innerHTML = data; // Mostramos el contenido del archivo HTML
        })
        .catch(error => {
            console.error('Error al cargar la información del planeta:', error);
            planetInfo.innerHTML = '<p>Lo sentimos, no se pudo cargar la información del planeta seleccionado.</p>';
        });
}