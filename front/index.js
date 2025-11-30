document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche l'envoi du formulaire par défaut
        const email = emailInput.value;
        const password = passwordInput.value;

        // Validation simple (exemple)
        if (validateLogin(email, password)) {
            alert("Connexion réussie !");
            // Ici, vous pouvez rediriger l'utilisateur ou envoyer les données au serveur
            window.location.href = './dashboard.html';
        } else {
            alert("Identifiant ou mot de passe incorrect.");
            // Optionnel : vider le champ mot de passe
            passwordInput.value = '';
        }
    });
});

// Complexity is 3 Everything is cool!
function validateLogin(email, password) {
    // simulation de vérification (À REMPLACER par un appel API réel)
    // Pour l'exemple : email="admin@test.com", password="123"
    const validEmail = "admin@test.com";
    const validPassword = "123";

    return email === validEmail && password === validPassword;
}
