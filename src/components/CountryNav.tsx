import Link from 'next/link';

const countries = [
  { href: '/australia', name: 'Australia', color: 'from-blue-600 to-blue-800' },
  { href: '/america', name: 'United States of America', color: 'from-red-600 to-red-800' },
  { href: '/south-korea', name: 'South Korea', color: 'from-green-600 to-green-800' },
  { href: '/united-kingdom', name: 'United Kingdom', color: 'from-purple-600 to-purple-800' },
];

export default function CountryNav() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">国別のビザ・電子渡航認証</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {countries.map((c) => (
            <Link key={c.href} href={c.href} className={`block bg-gradient-to-br ${c.color} text-white rounded-lg p-6 hover:opacity-90 transition`}>
              <h3 className="font-serif-country text-lg font-bold">{c.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
