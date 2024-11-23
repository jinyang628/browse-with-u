import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { GET, UPDATE, User } from "@/stores/supabase";
import { UserDetails } from "@/actions/llm/profileFuncCall";
import PdfUpload from "@/components/options/pdf-upload";
import { extractProfileFromPdf } from "@/actions/llm/profileFuncCall";

export const UserDataForm: React.FC = () => {
  const [userData, setUserData] = useState<Partial<User>>({
    name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    phone: "",
    location: "",
    nationality: "",
    languages: "",
    health_conditions: "",
    fitness_goals: "",
    sleep_hours: "8",
    occupation: "",
    industry: "",
    skills: "",
    hobbies: "",
    food: "",
    goals: "",
    allergies: "",
  });

  const onPdfUpload = (pdf_base64_image: string) => {
    // Call LLM
    //console.log(pdf_base64_image);
    // setUserData(response);
  };

  const useTypewriter = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState("");
  
    useEffect(() => {
      let i = -1;
      if (!text) return;
      
      const typing = setInterval(() => {
        if (i < text.length) {
          setDisplayText(prev => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(typing);
        }
      }, speed);
  
      return () => clearInterval(typing);
    }, [text, speed]);
  
    return displayText;
  };

  const onTextExtracted = (text: string) => {
    const updateUserData = async () => {
      const extracted_data = await extractProfileFromPdf(text);
      if (extracted_data) {
        // Add null check
        setUserData(extracted_data);
      }
    };
    updateUserData();
  };

  useEffect(() => {
    const getUser = async () => {
      const users = await GET<"users">("users", { id: 1 });
      if (users && users.length > 0) {
        setUserData(users[0]);
      }
    };
    getUser();
  }, []);

  const handleChange =
    (field: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({
        ...userData,
        [field]: event.target.value,
      });
    };

  const handleSubmit = () => {
    UPDATE<"users">("users", { id: 1 }, userData);
  };

  return (
    <div className="flex flex-col space-y-4 max-w-[800px] max-h-[800px] w-full p-4">
      <Card className="overflow-y-auto max-h-[600px]">
        <CardContent className="flex flex-col gap-2  overflow-y-auto">
          <div className="flex justify-between items-center w-full my-4">
            <p className="text-base font-semibold w-[250px]">
              Personal Information
            </p>
            <PdfUpload
              onPdfUpload={onPdfUpload}
              onTextExtracted={onTextExtracted}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={useTypewriter(userData.name || "")}
                onChange={handleChange("name")}
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={useTypewriter(userData.date_of_birth || "")}
                onChange={handleChange("date_of_birth")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={useTypewriter(userData.email || "")}
                onChange={handleChange("email")}
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={useTypewriter(userData.location || "")}
                onChange={handleChange("phone")}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <p className="text-base font-semibold my-4">
            Demographic Information
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={useTypewriter(userData.location || "")}
                onChange={handleChange("location")}
                placeholder="Enter your location"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                type="text"
                value={userData.nationality || ""}
                onChange={handleChange("nationality")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languages">Languages</Label>
              <Input
                id="languages"
                type="text"
                value={userData.languages || ""}
                onChange={handleChange("languages")}
                placeholder="Enter your languages"
              />
            </div>
          </div>
          <p className="text-base font-semibold my-4">Health and Wellness</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="healthConditions">Health Conditions</Label>
              <Input
                id="healthConditions"
                value={userData.health_conditions || ""}
                onChange={handleChange("health_conditions")}
                placeholder="Enter your health conditions"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies">Allergies</Label>
              <Input
                id="allergies"
                type="text"
                value={userData.allergies || ""}
                onChange={handleChange("allergies")}
                placeholder="Enter your allergies"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fitnessGoals">Fitness Goals</Label>
              <Input
                id="fitnessGoals"
                type="text"
                value={userData.fitness_goals || ""}
                onChange={handleChange("fitness_goals")}
                placeholder="Enter your fitness goals"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sleepHours">Sleep Hours</Label>
              <Input
                id="sleepHours"
                type="text"
                value={userData.sleep_hours || ""}
                onChange={handleChange("sleep_hours")}
                placeholder="Enter your sleep hours"
              />
            </div>
          </div>
          <p className="text-base font-semibold my-4">Professional Details</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="occupation">Occupation</Label>
              <Input
                id="occupation"
                value={userData.occupation || ""}
                onChange={handleChange("occupation")}
                placeholder="Enter your occupation"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Input
                id="industry"
                type="text"
                value={userData.industry || ""}
                onChange={handleChange("industry")}
                placeholder="Enter your industry"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <Input
                id="skills"
                type="text"
                value={userData.skills || ""}
                onChange={handleChange("skills")}
                placeholder="Enter your skills"
              />
            </div>
          </div>
          <p className="text-base font-semibold my-4">
            Interests and Preferences
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="location">Hobbies</Label>
              <Input
                id="hobbies"
                value={userData.hobbies || ""}
                onChange={handleChange("hobbies")}
                placeholder="Enter your hobbies"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="food">Food</Label>
              <Input
                id="food"
                type="text"
                value={userData.food || ""}
                onChange={handleChange("food")}
                placeholder="Enter your food"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goals">Goals</Label>
              <Input
                id="goals"
                type="text"
                value={userData.goals || ""}
                onChange={handleChange("goals")}
                placeholder="Enter your goals"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <Button className="w-full" onClick={handleSubmit}>
        Save Profile
      </Button>
    </div>
  );
};
