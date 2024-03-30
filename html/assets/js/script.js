document.addEventListener("DOMContentLoaded", function () {
    // Charger la carte
var map = L.map('map').setView([33.954826, -6.8932888], 16);

// Ajout du fond de carte Mapbox
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: "By ",
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiZHJpc3NkcmRveGkiLCJhIjoiY2xhbGVudjByMDFpeTN2a2R1N3o4ejFieCJ9.fScK3YiEEJcw0Dyuoscnew'
}).addTo(map);



    // Désactivation du zoom double-clic
    map.doubleClickZoom.disable();
  
    // Chargement des données GeoJSON des animaux
    fetch('data/Animals.geojson') // Utiliser le chemin correct vers le fichier GeoJSON
      .then(response => response.json())
      .then(data => {
        // Créer un groupe de marqueurs
        var markers = L.markerClusterGroup();
  
        // Ajouter les marqueurs au groupe
        L.geoJSON(data, {
          pointToLayer: function (feature, latlng) {
            // Récupérer les propriétés de l'animal
            var properties = feature.properties;
  
            // Extraire l'URL de l'image de la propriété "img"
            var imgURL = properties.img.match(/src="([^"]+)"/)[1];
  
            // Créer une icône personnalisée pour l'animal
            var customIcon = L.icon({
              iconUrl: imgURL, // Utiliser l'URL de l'image de l'animal comme icône
              iconSize: [60, 60], // Taille de l'icône
              iconAnchor: [20, 40], // Point d'ancrage de l'icône
              className: 'animal-marker-icon'
            });
  
            // Créer un marqueur avec l'icône personnalisée
            var marker = L.marker(latlng, { icon: customIcon });
  
            // Ajouter une popup avec les informations de l'animal (sans l'image)
            var popupContent = "<h3>" + properties.Name + "</h3>";
            popupContent += "<p><strong>Nom scientifique:</strong> " + properties.Nom_scientifique + "</p>";
            popupContent += "<p><strong>Classe:</strong> " + (properties.Classe || "Autre") + "</p>"; // Traitement du cas où le nom de la classe est undefined
            popupContent += "<p><strong>Famille:</strong> " + properties.Famille + "</p>";
            popupContent += "<p><strong>Longueur:</strong> " + properties.Longueur + "</p>";
            popupContent += "<p><strong>Régime alimentaire:</strong> " + properties.Régime + "</p>";
            popupContent += "<p><strong>Gestation:</strong> " + properties.Gestation + "</p>";
            popupContent += "<p><strong>Répartition:</strong> " + properties.Répartition + "</p>";
            popupContent += "<p><strong>Statut:</strong> " + properties.Statut + "</p>";
            popupContent += "<p><strong>Longévité:</strong> " + properties.Longévité + "</p>";
  
            // Vérifier si le nom de l'animal est "lion atlas"
            if (properties.Name.toLowerCase() === 'lion atlas') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/models/66be3258e2d64f32af2b73b2ecd47637/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Gazelle dorcas"
            if (properties.Name.toLowerCase() === 'gazelle dorcas') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/gazella-b2c70a0821ef4c6ca0c096e33bc97593/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Eléphant"
            if (properties.Name.toLowerCase() === 'eléphant') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/3d-model-eleph-d66351e871a8472a9dab16b96372b7c8/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Cerf"
            if (properties.Name.toLowerCase() === 'cerf') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/cerf-23870b8f869b49b8ad9b09a020bedd30/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Rhinocéros"
            if (properties.Name.toLowerCase() === 'rhinocéros') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/white-rhinoceros-939baeb6d62a4824b8edb3c7f7ef54c7/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Autruche Africaine"
            if (properties.Name.toLowerCase() === 'autruche africaine') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/ostrich-f0102f6735394b489e09e9298810c3ba/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Bovin"
            if (properties.Name.toLowerCase() === 'bovin') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/texas-longhorn-eb6b4406015445448392614e33c3cd90/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Perruche"
            if (properties.Name.toLowerCase() === 'perruche') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/perruche-hd-2cd993fedcbc4aa7afbaef3271051b33/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Dromadaire"
            if (properties.Name.toLowerCase() === 'dromadaire') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/camel-download-the-original-glb-05a0854fb54d4e34a100016545cc69e5/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Hippopotame"
            if (properties.Name.toLowerCase() === 'hippopotame') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/hippo-7ed6bb8217b947d5baec6d5357d815bf/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Buffle"
            if (properties.Name.toLowerCase() === 'buffle') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/african-buffalo-10430df80e6446f2a77cb0ba93ed5cd1/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Zébre"
            if (properties.Name.toLowerCase() === 'zébre') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/zebra-3d6e29c0abc34c1d8e29c7939ee10238/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Crocodile"
            if (properties.Name.toLowerCase() === 'crocodile') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/crocodile-eecc6e665e284f32afe728c5a40a0695/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Canards"
            if (properties.Name.toLowerCase() === 'canards') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/mallard-duck-male-16c14682b3414f34b26bf4d558d40a0f/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Cygens"
            if (properties.Name.toLowerCase() === 'cygens') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/swan-d45d989537cf4699b413547da9a1ba83/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Perroquet"
            if (properties.Name.toLowerCase() === 'perroquet') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/parrot-92e36afa506e492eabc12b6fd34c45c9/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Hyène rayée"
            if (properties.Name.toLowerCase() === 'hyène rayée') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/aardwolf-hyena-lowpoly-86c36dc2b7ce45cd9d4977b16be71245/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Lycaon"
            if (properties.Name.toLowerCase() === 'lycaon') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/hyena-ba317c2a6fd4403fa0be1180f94fea63/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Porc-épic"
            if (properties.Name.toLowerCase() === 'porc-épic') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/hedgehog-wip-3b9e3e7fb6a9441095aa9aca439d0573/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Chimpanzé"
            if (properties.Name.toLowerCase() === 'chimpanzé') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/chimpanzee-8584fb15174e4b4d8eff0c72d7626138/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Girafe"
            if (properties.Name.toLowerCase() === 'girafe') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/animated-giraffe-a415d3fde0f34656970a5dd216537248/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Oryx algazelle"
            if (properties.Name.toLowerCase() === 'oryx algazelle') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/blue-antelope-nhmw-zoo-mamm-st715-0d5170d9339e4d14bc1f0b2abf06111a/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Tortue sulcata"
            if (properties.Name.toLowerCase() === 'tortue sulcata') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/tortoise-4342335b75384cd6b4c62551f393c2ce/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Flamant rose"
            if (properties.Name.toLowerCase() === 'flamant rose') {
                popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/flamingo-b363f8f4f7394ddb9d5b3a337f2f7fc7/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
              }
              // Vérifier si le nom de l'animal est "Renard"
            if (properties.Name.toLowerCase() === 'renard') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/fox-idle-43d126195a794335a9d0e0a003900033/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Chévre"
            if (properties.Name.toLowerCase() === 'chévre') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/goat-15692d6248564a19bf2514ce2344ce70/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Mouflon à manchette"
            if (properties.Name.toLowerCase() === 'mouflon à manchette') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/himalayan-mountain-goat-a99b96b33ce144ce83d5bafbbe6f1819/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Paon"
            if (properties.Name.toLowerCase() === 'paon') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/peacock-77ebfe2aa4084e239bebb760bc848363/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
             // Vérifier si le nom de l'animal est "Loutre"
             if (properties.Name.toLowerCase() === 'loutre') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/ferret-a5c717c20b08461aa1d9ce462f3e019e/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Buse"
            if (properties.Name.toLowerCase() === 'buse') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/mouse-aeb21d38f2274b04a940e0446431e502/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Rapaces"
            if (properties.Name.toLowerCase() === 'rapaces') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/white-eagle-animation-fast-fly-30203bf39e5145f19c79e83c550139d3/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            // Vérifier si le nom de l'animal est "Poule geante"
            if (properties.Name.toLowerCase() === 'poule geante') {
              popupContent += '<iframe width="100%" height="200px" src="https://sketchfab.com/3d-models/a-chicken-in-low-poly-04eae2077ed74f5fadde91ffb46b2085/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>';
            }
            
            
              
            marker.bindPopup(popupContent); // Ajouter la popup au marqueur
  
            markers.addLayer(marker); // Ajouter le marqueur au groupe
  
            return marker;
          }
        });
  
        map.addLayer(markers); // Ajouter le groupe de marqueurs à la carte
  
        // Ajouter la barre de recherche
        map.addControl(new L.Control.Search({
          layer: markers,
          propertyName: 'Name', // Propriété à utiliser pour la recherche
          marker: false, // Désactiver l'ajout automatique de marqueurs pour les résultats de recherche
          moveToLocation: function(latlng, title, map) { // Zoomer vers l'animal trouvé
            map.setView(latlng, 60); // Zoomer à l'emplacement de l'animal trouvé avec un niveau de zoom de 16
          }
        }));
  
        // Ajouter la barre des noms de classes d'animaux
        var animalClassesBar = document.getElementById('animal-classes-bar');
        var animalNamesBar = document.getElementById('animal-names-bar');
  
        // Générer la liste des classes distinctes
        var distinctClasses = [...new Set(data.features.map(feature => feature.properties.Classe ? feature.properties.Classe.toLowerCase() : "Autre"))]; // Convertir en minuscules et traiter le cas undefined
        distinctClasses.forEach(className => {
          var classItem = document.createElement('div');
          classItem.textContent = className.charAt(0).toUpperCase() + className.slice(1); // Mettre en majuscule la première lettre
          classItem.classList.add('animal-class');
          classItem.addEventListener('click', function() {
            showAnimalList(className);
          });
          animalClassesBar.appendChild(classItem);
        });



  
        // Fonction pour afficher la liste des animaux pour une classe spécifique
function showAnimalList(className) {
    animalNamesBar.innerHTML = ''; // Effacer la liste actuelle des animaux
    data.features.forEach(feature => {
        if ((!feature.properties.Classe && className === "Autre") || (feature.properties.Classe && feature.properties.Classe.toLowerCase() === className.toLowerCase())) { // Ajouter une vérification pour la classe "Autre"
            var animalName = feature.properties.Name;
            var animalImgURL = feature.properties.img.match(/src="([^"]+)"/)[1]; // Récupérer l'URL de l'image
            var listItem = document.createElement('div');
            
            // Créer un conteneur pour l'image et le nom de l'animal
            var animalContainer = document.createElement('div');
            animalContainer.classList.add('animal-container');
            
            var image = document.createElement('img'); // Créer un élément d'image
            image.src = animalImgURL; // Définir l'URL de l'image
            image.alt = animalName; // Définir l'attribut alt de l'image
            image.classList.add('animal-image'); // Ajouter la classe pour contrôler la taille de l'image
            animalContainer.appendChild(image); // Ajouter l'image au conteneur
            
            var nameElement = document.createElement('p'); // Créer un élément de paragraphe pour le nom de l'animal
            nameElement.textContent = animalName; // Définir le texte avec le nom de l'animal
            animalContainer.appendChild(nameElement); // Ajouter le nom de l'animal au conteneur
            
            listItem.appendChild(animalContainer); // Ajouter le conteneur à l'élément de liste
            listItem.classList.add('animal-item');
            
            listItem.addEventListener('click', function() {
                var animalMarker = markers.getLayers().find(marker => marker.feature.properties.Name === animalName);
                if (animalMarker) {
                    map.setView(animalMarker.getLatLng(), 60);
                    animalMarker.openPopup();
                }
            });
            
            animalNamesBar.appendChild(listItem); // Ajouter l'élément de liste à la barre des noms d'animaux
        }
    });
}


  
  
      })
      .catch(error => {
        console.error('Error fetching GeoJSON data:', error);
      });
  });
  