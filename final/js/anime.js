import "./main.js";

import { getAnimeData } from "./modules/fetch.js";
import { displayAnime } from "./modules/display.js";

const animeContainer = document.querySelector("#animeContainer");

const modal = document.querySelector("#animeModal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

let animeData = [];

async function initializePage() {

    animeData = await getAnimeData();

    displayAnime(animeData, animeContainer);

    addDetailEvents();

    addFavoriteEvents();
}

initializePage();

function addDetailEvents() {

    const buttons = document.querySelectorAll(".details-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const anime = animeData.find(item => item.id === id);

            modalContent.innerHTML = `
                <h2>${anime.title}</h2>

                <p>${anime.description}</p>

                <p><strong>Genre:</strong> ${anime.genre}</p>

                <p><strong>Year:</strong> ${anime.year}</p>

                <p><strong>Rating:</strong> ${anime.rating}</p>
            `;

            modal.showModal();
        });
    });
}

function addFavoriteEvents() {

    const buttons = document.querySelectorAll(".favorite-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const anime = animeData.find(item => item.id === id);

            let favorites =
                JSON.parse(localStorage.getItem("favorites")) || [];

            const exists =
                favorites.some(item => item.id === anime.id);

            if (!exists) {

                favorites.push(anime);

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(favorites)
                );

                alert(`${anime.title} added to favorites`);
            }
        });
    });
}

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.close();

    });
}