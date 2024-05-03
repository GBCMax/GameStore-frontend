"use client";

import Button from "antd/es/button/button";
import { useEffect, useState } from "react";
import { GameRequest, createGame, deleteGame, getAllGames, updateGame } from "../services/games";
import { Games } from "../components/Games";
import Title from "antd/es/typography/Title";
import { CreateUpdateGame, Mode } from "../components/CreateUpdateGame";

export default function GamesPage(){
    const defaultValues = {
        name: "",
        description: "",
        price: 1
    } as Game;

    const [values, setValues] = useState<Game>(defaultValues);

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState(Mode.Create);

    useEffect(() => {
        const getGames = async () => {
            const games = await getAllGames();
            setLoading(false);
            setGames(games);
        };

        getGames();
    }, []);

    const handleCreateGame = async (request: GameRequest) => {
        await createGame(request);
        closeModal();

        const games = await getAllGames();
        setGames(games);
    };

    const handleUpdateGame = async (id: string, request: GameRequest) => {
        await updateGame(id, request);
        closeModal();

        const games = await getAllGames();
        setGames(games);
    };

    const handleDeleteGame = async (id: string) => {
        await deleteGame(id);
        closeModal();

        const games = await getAllGames();
        setGames(games);
    };

    const openModal = () => {
        setMode(Mode.Create);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setValues(defaultValues);
        setIsModalOpen(false);
    };

    const openEditModal = (game: Game) => {
        setMode(Mode.Edit);
        setValues(game);
        setIsModalOpen(true);
    };

    return (
        <div>
            <Button
                type="primary"
                style={{marginTop: "30px"}}
                size="large"
                onClick={openModal}
                >
                    Add game
                </Button>

            <CreateUpdateGame 
                mode={mode} 
                values={values} 
                isModalOpen={isModalOpen} 
                handleCreate={handleCreateGame} 
                handleUpdate={handleUpdateGame} 
                handleCancel={closeModal}
            />

            {loading ? (
                <Title>Loading...</Title>
            ) : (
                <Games 
                    games={games} 
                    handleOpen={openEditModal} 
                    handleDelete={handleDeleteGame}
                />
            )}
        </div>
    );
}