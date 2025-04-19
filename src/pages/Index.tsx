
import { categories } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* هيدر التطبيق */}
      <header className="bg-amazigh-blue text-white py-6 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-end mb-4">
            <LanguageToggle />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            تعلم الأمازيغية
          </h1>
          <p className="text-center mt-2 opacity-90">Taɛellumt n Tamaziɣt</p>
        </div>
      </header>

      {/* محتوى القسم الرئيسي */}
      <main className="container mx-auto px-4 pb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">أقسام التعلم</h2>
          <p className="text-gray-600">اختر القسم الذي تود تعلمه</p>
        </div>

        {/* شبكة الأقسام */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              title={category.title}
              latinTitle={category.latinTitle}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </main>

      {/* فوتر التطبيق */}
      <footer className="bg-amazigh-dark text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>تطبيق تعلم الأمازيغية © {new Date().getFullYear()}</p>
          <p className="mt-1 text-sm opacity-70">Taɛellumt n Tamaziɣt</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
