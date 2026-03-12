import Link from 'next/link';

const basePath = '/world-entry-site';

const countries = [
  { name: 'Australia', href: '/australia', img: `${basePath}/images/australia-card.jpg` },
  { name: 'United States of America', href: '/america', img: `${basePath}/images/usa-card.jpg` },
  { name: 'South Korea', href: '/south-korea', img: `${basePath}/images/korea-card.jpg` },
  { name: 'United Kingdom', href: '/united-kingdom', img: `${basePath}/images/uk-card.jpg` },
];

export default function CountryNav() {
  return (
    <section className="bg-gray-50" style={{paddingTop:"100px",paddingBottom:"100px"}}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">国別のビザ・電子渡航認証</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((c) => (
            <Link key={c.href} href={c.href} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white">
              <div className="h-40 overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-serif-country text-base font-bold text-gray-800">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
