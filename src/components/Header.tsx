'use client';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/australia', label: 'Australia' },
  { href: '/america', label: 'America' },
  { href: '/south-korea', label: 'Korea' },
  { href: '/united-kingdom', label: 'United Kingdom' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-800 flex items-center gap-2">
          🌐 <span>Global Travel Center</span>
        </Link>
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 text-sm font-medium font-serif-country">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden border-t px-4 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-600 hover:text-gray-900 text-sm font-medium font-serif-country py-1" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <div className="bg-gray-50 border-t">
        <p className="max-w-6xl mx-auto px-4 py-2 text-xs text-gray-500 text-center">
          Global Travel Centerは公認移民エージェントによる監修と信頼できる情報で、渡航前の不安を解消するサイトです。
        </p>
      </div>
    </header>
  );
}
