"use client";

import { useState } from "react";

export default function History() {
  const [timeframe, setTimeframe] = useState<"week" | "month" | "year">("week");
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Mock data for a week
  const mockEntries: Record<string, {
    plans: string;
    value: string;
    accomplishments: string;
    satisfaction: number;
  }> = {
    "2024-03-20": {
      plans: "Complete project proposal\nMeet with team\nStart documentation",
      value: "Moving project forward\nAligning team objectives",
      accomplishments: "Finished and submitted proposal\nProductive team meeting",
      satisfaction: 8
    },
    "2024-03-21": {
      plans: "Write code\nReview PRs\nTeam standup",
      value: "Building core features\nMaintaining code quality",
      accomplishments: "Completed 2 features\nCleared PR backlog",
      satisfaction: 9
    },
    "2024-03-22": {
      plans: "Client meeting\nBug fixes\nDocumentation",
      value: "Client satisfaction\nProduct stability",
      accomplishments: "Great client feedback\nFixed critical bugs",
      satisfaction: 7
    },
    "2024-03-23": {
      plans: "Feature planning\nArchitecture review",
      value: "Future-proofing\nTechnical excellence",
      accomplishments: "Solid architecture decisions\nClear roadmap",
      satisfaction: 6
    },
    "2024-03-24": {
      plans: "Code refactoring\nPerformance optimization",
      value: "Better maintainability\nFaster application",
      accomplishments: "30% performance improvement\nCleaner codebase",
      satisfaction: 9
    }
  };

  const selectedEntry = selectedDate ? mockEntries[selectedDate] : null;

  const renderTimeline = () => {
    const dates = Object.keys(mockEntries).sort();
    
    return (
      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-4">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as "week" | "month" | "year")}
            className="p-2 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent"
          >
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
          <span className="text-sm text-gray-500">
            March 20-24, 2024
          </span>
        </div>
        
        <div className="relative">
          <div className="h-24 flex gap-1">
            {dates.map(date => (
              <div 
                key={date}
                className={`flex-1 cursor-pointer transition-all hover:opacity-80 ${
                  selectedDate === date ? 'ring-2 ring-foreground' : ''
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div 
                  className="h-full bg-foreground rounded-t-lg"
                  style={{ 
                    opacity: mockEntries[date].satisfaction / 10,
                  }}
                />
                <div className="text-xs mt-1 text-center">
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-2xl">
        <h1 className="text-2xl font-bold">Day History</h1>

        {renderTimeline()}

        {selectedEntry ? (
          <div className="w-full">
            <section className="w-full p-6 rounded-lg border border-black/[.08] dark:border-white/[.145]">
              <h2 className="text-xl font-semibold mb-4">Start of Day Planning</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">What was planned:</label>
                  <div className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent whitespace-pre-line">
                    {selectedEntry.plans}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Intended value:</label>
                  <div className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent whitespace-pre-line">
                    {selectedEntry.value}
                  </div>
                </div>
              </div>
            </section>

            <section className="w-full p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] mt-8">
              <h2 className="text-xl font-semibold mb-4">End of Day Reflection</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">What was accomplished:</label>
                  <div className="w-full p-3 rounded-md border border-black/[.08] dark:border-white/[.145] bg-transparent whitespace-pre-line">
                    {selectedEntry.accomplishments}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Satisfaction level:</label>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Not at all</span>
                    <div className="w-full h-2 bg-gray-200 rounded-lg dark:bg-gray-700 relative">
                      <div 
                        className="absolute h-full bg-foreground rounded-lg"
                        style={{ width: `${(selectedEntry.satisfaction / 10) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm">Very happy</span>
                  </div>
                  <span className="text-sm text-center block mt-2">
                    {selectedEntry.satisfaction}/10
                  </span>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="text-center text-gray-500">
            {selectedDate ? "No entry found for this date" : "Select a date to view history"}
          </div>
        )}
      </main>
      <footer className="row-start-3 text-sm text-center text-gray-500">
        Review your past daily entries
      </footer>
    </div>
  );
}
