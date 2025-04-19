
import { useState } from "react";
import { Play } from "lucide-react";

interface PronunciationProps {
  text: string;
  audio?: string;
}

const Pronunciation = ({ text, audio }: PronunciationProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // في هذا المثال لا نملك ملفات صوتية حقيقية، لكن يمكننا إضافة هذه الوظيفة مستقبلاً
  const playSound = () => {
    setIsPlaying(true);
    
    // محاكاة تشغيل الصوت
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };
  
  return (
    <button 
      onClick={playSound}
      className="inline-flex items-center bg-amazigh-light text-amazigh-dark px-3 py-1 rounded-full hover:bg-opacity-80 transition-all"
      disabled={isPlaying}
    >
      <Play size={16} className={`mr-1 ${isPlaying ? 'opacity-50' : ''}`} />
      <span>{text}</span>
    </button>
  );
};

export default Pronunciation;
