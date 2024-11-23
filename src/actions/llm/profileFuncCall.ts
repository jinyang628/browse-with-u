import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import { invokeClaudeAPI } from "./claude";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";

export const UserDetails = z.object({
  name: z.string(),
  date_of_birth: z.string(),
  gender: z.string(),
  email: z.string(),
  phone: z.string(),
  location: z.string(),
  nationality: z.string(),
  languages: z.string(),
  health_conditions: z.string(),
  fitness_goals: z.string(),
  sleep_hours: z.string(),
  occupation: z.string(),
  industry: z.string(),
  skills: z.string(),
  hobbies: z.string(),
  food: z.string(),
  goals: z.string(),
  allergies: z.string(),
});

const SYSTEM_PROMPT = `
  You are a helpful assistant that can generate a personalized profile based on a PDF file.

  Try to be as concise as possible in your resposne and do not include any explanations or additional information. 
  You will be given user details and you will need to generate a JSON object with string values that contains the following information:

  JSON format with keys: “name”, "date_of_birth", "gender", "email", "phone", "location", "nationality", "languages", "health_conditions", "fitness_goals", "sleep_hours", "occupation", "industry", "skills", "hobbies", "food", "goals", "allergies".

  The JSON object should be in the following format:

  {
    "name": "John Doe",
    "date_of_birth": "1990-01-01",
    "gender": "male",
    "email": "john.doe@example.com",
    "phone": "123-456-7890",
    "location": "New York, NY",
    "nationality": "American",
    "languages": "English, Spanish",
    "health_conditions": "Diabetes",
    "fitness_goals": "Running",
    "sleep_hours": "7",
    "occupation": "Software Engineer",
    "industry": "Technology",
    "skills": "Python, JavaScript",
    "hobbies": "Reading, Writing",
    "food": "Pizza, Sushi",
    "goals": "Learn new skills, Improve health",
    "allergies": "Peanuts, Tree Nuts"
  }


  `;

const USER_PROMPT = `Here is the user data extracted about the user:

  {user_data}
  
  Output a JSON object only. Do not JSON key names at all. All the values should be in string format. No other text.`;

export async function extractProfileFromPdf(data: string) {
  // console.log('profile_func_call data', data)
  // const final_prompt = USER_PROMPT.replace("{user_data}", data);
  // const final_response = await invokeClaudeAPI(final_prompt);
  const { apiKey } = await browser.storage.sync.get("openAiKey");
  const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey:
      apiKey,
  });

  const final_prompt = USER_PROMPT.replace("{user_data}", data);
  const completion = await openai.beta.chat.completions.parse({
    model: "gpt-4o",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: final_prompt },
    ],
    response_format: zodResponseFormat(UserDetails, "user_details"),
  });

  const event = completion.choices[0].message.parsed;
  console.log("event", event);
  return event;
}
