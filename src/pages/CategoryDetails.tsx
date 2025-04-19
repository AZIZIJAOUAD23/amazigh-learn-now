import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { letters, colors, fruits, vegetables, clothes, songs, crafts, movies, categories } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import AudioPlayer from "@/components/AudioPlayer";
import SearchBar from "@/components/SearchBar";
import LanguageToggle from "@/components/LanguageToggle";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CategoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  
  const category = categories.find(cat => cat.id === id);
  
  const getCategoryData = () => {
    switch(id) {
      case 'letters': return letters;
      case 'colors': return colors;
      case 'fruits': return fruits;
      case 'vegetables': return vegetables;
      case 'clothes': return clothes;
      case 'songs': return songs;
      case 'crafts': return crafts;
      case 'movies': return movies;
      default: return [];
    }
  }

  const data = getCategoryData();
  
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredData(data);
      return;
    }
    
    const searchLower = searchTerm.toLowerCase();
    
    const filtered = data.filter((item: any) => {
      if (id === 'letters') {
        return (
          item.char.toLowerCase().includes(searchLower) ||
          item.latin.toLowerCase().includes(searchLower) ||
          item.arabicName.toLowerCase().includes(searchLower)
        );
      } else if (id === 'colors') {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.latinName.toLowerCase().includes(searchLower) ||
          item.arabicName.toLowerCase().includes(searchLower)
        );
      } else if (['fruits', 'vegetables', 'clothes', 'crafts'].includes(id || '')) {
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.latinName.toLowerCase().includes(searchLower) ||
          item.arabicName.toLowerCase().includes(searchLower)
        );
      } else if (['songs', 'movies'].includes(id || '')) {
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.latinTitle.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower)
        );
      }
      
      return false;
    });
    
    setFilteredData(filtered);
  }, [searchTerm, data, id]);
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">لم يتم العثور على القسم</h1>
          <Link to="/" className="text-amazigh-blue hover:underline">العودة للصفحة الرئيسية</Link>
        </div>
      </div>
    );
  }

  const renderLettersContent = () => {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredData.map((item: any) => (
          <div 
            key={item.id} 
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="p-6 flex flex-col items-center">
              <div className="text-5xl font-bold mb-4 text-purple-600">{item.char}</div>
              <div className="text-sm text-gray-600 mb-1">النطق: {item.sound}</div>
              <div className="text-sm text-gray-500 mb-1">بالعربية: {item.arabicName}</div>
              <div className="text-xs text-gray-400 mb-3">باللاتينية: {item.latin}</div>
              <AudioPlayer text={item.char} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className={cn(
        "py-6 mb-8 bg-gradient-to-r from-purple-600 to-pink-500",
        "text-white shadow-lg"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
            >
              <ArrowLeft className="mr-2" size={20} />
              العودة للصفحة الرئيسية
            </Link>
            <LanguageToggle />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            {category?.title}
          </h1>
          <p className="text-center opacity-90 text-lg">{category?.latinTitle}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder={`ابحث في ${category?.title}...`}
          />
        </div>
        
        {filteredData.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-gray-600">لم يتم العثور على نتائج</p>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")} 
                className="mt-3 text-purple-600 hover:underline"
              >
                عرض جميع العناصر
              </button>
            )}
          </div>
        ) : id === 'letters' ? (
          renderLettersContent()
        ) : (
          (() => {
            switch(id) {
              case 'fruits':
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredData.map((item: any) => (
                      <Card 
                        key={item.id} 
                        className="overflow-hidden transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-orange-100 to-orange-200 border-none shadow-lg hover:shadow-xl"
                      >
                        <CardHeader className="relative p-0">
                          <div className="h-48 bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center p-4">
                            <span className="text-6xl select-none">{item.id}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <div className="space-y-4">
                            <CardTitle className="text-xl font-bold text-center mb-2">
                              {item.name}
                            </CardTitle>
                            <div className="space-y-2 text-center">
                              <p className="text-sm text-gray-600">بالعربية: {item.arabicName}</p>
                              <p className="text-sm text-gray-500">باللاتينية: {item.latinName}</p>
                            </div>
                            <div className="flex justify-center pt-2">
                              <AudioPlayer text={item.name} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                );
              
              case 'colors':
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredData.map((item: any) => (
                      <div key={item.id} className="bg-white rounded-xl shadow overflow-hidden">
                        <div className="h-24" style={{ backgroundColor: item.hexCode }}></div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <div className="text-sm mt-1">بالعربية: {item.arabicName}</div>
                          <div className="text-sm text-gray-500 mt-1">باللاتينية: {item.latinName}</div>
                          <div className="mt-3">
                            <AudioPlayer text={item.name} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              
              case 'vegetables':
              case 'clothes':
              case 'crafts':
                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredData.map((item: any) => (
                      <div key={item.id} className="bg-white rounded-xl shadow overflow-hidden">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                          <span className="text-5xl">{item.id}</span>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <div className="text-sm mt-1">بالعربية: {item.arabicName}</div>
                          <div className="text-sm text-gray-500 mt-1">باللاتينية: {item.latinName}</div>
                          <div className="mt-3">
                            <AudioPlayer text={item.name} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              
              case 'songs':
              case 'movies':
                return (
                  <div className="space-y-4">
                    {filteredData.map((item: any) => (
                      <div key={item.id} className="bg-white rounded-xl shadow p-4">
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm mt-1">وصف: {item.description}</div>
                            <div className="text-sm text-gray-500 mt-1">باللاتينية: {item.latinTitle}</div>
                            <div className="mt-3">
                              <AudioPlayer text={item.title} />
                            </div>
                          </div>
                          <div className="bg-amazigh-blue text-white rounded-full px-3 py-1 text-sm">
                            {item.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
                
              default:
                return (
                  <div className="text-center py-12">
                    <p>لا يوجد محتوى متاح لهذا القسم</p>
                  </div>
                );
            }
          })()
        )}
      </main>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>تطبيق تعلم الأمازيغية © {new Date().getFullYear()}</p>
          <p className="mt-1 text-sm opacity-70">Taɛellumt n Tamaziɣt</p>
        </div>
      </footer>
    </div>
  );
};

export default CategoryDetails;
