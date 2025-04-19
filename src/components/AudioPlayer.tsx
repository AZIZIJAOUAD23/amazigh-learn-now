
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AudioPlayerProps {
  audioUrl?: string;
  text: string;
}

const AudioPlayer = ({ audioUrl, text }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioUrl) {
      console.log("No audio available for:", text);
      return;
    }
    
    setIsPlaying(true);
    const audio = new Audio(audioUrl);
    
    audio.addEventListener('ended', () => {
      setIsPlaying(false);
    });
    
    audio.play().catch((error) => {
      console.error("Error playing audio:", error);
      setIsPlaying(false);
    });
  };

  return (
    <Button
      onClick={handlePlay}
      disabled={isPlaying}
      variant="outline"
      size="sm"
      className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
    >
      {isPlaying ? (
        <VolumeX className="w-4 h-4 mr-2" />
      ) : (
        <Volume2 className="w-4 h-4 mr-2" />
      )}
      <span className="text-sm">سمع النطق</span>
    </Button>
  );
};

export default AudioPlayer;
