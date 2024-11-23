import { Button } from "@/components/ui/button";
import { Pause, Play } from "lucide-react";

type ChatBottomBarProps = {
  onPlayButtonClick: () => void;
  onPauseButtonClick: () => void;
};
export default function ChatBottomBar({
  onPlayButtonClick,
  onPauseButtonClick,
}: ChatBottomBarProps) {
  return (
    <div className="flex justify-around items-center py-2">
      <Button variant="secondary" onClick={onPauseButtonClick}>
        <Pause size={20} />
      </Button>
      <Button variant="default" onClick={onPlayButtonClick}>
        <Play size={20} />
      </Button>
    </div>
  );
}
