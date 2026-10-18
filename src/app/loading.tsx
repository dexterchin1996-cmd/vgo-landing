export default function Loading() {
  return (
    <div className="min-h-[60svh] flex items-center justify-center">
      <div className="relative">
        <div className="w-10 h-10 border-2 border-[var(--vgo)]/20 rounded-full" />
        <div className="absolute top-0 left-0 w-10 h-10 border-2 border-[var(--vgo)] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
