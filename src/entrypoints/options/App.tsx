import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function App() {
  const [apiKey, setApiKey] = useState<string>("");

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex space-x-4 max-w-[400px] w-full">
        <Input
          onChange={(e) => setApiKey(e.target.value)}
          value={apiKey}
          placeholder="Enter your API key"
        />
        <Button
          onClick={() => {
            browser.storage.sync.set({ apiKey: apiKey });
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
