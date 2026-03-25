"use client";

import { useMemo, useState } from "react";

type Download = {
  category: string;
  name: string;
  type: string;
  size: string;
  date: string;
};

export default function DownloadsClient({
  downloads,
  tabs,
}: {
  downloads: Download[];
  tabs: string[];
}) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0] ?? "All");

  const visibleDownloads = useMemo(() => {
    if (!activeTab || activeTab === "All") return downloads;
    return downloads.filter((d) => d.category === activeTab);
  }, [activeTab, downloads]);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((t) => {
          const selected = t === activeTab;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTab(t)}
              className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full border transition-colors ${
                selected
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-body border-black/10 hover:border-navy/20"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Downloads list */}
      {visibleDownloads.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-black/5 card-base text-center">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body mb-3">
            No files found
          </div>
          <p className="font-serif text-headline text-xl">
            There are no resources in <span className="italic-accent">{activeTab}</span> right now.
          </p>
          <button type="button" onClick={() => setActiveTab("All")} className="btn-navy inline-flex mt-8">
            View All Resources →
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {visibleDownloads.map((d) => (
            <div
              key={d.name}
              className="bg-white rounded-2xl px-7 py-5 flex items-center justify-between card-base border border-black/5"
            >
              <div className="flex items-center gap-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-tint flex items-center justify-center shrink-0">
                  <span className="font-sans text-[10px] font-bold text-navy-light uppercase">{d.type}</span>
                </div>
                <div>
                  <h3 className="font-serif text-headline text-base">{d.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-wide text-navy-light bg-indigo-tint px-2.5 py-1 rounded-full">
                      {d.category}
                    </span>
                    <span className="font-sans text-[11px] text-body">{d.size}</span>
                    <span className="font-sans text-[11px] text-body">{d.date}</span>
                  </div>
                </div>
              </div>
              <button className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy-light transition-colors flex items-center gap-2 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

