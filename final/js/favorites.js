import "./main.js";

const favoritesContainer = document.querySelector("#favoritesContainer");

function displayFavorites() {

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `
            <p>You have not added any favorite anime yet.</p>
        `;

        return;
    }

    favorites.forEach(anime => {

        const card = document.createElement("section");

        card.classList.add("anime-card");

        card.innerHTML = `
            <img
                src="${anime.image}"
                alt="${anime.title}"
                loading="lazy">

            <div class="anime-info">

                <h3>${anime.title}</h3>

                <p><strong>Genre:</strong> ${anime.genre}</p>

                <p><strong>Year:</strong> ${anime.year}</p>

                <p><strong>Rating:</strong> ${anime.rating}</p>

                <button
                    class="remove-btn"
                    data-id="${anime.id}">
                    Remove
                </button>

            </div>
        `;

        favoritesContainer.appendChild(card);
    });

    addRemoveEvents();
}

function addRemoveEvents() {

    const removeButtons =
        document.querySelectorAll(".remove-btn");

    removeButtons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            let favorites =
                JSON.parse(localStorage.getItem("favorites")) || [];

            favorites =
                favorites.filter(anime => anime.id !== id);

            localStorage.setItem(
                "favorites",
                JSON.stringify(favorites)
            );

            location.reload();
        });
    });
}

displayFavorites();