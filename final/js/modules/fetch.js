export async function getAnimeData() {

    try {

        const response = await fetch("./data/anime.json");

        if (!response.ok) {
            throw new Error("Data not found");
        }

        const data = await response.json();

        return data;

    } catch (error) {

        console.error(error);

        return [];

    }
}