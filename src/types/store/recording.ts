import {
  defaultRecordingState,
  recordingStateSchema,
} from "@/types/state/recording";
import { createPersistedStore } from "@/types/store/base";

export const useRecordingStore = createPersistedStore(
  "recording",
  defaultRecordingState,
  recordingStateSchema,
  "recordingState",
  "setRecordingState",
);
