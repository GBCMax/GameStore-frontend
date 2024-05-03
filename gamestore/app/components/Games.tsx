import Card from "antd/es/card/Card";
import { CardName } from "./Cardname";
import Button from "antd/es/button/button";

interface Props{
    games: Game[],
    handleDelete: (id: string) => void;
    handleOpen: (game: Game) => void;
}

export const Games = ({games, handleDelete, handleOpen}: Props) => {
    return(
        <div className="cards">
            {games.map((game : Game) => (
                <Card
                    key={game.id} 
                    title={<CardName name={game.name} price={game.price} />} 
                    bordered={false}
                >
                    <p>{game.description}</p>
                    <div className="card_buttons">
                        <Button 
                            onClick={() => handleOpen(game)}
                            style={{flex: 1}}
                        >
                            Edit
                        </Button>
                        <Button 
                            onClick={() => handleDelete(game.id)}
                            danger
                            style={{flex: 1}}
                        >
                            Delete
                        </Button>
                    </div>
                </Card>
            ))}
        </div>
    );
};