function verifierMotDePasse() {
    var motDePasse = document.getElementById("motDePasse").value;
    var resultat = document.getElementById("resultat");

    var longueur = motDePasse.length >= 8;
    
    var majuscule = /[A-Z]/.test(motDePasse);
    
    var minuscule = /[a-z]/.test(motDePasse);
    
    var chiffre = /\d/.test(motDePasse);
    
    var caractere_special = /[@$!%*?&]/.test(motDePasse);

    var force = 0;
    if (longueur) force += 1;
    if (majuscule) force += 1;
    if (minuscule) force += 1;
    if (chiffre) force += 1;
    if (caractere_special) force += 1;

    if (force === 5) {
        resultat.textContent = "Force du mot de passe : Fort";
        resultat.className = "fort";
    } else if (force >= 3) {
        resultat.textContent = "Force du mot de passe : Moyen";
        resultat.className = "moyen";
    } else {
        resultat.textContent = "Force du mot de passe : Faible";
        resultat.className = "faible";
    }
}
