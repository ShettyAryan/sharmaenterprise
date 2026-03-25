export default function Loading() {
  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="bg-navy rounded-4xl p-10 md:p-12 border border-navy/10 shadow-card text-center relative overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #1A3FBF, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-28 -left-28 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "radial-gradient(circle, #C9A84C, transparent 70%)" }}
          />

          <div className="relative z-10">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <span className="font-serif text-white text-xl font-semibold leading-none">S</span>
            </div>

            <div className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 mb-4">
              Sharma Enterprise
            </div>

            <div className="mx-auto w-40 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/2 rounded-full bg-gold animate-loading-bar" />
            </div>

            <p className="font-sans text-white/60 text-sm mt-6">
              Loading, please wait…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

