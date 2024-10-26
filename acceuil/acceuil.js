// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter-value');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});


document.addEventListener('DOMContentLoaded', function () {
    fetch('https://connect.flylat.net/api/flights/PMg6MNZ4VHbhBYTySj')
        .then(response => response.json())
        .then(data => {
            // Calcul du nombre total de vols
            const totalFlights = data.length;

                               // Initialisation des variables pour la somme totale des FPM et des profits
                               let totalFpm = 0;
                               let totalProfit = 0;
           
                               // Parcourir les vols pour calculer la somme des FPM et des profits
                               data.forEach(flight => {
                                   totalFpm += parseFloat(flight.fpm);
                                   totalProfit += parseFloat(flight.profit);
                               });
           
                               // Calcul de la moyenne des FPM (avec signe négatif) et arrondi sans décimales
                               const averageFpm = Math.round(-totalFpm / totalFlights);
           
                               // Arrondi de la somme totale des profits sans décimales
                               const totalProfitRounded = Math.round(totalProfit);
           
                               // Mise à jour des éléments avec le nombre total de vols, la moyenne des FPM, et la somme totale des profits
                               document.getElementById('flight-count').textContent = totalFlights;
                               document.getElementById('average-fpm').textContent = averageFpm;
                               document.getElementById('total-profit').textContent = totalProfitRounded;
                           })
                           .catch(error => console.error('Erreur lors de la récupération des données:', error));
                   });
