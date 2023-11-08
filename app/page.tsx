import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
      🦾 Welcome to DaatAI Platform! 🦾
      </h1>
      <ul>
        <li className="hidden text-l md:block">
        </li>
        <li>
          <span className="ml-2">
            Hi there! I am DaatAI assistant bot. Ask me anything and I'll try my best to give you a concrete answer!
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            👇 Try asking something like <code>What are you and what is your job?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="💬"
      titleText="Chat with DaatAI Assistant"
      placeholder="HI! How can I help you today?"
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
