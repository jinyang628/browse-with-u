import { GET } from "@/stores/supabase";

export const fetchLtmInfo = async (): Promise<Record<string, any>> => {
  const users = await GET<"users">("users", { id: 1 });
  if (!users || users.length < 1 || users.length > 1) {
    throw new Error("Invalid user data");
  }

  const user = users[0];

  return {
    name: user.name,
    date_of_birth: user.date_of_birth,
    gender: user.gender,
    email: user.email,
    phone: user.phone,
    location: user.location,
    nationality: user.nationality,
    languages: user.languages,
    health_conditions: user.health_conditions,
    fitness_goals: user.fitness_goals,
    sleep_hours: user.sleep_hours,
    occupation: user.occupation,
    industry: user.industry,
    skills: user.skills,
    hobbies: user.hobbies,
    food: user.food,
    goals: user.goals,
    allergies: user.allergies,
  };
};
