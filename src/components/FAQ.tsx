'use client';
import { useState } from 'react';

type FAQItem = { q: string; a: string };

export default function FAQ({ items, title }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{title || 'よくある質問'}</h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="flex items-center gap-3">
                <span className="text-sm font-bold text-gray-400 w-6">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-medium text-gray-800">{item.q}</span>
              </span>
              <span className="text-gray-400 text-xl">{openIndex === i ? '−' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 pl-14 text-gray-600 text-sm leading-relaxed">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
