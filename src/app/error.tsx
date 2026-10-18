'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('页面错误:', error);
  }, [error]);

  return (
    <main className="min-h-[70svh] flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl font-bold text-white mb-4">遇到一点小问题</h2>
      <p className="text-white/50 mb-8">别担心，不是你的问题 😊</p>
      <button
        onClick={() => reset()}
        className="px-8 py-3 bg-[var(--vgo)] rounded-full font-bold text-white hover:opacity-90 transition-opacity"
      >
        再试一次
      </button>
    </main>
  );
}
