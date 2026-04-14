import Link from 'next/link';
import CountryNav from '@/components/CountryNav';
import HeroSlider from '@/components/HeroSlider';

const basePath = '';

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* OMARA Badge */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-14 h-14 bg-green-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shrink-0">&#10003;</div>
          <div className="text-center md:text-left">
            <p className="text-green-800 font-bold text-base">OMARA登録移民エージェント監修</p>
            <p className="text-gray-700 text-sm mt-1">本サイトは、OMARA登録移民エージェント <strong>Kotaro Mizoguchi</strong>（Registration No. <strong>1465274</strong>）の監修のもと運営されています。</p>
            <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=ea2695e4-fc73-e311-9402-005056ab0eca" target="_blank" rel="noopener noreferrer" className="text-green-700 text-sm hover:underline mt-1 inline-block">OMARA公式登録情報を確認 →</a>
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">国別のビザ申請サポート・電子渡航認証</h2>
          <p className="text-gray-500 text-center mb-10 text-sm">各国のビザ申請サポートおよび電子渡航認証の要件についてご確認ください。</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Australia', href: '#australia', img: `${basePath}/images/australia-card.jpg` },
              { name: 'United States of America', href: '#america', img: `${basePath}/images/usa-card.jpg` },
              { name: 'South Korea', href: '#korea', img: `${basePath}/images/korea-card.jpg` },
              { name: 'United Kingdom', href: '#united-kingdom', img: `${basePath}/images/uk-card.jpg` },
            ].map((c) => (
              <a key={c.href} href={c.href} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-serif-country text-lg font-bold text-gray-800">{c.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">ビザ申請サポートサービス</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <p className="text-gray-700 leading-relaxed text-[15px]">
            Global Travel Centerでは、OMARA登録移民エージェントの監修のもと、各国のビザ申請に関するサポートを提供しています。渡航目的や滞在期間に応じた適切なビザの選択から、申請手続きに関するご相談までお手伝いいたします。
          </p>
          <p className="text-gray-700 leading-relaxed mt-4 text-[15px]">
            また、観光や短期商用などを目的とする短期渡航者向けの電子渡航認証（ESTA・K-ETA・UK ETA等）に関する情報も提供しています。必要となる制度は、渡航先の国や渡航者の国籍、渡航目的などによって異なるため、事前に正確な情報を確認することが重要です。
          </p>
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-sm text-gray-600">
              ビザの代理申請やご相談は、OMARA登録移民エージェント Kotaro Mizoguchi（Registration No. 1465274）が承ります。
            </p>
            <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=ea2695e4-fc73-e311-9402-005056ab0eca" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-green-700 text-sm font-medium hover:underline">エージェント登録情報を確認する →</a>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            当サイトは政府機関のウェブサイトではありません。電子渡航認証やビザは、各国政府の公式サイトから直接申請することも可能です。
          </p>
        </div>
      </section>

      {/* チェックポイント */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">渡航前のチェックポイント</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <p className="text-gray-700 leading-relaxed mb-8 text-[15px]">
            渡航前には、航空券や宿泊先の手配だけでなく、入国要件を事前に確認しておくことが重要です。国や地域によっては、出発前に電子渡航認証やビザの取得が必要となり、条件を満たしていない場合は搭乗や入国を拒否されることもあります。また、入国制度や必要書類は予告なく変更されることがあるため、直前の情報確認も欠かせません。安心して出発するためにも、以下のポイントを一つずつ確認し、余裕をもって準備を進めましょう。
          </p>
          <ul className="space-y-4">
            {['パスポートの有効期限', '渡航目的（観光・短期商用など）', '電子渡航認証やビザの要否', '最新の入国条件・制度変更'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-700 text-[15px]">
                <span className="w-2 h-2 bg-gray-800 rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Per-country sections with images - alternating layout */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto space-y-0">
          {/* Australia - image left */}
          <div id="australia" className="scroll-mt-20 grid md:grid-cols-2 gap-0">
            <div className="h-64 md:h-auto min-h-[300px]">
              <img src={`${basePath}/images/australia-section.jpg`} alt="Australia" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif-country text-2xl md:text-3xl font-bold text-gray-800 mb-4">Australia</h2>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                オーストラリアへ渡航する際には、渡航者の国籍、渡航目的、滞在期間に応じて、ビザの取得が必要です。観光や短期商用など、比較的短期間の滞在を目的とする一部の国・地域の渡航者については、Subclass 601 ETA（Electronic Travel Authority）を利用できる場合があります。ETAは、オーストラリア政府が提供する公式アプリを通じてのみ申請が可能であり、ウェブサイトから申請することはできません。承認されたETAは、渡航者のパスポート情報と電子的に紐づけられます。
              </p>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-0">
                一方、就労、留学、長期滞在を目的とする場合や、ETAの対象外となる国籍の渡航者は、渡航目的に応じた別のビザを取得する必要があります。
              </p>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-0">
                ビザの種類によって申請条件、必要書類、審査期間は異なるため、渡航計画に合わせて事前に制度内容を確認することが重要です。なお、入国の可否や条件の最終的な判断は、オーストラリア政府当局によって行われます。
              </p>
              <div className="mt-6"><Link href="/australia" className="inline-block bg-green-700 text-white px-6 py-2.5 rounded text-sm hover:bg-green-600 transition w-fit">詳しく見る</Link></div>
            </div>
          </div>

          {/* USA - image right */}
          <div id="america" className="scroll-mt-20 grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-serif-country text-2xl md:text-3xl font-bold text-gray-800 mb-4">United States of America</h2>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                アメリカへ渡航する場合、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（ESTA）の取得が必要となります。観光や短期商用を目的とする一部の国・地域の渡航者は、ビザ免除プログラムに基づきESTAを取得することで渡航できる場合があります。ESTAはオンラインで申請する事前渡航認証制度であり、承認後はパスポート情報と電子的に紐づけられます。一方、就労や留学、長期滞在などの場合や、ESTAの対象外となる国籍の渡航者は、目的に応じたビザを取得する必要があります。ビザの種類によって申請条件や審査期間が異なるため、余裕をもって準備を進めることが重要です。なお、入国可否の最終判断は、アメリカ政府当局によって行われます。
              </p>
              <Link href="/america" className="inline-block bg-blue-900 text-white px-6 py-2.5 rounded text-sm hover:bg-blue-800 transition w-fit">詳しく見る</Link>
            </div>
            <div className="h-64 md:h-auto min-h-[300px] order-1 md:order-2">
              <img src={`${basePath}/images/usa-section.jpg`} alt="United States" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* South Korea - image left */}
          <div id="korea" className="scroll-mt-20 grid md:grid-cols-2 gap-0">
            <div className="h-64 md:h-auto min-h-[300px]">
              <img src={`${basePath}/images/korea-section.jpg`} alt="South Korea" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-serif-country text-2xl md:text-3xl font-bold text-gray-800 mb-4">South Korea</h2>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                韓国へ渡航する際は、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（K-ETA）の取得が必要となる場合があります。観光や短期商用などを目的とする一部の国・地域の渡航者は、K-ETA（韓国電子渡航認証）を利用できる制度が設けられています。K-ETAはオンラインで申請する事前渡航認証制度であり、承認されると渡航前の手続きが簡略化されます。一方、就労、留学、長期滞在などを目的とする場合や、K-ETAの対象外となる国籍の渡航者は、目的に応じたビザの取得が必要です。制度の内容や要件は変更されることがあるため、渡航前に最新の入国条件を確認することが重要です。なお、最終的な入国の可否は韓国政府当局によって判断されます。
              </p>
              <Link href="/south-korea" className="inline-block bg-red-700 text-white px-6 py-2.5 rounded text-sm hover:bg-red-600 transition w-fit">詳しく見る</Link>
            </div>
          </div>

          {/* UK - image right */}
          <div id="united-kingdom" className="scroll-mt-20 grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-serif-country text-2xl md:text-3xl font-bold text-gray-800 mb-4">United Kingdom</h2>
              <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
                イギリスへ渡航する際は、渡航者の国籍や渡航目的、滞在期間に応じて、ビザまたは電子渡航認証（ETA）の取得が必要となる場合があります。観光や短期商用などを目的とする一部の国・地域の渡航者は、ETA（電子渡航認証）の対象となります。ETAはオンラインで申請する制度で、承認後は渡航前の事前確認として利用されます。一方、就労や留学、長期滞在を目的とする場合や、ETAの対象外となる国籍の渡航者は、該当するビザの取得が必要です。制度の内容や要件は随時変更される可能性があるため、渡航前に最新情報を確認することが重要です。なお、入国の最終判断はイギリス政府当局によって行われます。
              </p>
              <Link href="/united-kingdom" className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded text-sm hover:bg-blue-500 transition w-fit">詳しく見る</Link>
            </div>
            <div className="h-64 md:h-auto min-h-[300px] order-1 md:order-2">
              <img src={`${basePath}/images/uk-section.jpg`} alt="United Kingdom" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Country Nav */}
      <CountryNav />
    </>
  );
}
