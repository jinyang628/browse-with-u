import { z } from "zod";

export const recordingStateSchema = z.object({
  url: z.string(),
  isRecording: z.boolean(),
});

export type RecordingState = z.infer<typeof recordingStateSchema>;

export const defaultRecordingState: RecordingState = {
  url: "",
  isRecording: true,
};
