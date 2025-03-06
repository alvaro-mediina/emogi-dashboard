import { Card } from "./components/models/Card"
import CardGrid from "./components/CardGrid";

function App() {
  const emogiCards:Card[] = [
    {
      "id": 1,
      "emoji": "😊",
      "title": "Smiling Face",
      "subtitle": "Happy Expression",
      "description": "A warm, friendly smile showing happiness and joy",
      "category": "Faces"
    },
    {
      "id": 2, 
      "emoji": "🚀",
      "title": "Rocket",
      "subtitle": "Space Travel",
      "description": "Represents advancement, progress and exploration",
      "category": "Objects"
    },
    {
      "id": 3,
      "emoji": "🎨",
      "title": "Artist Palette",
      "subtitle": "Creative Arts",
      "description": "Symbolizes creativity, art and design",
      "category": "Activities"
    },
    {
      "id": 4,
      "emoji": "🌟",
      "title": "Glowing Star",
      "subtitle": "Special Achievement",
      "description": "Represents excellence, success and special moments",
      "category": "Nature"
    },
    {
      "id": 5,
      "emoji": "🎮",
      "title": "Game Controller",
      "subtitle": "Gaming Device", 
      "description": "Represents video games and entertainment",
      "category": "Activities"
    },
    {
      "id": 6,
      "emoji": "🍕",
      "title": "Pizza",
      "subtitle": "Italian Food",
      "description": "A delicious slice of pizza with toppings",
      "category": "Food"
    },
    {
      "id": 7,
      "emoji": "📱",
      "title": "Mobile Phone",
      "subtitle": "Smart Device",
      "description": "Modern communication device",
      "category": "Objects"
    },
    {
      "id": 8,
      "emoji": "🎵",
      "title": "Musical Note",
      "subtitle": "Music Symbol",
      "description": "Represents melody and musical expression",
      "category": "Activities"
    }
  ];
  return <CardGrid cards={emogiCards}/>;
  
}

export default App
