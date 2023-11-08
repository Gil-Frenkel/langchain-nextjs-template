import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        🎾 DaatAI Retrieval 🎾
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          <span className="ml-2">
            Hi there! This is DaatAI Document Retrieval Chain.
          </span>
        </li>
        <li className="hidden text-l md:block">
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
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
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder={
        'Hi! I can help you find the right documents!'
      }
      emoji="🎾"
      titleText="DaatAI Retrieval Chain"
    ></ChatWindow>
  );
}
