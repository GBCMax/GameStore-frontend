export interface GameRequest{
    name: string;
    description: string;
    price: number;
}

export const getAllGames = async () => {
    const response = await fetch("https://localhost:7264/Games");

    return response.json();
};

export const createGame = async (gameRequest: GameRequest) => {
    await fetch("https://localhost:7264/Games", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(gameRequest)
    });
};

export const updateGame = async (id: string, gameRequest: GameRequest) => {
    await fetch(`https://localhost:7264/Games/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(gameRequest)
    });
};

export const deleteGame = async (id: string) => {
    await fetch(`https://localhost:7264/Games/${id}`, {
        method: "DELETE"
    });
};