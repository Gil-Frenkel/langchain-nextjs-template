"use client";

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../assets/images/no-bg-logo.png';

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <Image src={logo} alt="logo" />
      <br/>
      <a className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`} href="/">💬 Chat</a>
      <a className={`mr-4 ${pathname === "/structured_output" ? "text-white border-b" : ""}`} href="/structured_output">🧱 Structured Output</a>
      <a className={`mr-4 ${pathname === "/agents" ? "text-white border-b" : ""}`} href="/agents">🤖 Agents</a>
      <a className={`mr-4 ${pathname === "/retrieval" ? "text-white border-b" : ""}`} href="/retrieval">🎾 Retrieval Chain</a>
      <a className={`mr-4 ${pathname === "/retrieval_agent" ? "text-white border-b" : ""}`} href="/retrieval_agent">🤖🎾 Retrieval Agent</a>
    </nav>
  );
}