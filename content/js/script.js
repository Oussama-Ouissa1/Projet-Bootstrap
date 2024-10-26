const cardContainer = document.getElementById('card-container');

// Fonction pour créer une carte HTML à partir des données
function createCard(data) {
    return `
        <div class="card mb-3" style="max-width: 540px; margin: 20px">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${data.image}" class="img-fluid rounded-start" alt="${data.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Charger les données depuis le fichier JSON
fetch('data.json')
    .then(response => response.json())  // Lire et convertir la réponse en JSON
    .then(jsonData => {
        // Boucle pour chaque élément du fichier JSON
        jsonData.forEach(item => {
            cardContainer.innerHTML += createCard(item);  // Ajouter chaque carte au conteneur
        });
    })
    .catch(error => console.error('Erreur lors du chargement des données JSON:', error));