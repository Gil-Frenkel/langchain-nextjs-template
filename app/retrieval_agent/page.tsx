import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🤖🎾 DaatAI Retrieval Agent 🤖🎾
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          <span className="ml-2">
            Hi there! I am DaatAI Retrieval Agent. 
            I can access to a database and use it as a tool as well
            as a memory. I am particularly well suited to meta-questions
            about the current conversation.
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Upload some text, then try asking something like{" "}
            <code>Using only two sentences, please provide me with a summery</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agent"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={"I am DaatAI retrieval-focused agent! How can I help you today?"}
      emoji="🤖🎾"
      titleText="DaatAI Retrieval Agent"
    ></ChatWindow>
  );
}
