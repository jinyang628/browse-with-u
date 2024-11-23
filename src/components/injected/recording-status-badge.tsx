import { Badge } from "@/components/ui/badge";
import { Eye, Pause, Play } from "lucide-react";
import { Button } from "../ui/button";

type RecordingStatusBadgeProps = {
  isRecording: boolean;
  onPlayButtonClick: () => void;
  onPauseButtonClick: () => void;
};

export function RecordingStatusBadge({
  isRecording,
  onPlayButtonClick,
  onPauseButtonClick,
}: RecordingStatusBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <Badge
        variant={isRecording ? "default" : "secondary"}
        className={`flex items-center gap-1 ${isRecording ? "animate-pulse" : ""}`}
      >
        {isRecording ? (
          <>
            <Eye size={12} />
            Observing
          </>
        ) : (
          <>
            <Eye size={12} />
            Not Observing
          </>
        )}
      </Badge>
      {isRecording ? (
        <div
          onClick={onPauseButtonClick}
          className="w-5 h-5 p-1 bg-black text-white rounded-xs"
        >
          <Pause size={11} />
        </div>
      ) : (
        <div
          onClick={onPlayButtonClick}
          className="w-5 h-5 p-1 bg-black text-white rounded-sm"
        >
          <Play size={11} />
        </div>
      )}
    </div>
  );
}
