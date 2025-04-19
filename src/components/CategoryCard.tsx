
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Apple, Carrot, Shirt, Music, Film, BookText } from "lucide-react";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CategoryCardProps {
  id: string;
  title: string;
  latinTitle: string;
  icon: string;
  color: string;
}

const CategoryCard = ({ id, title, latinTitle, icon, color }: CategoryCardProps) => {
  const getIcon = () => {
    switch(icon) {
      case 'fruit': return <Apple className="w-12 h-12 mb-3" />;
      case 'carrot': return <Carrot className="w-12 h-12 mb-3" />;
      case 'shirt': return <Shirt className="w-12 h-12 mb-3" />;
      case 'music': return <Music className="w-12 h-12 mb-3" />;
      case 'film': return <Film className="w-12 h-12 mb-3" />;
      case 'book-text': return <BookText className="w-12 h-12 mb-3" />;
      default: return <BookText className="w-12 h-12 mb-3" />;
    }
  };
  
  const colorMap: Record<string, string> = {
    'blue': 'bg-gradient-to-br from-blue-400 to-blue-600',
    'orange': 'bg-gradient-to-br from-orange-400 to-orange-600',
    'yellow': 'bg-gradient-to-br from-yellow-400 to-yellow-500',
    'green': 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    'purple': 'bg-gradient-to-br from-purple-400 to-purple-600',
    'red': 'bg-gradient-to-br from-red-400 to-red-600',
    'dark': 'bg-gradient-to-br from-gray-700 to-gray-900',
    'light': 'bg-gradient-to-br from-gray-100 to-gray-300',
  };

  return (
    <Link to={`/category/${id}`}>
      <Card className={cn(
        "transform transition-all duration-300 hover:scale-105 border-none shadow-lg hover:shadow-xl",
        colorMap[color] || colorMap.blue,
        "text-white"
      )}>
        <CardHeader className="flex items-center text-center pb-2">
          {getIcon()}
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-6">
          <p className="text-sm opacity-90">{latinTitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
