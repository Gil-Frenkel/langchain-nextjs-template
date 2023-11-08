import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🧱 DaatAI Data Structure Assistant 🧱
      </h1>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            Hi there! I am DaatAI Data Structure Assistant. You can type any kind of text, and I will make try my best to construct a structured output.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try typing something like <code>I have 2 apples and 3 oranges in my basket</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/structured_output"
      emptyStateComponent={InfoCard}
      placeholder={`No matter what you type here, I'll always return the same JSON object with the same structure!`}
      emoji="🧱"
      titleText="DaatAI Data Structure Assistant"
    ></ChatWindow>
  );
}
