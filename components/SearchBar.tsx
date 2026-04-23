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
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl">
      <div className="relative flex items-end gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-sm transition-all duration-200 focus-within:border-zinc-400 focus-within:shadow-md">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={'Describe your vibe\u2026 \u201ccheap chaotic student night\u201d, \u201cchill date spot\u201d, \u201ctechno rave\u201d'}
          rows={1}
          className="flex-1 resize-none overflow-hidden bg-transparent text-base leading-relaxed text-zinc-900 outline-none placeholder-zinc-400"
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
          className="flex flex-shrink-0 items-center gap-1.5 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-zinc-700 disabled:bg-zinc-300"
        >
          {isLoading ? (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1L15 8L8 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
          <span>Find</span>
        </button>
      </div>
      <p className="mt-2.5 text-center text-xs text-zinc-400">
        Press{" "}
        <kbd className="rounded border border-zinc-200 bg-zinc-100 px-1 py-0.5 font-mono text-zinc-500">
          Enter
        </kbd>{" "}
        to search
      </p>
    </form>
  );
}
