interface Props{
    name: string;
    price: number;
}

export const CardName = ({name, price}: Props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <p className="card_name">{name}</p>
            <p className="card_price">{price}</p>
        </div>
    )
}