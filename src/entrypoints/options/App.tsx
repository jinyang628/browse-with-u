import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function App() {
  const [apiKey, setApiKey] = useState<string>("");
  const [supabaseKey, setSupabaseKey] = useState<string>("");
  const [supabaseUrl, setSupabaseUrl] = useState<string>("");

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex space-x-4 max-w-[400px] w-full">
        <Input
          onChange={(e) => setApiKey(e.target.value)}
          value={apiKey}
          placeholder="Enter your Anthropic API key"
        />
        <Input
          onChange={(e) => setSupabaseKey(e.target.value)}
          value={supabaseKey}
          placeholder="Enter your Supabase key"
        />
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
