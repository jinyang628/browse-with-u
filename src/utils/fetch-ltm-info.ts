import { GET } from "@/stores/supabase";

export const fetchLtmInfo = async (
  user_id: number = 1,
): Promise<Record<string, any>> => {
  // Example usage
  // const data = await fetchLtmInfo();
  // console.log(data);

  const users = await GET<"users">("users", { id: user_id });
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
