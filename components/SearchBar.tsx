"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) onSearch(value.trim());
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-end gap-3 bg-white border border-zinc-200 rounded-2xl shadow-sm px-4 py-3 focus-within:border-zinc-400 focus-within:shadow-md transition-all duration-200">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={'Describe your vibe\u2026 \u201ccheap chaotic student night\u201d, \u201cchill date spot\u201d, \u201ctechno rave\u201d'}
          rows={1}
          className="flex-1 resize-none bg-transparent text-zinc-900 placeholder-zinc-400 text-base leading-relaxed outline-none overflow-hidden"
          style={{ minHeight: "1.5rem", maxHeight: "6rem" }}
          onInput={(e) => {
            const el = e.currentTarget;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
          }}
        />
        <button
          type="submit"
          disabled={!value.trim() || isLoading}
          className="flex-shrink-0 flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-700 disabled:bg-zinc-300 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-150"
        >
          {isLoading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M8 1L15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 8H15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
          <span>Find</span>
        </button>
      </div>
      <p className="mt-2.5 text-center text-xs text-zinc-400">
        Press <kbd className="font-mono bg-zinc-100 border border-zinc-200 px-1 py-0.5 rounded text-zinc-500">Enter</kbd> to search
      </p>
    </form>
  );
}
