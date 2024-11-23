import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const pdfToProfileResponseSchema = z.object({
  name: z.string().optional(),
  date_of_birth: z.string().optional(),
  gender: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
  nationality: z.string().optional(),
  languages: z.string().optional(),
  health_conditions: z.string().optional(),
  fitness_goals: z.string().optional(),
  sleep_hours: z.string().optional(),
  occupation: z.string().optional(),
  industry: z.string().optional(),
  skills: z.string().optional(),
  hobbies: z.string().optional(),
  food: z.string().optional(),
  goals: z.string().optional(),
  allergies: z.string().optional(),
});

const SYSTEM_PROMPT = `
You are a helpful assistant that can generate a personalized profile based on a PDF file.

Try to be as concise as possible in your resposne and do not include any explanations or additional information. You will be given a base64 encoded PDF file and you will need to generate a JSON object that contains the following information:

- name
- date_of_birth
- gender
- email
- phone
- location
- nationality
- languages
- health_conditions
- fitness_goals
- sleep_hours
- occupation
- industry
- skills
- hobbies
- food
- goals
- allergies

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

const USER_PROMPT = `Here is the base64 encoded PDF file:

{pdf_base64_image}`;
