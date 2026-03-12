import Link from 'next/link';
import CountryNav from '@/components/CountryNav';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ビザ・電子渡航認証（ETA・ESTA等）総合案内</h1>
          <p className="text-gray-300 text-lg">オーストラリア・アメリカ・韓国・イギリスの渡航要件を分かりやすく紹介</p>
        </div>
      </section>

      {/* Country Nav */}
      <CountryNav />

      {/* ビザと電子渡航認証の違い */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ビザと電子渡航認証の違いとは</h2>
          <p className="text-gray-700 leading-relaxed">
            ビザと電子渡航認証はいずれも入国に関する制度ですが、その目的や取得方法が異なります。
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            ビザは、滞在期間や渡航目的（観光、商用、就労など）に応じて取得が求められる入国許可であり、事前審査に一定の時間を要します。一方、電子渡航認証は、観光や短期商用などを目的とする短期渡航者を対象とした制度で、オンライン上で申請できる点が特徴です。必要となる制度は、渡航先の国や渡航者の国籍、渡航目的などによって異なるため、事前に正確な情報を確認することが重要です。
          </p>
        </div>
      </section>

      {/* チェックポイント */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">渡航前のチェックポイント</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            渡航前には、航空券や宿泊先の手配だけでなく、入国要件を事前に確認しておくことが重要です。国や地域によっては、出発前に電子渡航認証やビザの取得が必要となり、条件を満たしていない場合は搭乗や入国を拒否されることもあります。また、入国制度や必要書類は予告なく変更されることがあるため、直前の情報確認も欠かせません。安心して出発するためにも、以下のポイントを一つずつ確認し、余裕をもって準備を進めましょう。
          </p>
          <ul className="space-y-3">
            {['パスポートの有効期限', '渡航目的（観光・短期商用など）', '電子渡航認証やビザの要否', '最新の入国条件・制度変更'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700">
                <span className="w-2 h-2 bg-gray-800 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Per-country sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          <CountrySection
            name="Australia"
            href="/australia"
            text="オーストラリアへ渡航する際には、渡航者の国籍、渡航目的、滞在期間に応じて、ビザの取得が必要です。観光や短期商用など、比較的短期間の滞在を目的とする一部の国・地域の渡航者については、Subclass 601 ETA（Electronic Travel Authority）を利用できる場合があります。"
          />
          <CountrySection
            name="United States of America"
            href="/america"
            text="アメリカへ渡航する場合、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（ESTA）の取得が必要となります。観光や短期商用を目的とする一部の国・地域の渡航者は、ビザ免除プログラムに基づきESTAを取得することで渡航できる場合があります。"
          />
          <CountrySection
            name="South Korea"
            href="/south-korea"
            text="韓国へ渡航する際は、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（K-ETA）の取得が必要となる場合があります。観光や短期商用などを目的とする一部の国・地域の渡航者は、K-ETA（韓国電子渡航認証）を利用できる制度が設けられています。"
          />
          <CountrySection
            name="United Kingdom"
            href="/united-kingdom"
            text="イギリスへ渡航する際は、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（ETA）の取得が必要となる場合があります。観光や短期商用などを目的とする一部の国・地域の渡航者は、ETA（電子渡航認証）の対象となります。"
          />
        </div>
      </section>
    </>
  );
}

function CountrySection({ name, href, text }: { name: string; href: string; text: string }) {
  return (
    <div className="border-l-4 border-gray-800 pl-6">
      <h3 className="font-serif-country text-xl font-bold text-gray-800 mb-3">{name}</h3>
      <p className="text-gray-700 leading-relaxed mb-3">{text}</p>
      <Link href={href} className="text-blue-600 hover:underline text-sm font-medium">会社情報 →</Link>
    </div>
  );
}
