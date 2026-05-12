'use client';
import { useState, useEffect } from 'react';

const basePath = '';

const slides = [
  `${basePath}/images/hero-1.jpg`,
  `${basePath}/images/hero-2.jpg`,
  `${basePath}/images/hero-3.jpg`,
  `${basePath}/images/hero-4.jpg`,
  `${basePath}/images/hero-5.jpg`,
  `${basePath}/images/hero-6.jpg`,
  `${basePath}/images/hero-7.jpg`,
  `${basePath}/images/hero-8.jpg`,
];

export default function HeroSliderV2() {
  const [current, setCurrent] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    const panInterval = setInterval(() => {
      setOffsetX((prev) => prev - 0.3);
    }, 50);
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setOffsetX(0);
    }, 6000);
    return () => {
      clearInterval(panInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const scrollToCountries = () => {
    const el = document.getElementById('apply-countries');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[480px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? `translateX(${offsetX}px) scale(1.1)` : 'scale(1.1)',
              transition: 'transform 0.05s linear',
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-16">
        <p className="text-xs md:text-sm text-gray-200 mb-3 tracking-wider uppercase">Online Visa &amp; eTA Application Service</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
          世界の電子渡航認証を、<br className="hidden md:block" />
          オンラインで申請。
        </h1>
        <p className="text-gray-100 text-base md:text-lg mt-2 mb-8 max-w-2xl mx-auto">
          ESTA・K-ETA・UK ETA・ETAS。各国の電子渡航認証および短期滞在ビザの申請を、フォーム入力から決済までオンラインで完結。
        </p>
        <button
          onClick={scrollToCountries}
          className="inline-block bg-blue-700 hover:bg-blue-600 transition text-white font-semibold px-8 py-3 rounded-md text-base md:text-lg shadow-lg"
        >
          申請する国を選択 →
        </button>
        <p className="text-xs text-gray-300 mt-6">
          政府手数料＋当社サービス料金は申請プロセス内で明示されます
        </p>
      </div>
    </section>
  );
}
