import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@/stores/supabase";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserDataForm } from "@/components/options/user-data";
import { Card } from "@/components/ui/card";
import { SUPABASE_KEY, SUPABASE_URL } from "@/constants/supabase";
import { invoke } from "@/actions/messages/invoke";
const pageStates = [
  { url: "https://www.google.com/search?q=how+to+get+california+driving+license", textContent: "Be at least 18. · Complete the California Driver's License or ID Card Application. · Visit a DMV office (schedule an appointment), where you will: Bring your ...Visit your nearby DMV office · Complete Form DL44 - Driver License or Identification Card Application · Show proof of your identity · Pay the $33 fee for driver's ...Feb 24, 2023 — First, you have to be at least 15 and a half years old. If you're over 17 and a half, you can skip driver's ed and go straight to the permit ...Feb 9, 2024 — 1. Schedule an Appointment · 2. Complete the Driver License Application · 3. Provide Your Personal Information · 4. Fingerprints and Photos · 5. Pay ...You can't. You need to just go to the DMV, take the written test, and they'll issue you a Cali one. Practice tests are online.Step One: The Learners Permit · Proof of your date of birth and legal residence. · Proof of Social Security number. · Proof of residency in California.To get your California driver's license, the California DMV requires that you be at least 16 years of age, have held your permit for at least 6 months.	 						 								Error: Invalid email confirmation nonce 							 						Register for a MyDMV account by completing the fields.  						 					 						 							Identity Verification 						 						 							We are unable to verify your identity. Please visit the Service 								Advisor for additional service options. 						 						 						 							Back to DMV Homepage 						 					 						 							Illegal Access 						 						 							You have attempted to access this page without performing 							required pre-validations. In order to register for an account you 							must first validate your email address. Please click here 							to begin the registration process. 						 						 						 							Back to DMV Homepage 						 					 						 							Your Email Confirmation Link 								has Expired 						 						 							The email confirmation link to confirm your email for DMV account 							registration has expired. Please  								restart the registration process. 						 						 						 							Back to DMV Homepage 						 					 						 							Identity Verification 						 						 							We are unable to verify your identity. Please visit the Service 								Advisor for additional service options. 						 						 						 							Back to DMV Homepage 						 					"},
  { url: "https://www.dmv.ca.gov/mga/sps/authsvc?StateId=ydKtpgnmiTgSDQZywNVQvqvID2HOtEgdVWjtCFa7NeoQjTeYforlgLMoUG84ZG33dOw1BPb1bRXuI4E6u2OsIdmbeFowHHj1yCUs6GrmkYtNvTnQvqy9MBBuj7dDzg4h", textContent: " 						 							Step 3 of 5 						 						 								Error: Invalid email confirmation nonce 							 						Register for a MyDMV account by completing the fields.  						 					 						 							Identity Verification 						 						 							We are unable to verify your identity. Please visit the Service 								Advisor for additional service options. 						 						 						 							Back to DMV Homepage 						 					 						 							Illegal Access 						 						 							You have attempted to access this page without performing 							required pre-validations. In order to register for an account you 							must first validate your email address. Please click here 							to begin the registration process. 						 						 						 							Back to DMV Homepage 						 					 						 							Your Email Confirmation Link 								has Expired 						 						 							The email confirmation link to confirm your email for DMV account 							registration has expired. Please  								restart the registration process. 						 						 						 							Back to DMV Homepage 						 					 						 							Identity Verification 						 						 							We are unable to verify your identity. Please visit the Service 								Advisor for additional service options. 						 						 						 							Back to DMV Homepage 						 					" },
  { url: "https://www.dmv.ca.gov/portal/mydmv/", textContent: "   				 			MyDMV 			 					 		   Open the door to your new MyDMV    A faster, easier, and more personalized DMV account experience.                 Simple change of address    Update your vehicle, driver’s license (DL), and ID addresses all at once.             Access your Garage    Add your vehicles and see each vehicle’s status in your Garage.             Manage your DL/ID    All your DL/ID statuses are available for easy and convenient updates.             Easier account management    Easily manage and update your email, password, phone number, and communication preferences.                  Take me to Classic MyDMV    Log Out        Industry Services Account Access    Access Occupational Licensing, Requester Accounts, and/or Employer Pull Notice.            Learn more about the new MyDMV         	Some areas of this page may shift around if you resize the browser window. Be sure to check heading and document order."}
];

export default function App() {
  const [apiKey, setApiKey] = useState<string>("");
  const [supabaseKey, setSupabaseKey] = useState<string>(SUPABASE_KEY);
  const [supabaseUrl, setSupabaseUrl] = useState<string>(SUPABASE_URL);
  const [user, setUser] = useState<User | null>(null);
  const [openAiKey, setOpenAiKey] = useState<string>("");

  return (
    <div className="flex h-screen w-full p-8">
      <Tabs defaultValue="keys" className="w-[800px]">
        <TabsList>
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="keys">API Keys</TabsTrigger>
        </TabsList>
        <TabsContent value="user">
          <UserDataForm />
        </TabsContent>
        <TabsContent value="keys">
          <div className="flex flex-col space-y-4 max-w-[800px] max-h-[800px] w-full p-4">
            <Card className="flex flex-col space-y-4 max-w-[480px] p-4 w-full">
            <Button onClick={() => {
                  invoke({
                    pageStates: pageStates,
                  });
                }}
              >
                Test
              </Button>
              <p className="text-base font-semibold">Anthropic API Key:</p>
              <Input
                onChange={(e) => setApiKey(e.target.value)}
                value={apiKey}
                placeholder="Enter your Anthropic API key"
              />
              <p className="text-base font-semibold">OpenAI API Key:</p>
              <Input
                onChange={(e) => setOpenAiKey(e.target.value)}
                value={openAiKey}
                placeholder="Enter your OpenAI API key"
              />
              <p className="text-base font-semibold">Supabase Key:</p>
              <Input
                onChange={(e) => setSupabaseKey(e.target.value)}
                value={supabaseKey}
                placeholder="Enter your Supabase key"
              />
              <p className="text-base font-semibold">Supabase URL:</p>
              <Input
                onChange={(e) => setSupabaseUrl(e.target.value)}
                value={supabaseUrl}
                placeholder="Enter your Supabase URL"
              />
              <Button
                onClick={() => {
                  browser.storage.sync.set({ apiKey: apiKey });
                  browser.storage.sync.set({ supabaseKey: supabaseKey });
                  browser.storage.sync.set({ supabaseUrl: supabaseUrl });
                  browser.storage.sync.set({ openAiKey: openAiKey });
                }}
              >
                Save
              </Button>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
