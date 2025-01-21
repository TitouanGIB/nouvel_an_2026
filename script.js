// Date cible : 1er janvier à minuit
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

let countdownFinished = false; // Variable pour arrêter les mises à jour après la fin

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const countdownEl = document.getElementById("countdown");

    // Si le décompte est terminé
    if (difference <= 0 && !countdownFinished) {
        countdownEl.innerHTML = '<span id="new-year-message" class="new-year-message">Bonne année 2025 🎉</span>';
        countdownFinished = true;

        // Démarre une minuterie pour arrêter le clignotement après 1 minute
        setTimeout(() => {
            const messageEl = document.getElementById("new-year-message");
            if (messageEl) {
                messageEl.classList.remove("new-year-message");
                messageEl.classList.add("static-message");
            }
        }, 30000); // 60 secondes

        return;
    }

    // Ne rien faire si le décompte est déjà terminé
    if (countdownFinished) return;

    // Calcul des unités de temps
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000));

    // Mise à jour des éléments HTML
    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

    if (difference <= 60000) {
        document.getElementById("milliseconds").textContent = milliseconds.toString().padStart(3, "0");
        countdownEl.classList.add("zoom");
    } else {
        countdownEl.classList.remove("zoom");
    }
}

// Mettre à jour toutes les 100ms pour des transitions fluides
setInterval(updateCountdown, 100);

// Initialiser au chargement
updateCountdown();
