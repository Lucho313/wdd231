

const url = './data/members.json';

const cards = document.querySelector('#cards');

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

getMembers();

function displayMembers(members) {

    cards.innerHTML = '';

    members.forEach(member => {

        const section = document.createElement('section');

        section.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            
            <h2>${member.name}</h2>

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>${member.membership} Member</p>
        `;

        cards.appendChild(section);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});