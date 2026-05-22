const spotlightContainer =
document.querySelector("#spotlight-container");

async function getSpotlights() {

    const response =
    await fetch("data/members.json");

    const data = await response.json();

    const premiumMembers =
    data.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    premiumMembers.sort(() => 0.5 - Math.random());

    const selected =
    premiumMembers.slice(0, 3);

    selected.forEach(member => {

        const card =
        document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
            alt="${member.name} logo">

            <p>${member.phone}</p>

            <p>${member.address}</p>

            <a href="${member.website}"
            target="_blank">
            Visit Website
            </a>

            <p>${member.membership}</p>
        `;

        spotlightContainer.appendChild(card);
    });
}

getSpotlights();