
import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

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
    <button
      onClick={handlePlay}
      disabled={isPlaying}
      className="inline-flex items-center gap-2 bg-amazigh-light text-amazigh-dark px-3 py-1.5 rounded-full hover:bg-opacity-80 transition-all disabled:opacity-50"
    >
      {isPlaying ? (
        <VolumeX className="w-4 h-4" />
      ) : (
        <Volume2 className="w-4 h-4" />
      )}
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default AudioPlayer;
