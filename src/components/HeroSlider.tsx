'use client';
import { useState, useEffect } from 'react';

const basePath = '/world-entry-site';

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

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    // Slow pan effect within each slide
    const panInterval = setInterval(() => {
      setOffsetX((prev) => prev - 0.3);
    }, 50);

    // Switch slides every 6 seconds
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setOffsetX(0);
    }, 6000);

    return () => {
      clearInterval(panInterval);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section className="relative min-h-[420px] md:min-h-[480px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          ビザ・電子渡航認証<br className="hidden md:block" />
          （ETA・ESTA等）総合案内
        </h1>
        <p className="text-gray-200 text-base md:text-lg mt-4">
          オーストラリア・アメリカ・韓国・イギリスの渡航要件を分かりやすく紹介
        </p>
      </div>
    </section>
  );
}
