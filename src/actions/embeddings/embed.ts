export async function getEmbedding(sanitizedQuery: string) {
  const openAiKey = await browser.storage.sync.get("openAiKey");

  const response = await fetch("https://api.openai.com/v1/embeddings", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${openAiKey.openAiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-embedding-ada-002",
      input: sanitizedQuery.replaceAll("\n", " "),
    }),
  });

  const result = await response.json();
  return result;
}
