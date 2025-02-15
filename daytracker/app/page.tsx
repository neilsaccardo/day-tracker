"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-2xl font-bold">Day Tracker</h1>

        <section className="w-full p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
          <h2 className="text-xl font-semibold mb-4">Start of Day Planning</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">What do you plan to do today?</label>
              <textarea 
                className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent"
                rows={4}
                placeholder="List your planned activities..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Why? What value are you bringing?</label>
              <textarea
                className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent"
                rows={4}
                placeholder="Describe the intended impact of your activities..."
              />
            </div>
          </div>
        </section>

        <section className="w-full p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
          <h2 className="text-xl font-semibold mb-4">End of Day Reflection</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">What did you do today?</label>
              <textarea
                className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent"
                rows={4}
                placeholder="List what you actually accomplished..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Are you happy with how it went?</label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Not at all</span>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    defaultValue="5"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    onChange={(e) => {
                      const value = document.getElementById('satisfaction-value');
                      if (value) value.textContent = `${e.target.value}/10`;
                    }}
                  />
                  <span className="text-sm">Very happy</span>
                </div>
                <span id="satisfaction-value" className="text-sm text-center">5/10</span>
              </div>
            </div>
          </div>
        </section>

        <button className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-8">
          Save Entry
        </button>
      </main>
      <footer className="row-start-3 text-sm text-center text-gray-500">
        Track your daily intentions and reflections
      </footer>
    </div>
  );
}
