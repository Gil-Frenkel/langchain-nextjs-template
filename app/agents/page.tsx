import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🤖 DaatAI Agent 🤖
      </h1>
      <ul>
        <li>
          <span className="ml-2">
            Hi there! I am DaatAI agent. I have memory and access to a search engine and a calculator.
          </span>
        </li>
        <li>
          <span className="ml-2">
            Ask me anything and I'll try my best to give you a concrete answer!
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            👇 Try asking something like <code>What is the square root of the current weather in Honolulu?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I'm a conversational agent! How can I help you today?"
      titleText="DaatAI Agent"
      emoji="🤖"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
