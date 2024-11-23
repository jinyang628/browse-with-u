import browser from "webextension-polyfill";

import {
  InvokeRequest,
  InvokeResponse,
  invokeResponseSchema,
} from "@/types/actions/messages/invoke";
import { logger } from "@/lib/logger";

export async function invoke(
  input: InvokeRequest,
): Promise<InvokeResponse | void> {
  try {
    logger.info(`Invoke request initiated`);
    console.log(input);
    // TODO: Database, LLM, etc.
    // const response =
    // const invokeResponse = invokeResponseSchema.parse(response.data);
    logger.info(`Invoke response received`);

    // TODO: Revert the return shape to not have void
    // return invokeResponse;
  } catch (error: unknown) {
    logger.error(`Invoke error: ${error}`);
    throw error;
  }
}
