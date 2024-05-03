import Modal from "antd/es/modal/Modal";
import { GameRequest } from "../services/games";
import Input from "antd/es/input/Input";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props{
    mode: Mode;
    values: Game;
    isModalOpen: boolean;
    handleCancel: () => void;
    handleCreate: (request: GameRequest) => void;
    handleUpdate: (id: string, request: GameRequest) => void;
}

export enum Mode {
    Create,
    Edit
}

export const CreateUpdateGame = ({mode,
    values,
    isModalOpen,
    handleCancel,
    handleCreate,
    handleUpdate
} : Props) => {
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<number>(1);

    useEffect(() => {
        setName(values.name)
        setDescription(values.description)
        setPrice(values.price)
    }, [values])

    const handleOnOk = async () => {
        const gameRequest = {name, description, price};

        mode == Mode.Create 
            ? handleCreate(gameRequest) 
            : handleUpdate(values.id, gameRequest)
    }

    return (
        <Modal name={
            mode === Mode.Create ? "Add game" : "Edit game"} 
            open={isModalOpen} 
            cancelText={"Cancel"}
            onOk={handleOnOk}
            onCancel={handleCancel}
        >
            <div className="game_modal">
                <Input className="card_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    autoSize={{ minRows: 3, maxRows: 3}}
                    placeholder="Description"
                />
                <Input
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="Price"
                />
            </div>
        </Modal>
    )
};