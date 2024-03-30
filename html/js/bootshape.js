$(function() {
    $('.carousel').carousel('cycle');
});

// Ajout d'une action au bouton "Explorer la carte"
document.getElementById('explore-map-btn').addEventListener('click', function() {
    window.location.href = 'index.html'; // Rediriger vers la page de la carte du zoo
  });

  // Ajout d'une action au bouton "Explorer le musée"
  document.getElementById('explore-museum-btn').addEventListener('click', function() {
    window.location.href = 'index2.html'; // Rediriger vers la page de la carte du zoo
  });