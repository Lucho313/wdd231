export function displayAnime(animeList, container) {

    animeList.forEach(anime => {

        const card = document.createElement("section");
        card.classList.add("anime-card");

        card.innerHTML = `
            <img src="${anime.image}"
                 alt="${anime.title}"
                 loading="lazy">

            <div class="anime-info">

                <h3>${anime.title}</h3>

                <p><strong>Genre:</strong> ${anime.genre}</p>

                <p><strong>Year:</strong> ${anime.year}</p>

                <p><strong>Rating:</strong> ${anime.rating}</p>

                <div class="card-buttons">

                    <button
                        class="details-btn"
                        data-id="${anime.id}">
                        Details
                    </button>

                    <button
                        class="favorite-btn"
                        data-id="${anime.id}">
                        Favorite
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);

    });
}