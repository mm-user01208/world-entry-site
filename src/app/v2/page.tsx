import Link from 'next/link';
import HeroSliderV2 from '@/components/HeroSliderV2';

const basePath = '';

export const metadata = {
  title: 'Global Travel Center | ESTA・K-ETA・UK ETA オンライン申請サービス',
  description: '米国ESTA、韓国K-ETA、英国ETA、豪州ETAS等の電子渡航認証および短期滞在ビザのオンライン申請サービス。OMARA登録移民エージェント監修。政府機関のウェブサイトではありません。',
};

export default function HomeV2() {
  const countries = [
    {
      code: 'us',
      flag: '🇺🇸',
      name: 'United States',
      jp: 'アメリカ合衆国',
      doc: 'ESTA',
      desc: '米国電子渡航認証',
      href: '/america/esta',
      color: 'bg-blue-900 hover:bg-blue-800',
    },
    {
      code: 'kr',
      flag: '🇰🇷',
      name: 'South Korea',
      jp: '大韓民国',
      doc: 'K-ETA',
      desc: '韓国電子渡航認証',
      href: '/south-korea',
      color: 'bg-red-700 hover:bg-red-600',
    },
    {
      code: 'gb',
      flag: '🇬🇧',
      name: 'United Kingdom',
      jp: 'イギリス',
      doc: 'UK ETA',
      desc: '英国電子渡航認証',
      href: '/united-kingdom',
      color: 'bg-blue-700 hover:bg-blue-600',
    },
    {
      code: 'au',
      flag: '🇦🇺',
      name: 'Australia',
      jp: 'オーストラリア',
      doc: 'Subclass 601 ETA',
      desc: '豪州電子渡航認証',
      href: '/australia',
      color: 'bg-green-700 hover:bg-green-600',
    },
  ];

  return (
    <>
      {/* Top disclaimer banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center text-amber-900 text-xs md:text-sm">
          <strong>Global Travel Center</strong> は政府機関のウェブサイトではありません。民間企業として電子渡航認証およびビザの申請サポートを提供しています。
        </div>
      </div>

      <HeroSliderV2 />

      {/* OMARA Trust Badge - simplified */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0">&#10003;</div>
            <div className="text-sm md:text-base text-gray-800">
              <span className="font-bold">OMARA登録移民エージェント監修</span>
              <span className="text-gray-500 ml-2 text-xs">No. 1465274</span>
            </div>
          </div>
          <a
            href="https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=ea2695e4-fc73-e311-9402-005056ab0eca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 text-xs md:text-sm hover:underline"
          >
            公式登録情報を確認 →
          </a>
        </div>
      </section>

      {/* Country selection - APPLY CTA */}
      <section id="apply-countries" className="py-16 bg-gray-50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">申請する国を選択</h2>
          <p className="text-gray-600 text-center mb-10 text-sm md:text-base">
            渡航先の国を選択し、オンラインで電子渡航認証を申請できます。
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <Link
                key={c.code}
                href={c.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block"
              >
                <div className="h-40 overflow-hidden bg-gray-200">
                  <img
                    src={`${basePath}/images/${c.code === 'us' ? 'usa' : c.code === 'kr' ? 'korea' : c.code === 'gb' ? 'uk' : 'australia'}-card.jpg`}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="font-serif-country text-base font-bold text-gray-800">{c.name}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{c.jp} ・ {c.desc}</p>
                  <div className={`${c.color} text-white text-center font-semibold py-2 rounded text-sm transition`}>
                    {c.doc}を申請する →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works - 4 step process */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">申請の流れ</h2>
          <p className="text-gray-600 text-center mb-12 text-sm md:text-base">
            最短数分でオンライン申請が完了します
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: '国を選択', desc: '渡航先の電子渡航認証を選択' },
              { num: '2', title: 'フォーム入力', desc: 'パスポート情報・渡航目的等を入力' },
              { num: '3', title: 'お支払い', desc: '政府手数料＋当社サービス料金を決済' },
              { num: '4', title: '結果通知', desc: 'メールで申請結果を受領（通常24時間以内）' },
            ].map((s) => (
              <div key={s.num} className="text-center">
                <div className="w-14 h-14 mx-auto bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {s.num}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us / Trust */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">当社申請サービスの特徴</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">料金の透明性</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                政府手数料と当社サービス料金を申請プロセス内で明示。お支払い前に総額を確認できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">24時間サポート</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                申請内容の確認・修正サポートを24時間365日提供。緊急の渡航にも対応します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">OMARA登録監修</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                オーストラリア政府公認のOMARA登録移民エージェント（No. 1465274）の監修のもと運営しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Refund disclosure */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-800 mb-3 text-lg">料金・返金ポリシーについて</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2"><span className="text-blue-700">▸</span><span>当社申請ページでは、政府手数料と当社サービス料金を **分けて表示** します。</span></li>
              <li className="flex gap-2"><span className="text-blue-700">▸</span><span>政府機関のウェブサイトから直接申請することも可能です（料金は政府手数料のみ）。</span></li>
              <li className="flex gap-2"><span className="text-blue-700">▸</span><span>申請が政府により拒否された場合のサービス料金返金については、<Link href="/legal-information" className="text-blue-700 hover:underline">利用規約</Link>をご確認ください。</span></li>
              <li className="flex gap-2"><span className="text-blue-700">▸</span><span>キャンセル・修正依頼は <Link href="/legal-information" className="text-blue-700 hover:underline">サポート窓口</Link>までご連絡ください。</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final disclaimer block */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-gray-900">Global Travel Center は政府機関のウェブサイトではありません。</strong><br />
            当社は民間企業として、米国DHS（ESTA）、韓国法務部（K-ETA）、英国Home Office（UK ETA）、豪州内務省（ETAS）の各政府機関への申請を代行するサービスを提供しています。<br />
            電子渡航認証は、各国政府の公式サイトから直接申請することも可能です。<br />
            運営会社: M2Agency Inc.（東京都目黒区中目黒4-8-25）
          </p>
        </div>
      </section>
    </>
  );
}
