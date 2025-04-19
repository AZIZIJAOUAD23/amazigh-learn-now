
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { 
  Book, 
  BookOpen, 
  BookText,
  Paintbrush, 
  Apple, 
  Carrot, 
  Shirt, 
  Music, 
  Film, 
  Play,
  Headphones
} from "lucide-react";

interface CategoryCardProps {
  id: string;
  title: string;
  latinTitle: string;
  icon: string;
  color: string;
}

const CategoryCard = ({ id, title, latinTitle, icon, color }: CategoryCardProps) => {
  // استيراد الأيقونة ديناميكياً من مكتبة lucide-react
  const getIcon = () => {
    switch(icon) {
      case 'book': return <Book className="w-12 h-12 mb-3" />;
      case 'book-open': return <BookOpen className="w-12 h-12 mb-3" />;
      case 'book-text': return <BookText className="w-12 h-12 mb-3" />;
      case 'color-picker': return <Paintbrush className="w-12 h-12 mb-3" />;
      case 'fruit': return <Apple className="w-12 h-12 mb-3" />;
      case 'carrot': return <Carrot className="w-12 h-12 mb-3" />;
      case 'shirt': return <Shirt className="w-12 h-12 mb-3" />;
      case 'music': return <Music className="w-12 h-12 mb-3" />;
      case 'film': return <Film className="w-12 h-12 mb-3" />;
      case 'play': return <Play className="w-12 h-12 mb-3" />;
      case 'headphones': return <Headphones className="w-12 h-12 mb-3" />;
      default: return <Book className="w-12 h-12 mb-3" />;
    }
  };
  
  const colorMap: Record<string, string> = {
    'blue': 'bg-amazigh-blue text-white',
    'orange': 'bg-amazigh-orange text-white',
    'yellow': 'bg-amazigh-yellow text-black',
    'green': 'bg-amazigh-green text-white',
    'purple': 'bg-amazigh-purple text-white',
    'red': 'bg-amazigh-red text-white',
    'dark': 'bg-amazigh-dark text-white',
    'light': 'bg-amazigh-light text-amazigh-dark',
  };

  return (
    <Link 
      to={`/category/${id}`}
      className={cn(
        "flex flex-col items-center justify-center p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300",
        colorMap[color] || 'bg-amazigh-blue text-white'
      )}
    >
      {getIcon()}
      <h2 className="text-xl font-bold text-center mb-1">{title}</h2>
      <p className="text-sm opacity-90">{latinTitle}</p>
    </Link>
  );
};

export default CategoryCard;
