import { Card } from "./models/Card";

const CardItem = (card: Omit<Card, "id">) => {
    return(
        <div className="card">
            <div className="relative h-48 overflow-hidden object-center">
                <div className="card-emoji-container">
                    {card.emoji}
                </div>
                <div className="card-overlay">
                    <p className="text-4xl">👑</p>
                </div>
            </div>
            <div className="card-content">
                <h3 className="title">{card.title}</h3>
                <h4 className="subtitle">{card.subtitle}</h4>
                <p className="description">{card.description}</p>
            </div>
        </div>
    )
};

export default CardItem