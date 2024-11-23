import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

type RecordingStatusBadgeProps = {
  isRecording: boolean;
};

export function RecordingStatusBadge({
  isRecording,
}: RecordingStatusBadgeProps) {
  return (
    <Badge
      variant={isRecording ? "default" : "secondary"}
      className={`flex items-center gap-1 ${isRecording ? "animate-pulse" : ""}`}
    >
      {isRecording ? (
        <>
          <Eye size={12} />
          Recording
        </>
      ) : (
        <>
          <Eye size={12} />
          Not Recording
        </>
      )}
    </Badge>
  );
}
