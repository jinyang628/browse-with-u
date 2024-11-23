import {
  defaultPageStateHistory,
  pageStateHistorySchema,
} from "@/types/state/history";
import { createPersistedStore } from "@/types/store/base";

export const usePageStateHistoryStore = createPersistedStore(
  "history",
  defaultPageStateHistory,
  pageStateHistorySchema,
  "pageStateHistory",
  "setPageStateHistory",
);
