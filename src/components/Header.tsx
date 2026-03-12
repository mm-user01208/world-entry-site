'use client';
import Link from 'next/link';
import { useState } from 'react';

const basePath = '/world-entry-site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: 'HOME', href: '#top' },
    { label: 'Australia', href: '#australia' },
    { label: 'America', href: '#america' },
    { label: 'Korea', href: '#korea' },
    { label: 'United Kingdom', href: '#united-kingdom' },
  ];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" id="top">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={`${basePath}/images/logo.png`} alt="Global Travel Center" className="h-8 w-auto" />
          <span className="text-lg font-bold text-gray-800">Global Travel Center</span>
        </Link>
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setOpen(!open)}>☰</button>
        <nav className="hidden md:flex gap-8">
          {navItems.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-500 hover:text-gray-900 text-sm font-medium font-serif-country">{l.label}</a>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden border-t px-4 py-3 space-y-2 bg-white">
          {navItems.map((l) => (
            <a key={l.href} href={l.href} className="block text-gray-600 text-sm py-1" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
      )}
      <div className="bg-gray-50 border-t">
        <p className="max-w-6xl mx-auto px-4 py-2 text-[11px] text-gray-400 text-center">
          Global Travel Centerは公認移民エージェントによる監修と信頼できる情報で、渡航前の不安を解消するサイトです。
        </p>
      </div>
    </header>
  );
}
