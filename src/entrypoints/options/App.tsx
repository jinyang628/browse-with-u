import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getUserById, User } from "@/stores/supabase";

export default function App() {
  const [apiKey, setApiKey] = useState<string>("");
  const [supabaseKey, setSupabaseKey] = useState<string>("");
  const [supabaseUrl, setSupabaseUrl] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const getUser = async () => {
      const user = await getUserById(1);
      setUser(user);
    }
    getUser();
  }, [])
    
  console.log('user', user);
  
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex flex-col space-y-4 max-w-[480px] w-full">
        <p className="text-base font-semibold">Anthropic API Key:</p>
        <Input
          onChange={(e) => setApiKey(e.target.value)}
          value={apiKey}
          placeholder="Enter your Anthropic API key"
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
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
