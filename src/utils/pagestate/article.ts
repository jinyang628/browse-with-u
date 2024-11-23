import browser from "webextension-polyfill";
import { Readability } from "@mozilla/readability";

export function generateArticle() {
  const doc = document.implementation.createHTMLDocument();
  doc.body.innerHTML = document.body.innerHTML;

  const reader = new Readability(doc);
  const article = reader.parse();
  return article;
}
