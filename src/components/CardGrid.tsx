import { Card } from "./models/Card";
import CardItem from "./CardItem";

interface Props {
    cards: Card[];
}

const CardGrid = ({ cards } : Props) =>{
    return(
        <div className="min-h-screen bg-Falu-red py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex items-center flex-col gap-10">
                <h1 className="title"> Featured Emogis</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <CardItem key={card.id} {...card}/> 
                    ))}
                </div>
            </div>
        </div>
    );

}

export default CardGrid;