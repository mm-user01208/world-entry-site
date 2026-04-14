import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CountryNav from '@/components/CountryNav';

export const metadata: Metadata = {
  title: 'Australia | Global Travel Center',
  description: 'オーストラリアのビザ・電子渡航認証（ETA）情報',
};

const basePath = '';

const faqItems = [
  { q: 'ETAはビザですか？', a: 'はい。ETA（Electronic Travel Authority / Subclass 601）は、観光や短期商用を目的とした短期滞在用のビザです。一般に電子渡航認証と呼ばれることもありますが、オーストラリアではビザとして扱われています。' },
  { q: '観光ビザ（Visitor visa）はどのような場合に必要ですか？', a: 'ETAの対象国籍でない方や、より長期間の滞在を希望する場合は観光ビザ（Visitor visa / Subclass 600）が必要です。滞在目的や条件に応じて適切なビザを選択する必要があります。' },
  { q: '観光目的でも就労することはできますか？', a: 'いいえ。観光ビザやETAでは原則として就労は認められていません。オーストラリアで働く場合は、就労可能なビザ（就労ビザやワーキングホリデービザなど）を取得する必要があります。' },
  { q: '学生ビザでは働くことができますか？', a: 'はい。学生ビザでは、学期中は就労時間に制限がありますが、一定の条件のもとでアルバイトが認められています。具体的な労働時間の上限は政府の規定に従う必要があります。' },
  { q: '家族をオーストラリアに呼ぶことはできますか？', a: 'ビザの種類によっては家族を同行させたり、後から呼び寄せたりすることが可能です。家族向けのビザや扶養家族としての申請など、目的に応じた手続きが必要になります。事前に条件を確認することが重要です。' },
  { q: 'ワーキングホリデービザと就労ビザの違いは何ですか？', a: 'ワーキングホリデービザは若年層向けの制度で、旅行を主目的としながら一定期間働くことが認められています。一方、就労ビザは特定の職種や雇用主のもとで働くことを目的としたビザです。' },
  { q: 'ビザの有効期間と滞在可能期間は同じですか？', a: 'いいえ。ビザの有効期間は入国できる期間を示し、滞在可能期間は1回の入国で滞在できる日数を示します。ビザごとに条件が異なるため、必ず確認が必要です。' },
  { q: 'ビザを取得していれば必ず入国できますか？', a: 'いいえ。ビザを取得していても、最終的な入国の可否は到着時の入国審査官の判断によります。ビザは入国を保証するものではありません。' },
  { q: '複数の目的がある場合、どのビザを選べばよいですか？', a: '主な渡航目的に基づいてビザを選択する必要があります。観光、就労、留学など目的ごとに適したビザが異なるため、条件に合ったものを申請することが重要です。' },
  { q: 'ビザの条件に違反するとどうなりますか？', a: 'ビザ条件に違反した場合、滞在資格の取り消しや将来のビザ申請への影響が生じる可能性があります。滞在期間や活動内容は必ず許可された範囲内で行う必要があります。' },
];

export default function AustraliaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={`${basePath}/images/hero-1.jpg`} alt="Sydney" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif-country text-4xl md:text-6xl font-bold tracking-wider">AUSTRALIA</h1>
          <p className="mt-3 text-gray-200 text-sm md:text-base">オーストラリアのビザ・電子渡航認証（ETA）情報</p>
        </div>
      </section>

      {/* Intro */}
      <article className="max-w-4xl mx-auto px-4 py-14">
        <p className="text-gray-700 leading-relaxed text-[15px]">
          オーストラリアへ渡航する際は、渡航者の国籍、渡航目的、滞在期間に応じて、事前にビザの取得が必要です。観光や短期商用などの目的で渡航する場合でも、事前手続きなしでの入国は認められていません。必要となる制度は個々の条件によって異なるため、渡航計画を立てる段階で、どの手続きが求められるかを確認することが重要です。
        </p>
      </article>

      {/* オーストラリアのビザとは */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">オーストラリアのビザとは</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアのビザは、滞在中に認められる活動内容や条件を明確に定めるための制度であり、渡航者は取得したビザの範囲内でのみ滞在・活動することが求められます。ビザごとに、就労の可否、就学の可否、滞在可能日数、入国回数などが細かく設定されており、これらの条件を超えた行為は認められていません。</p>
            <p>オーストラリアのビザは、観光や短期商用を目的とした短期滞在向けのものから、就労、留学、家族との同居や長期滞在を目的としたものまで、目的別に多くの種類が存在します。短期間の滞在であっても、内容によっては就労や報酬を伴う活動が制限される場合があり、ビザの種類によって許可される範囲は大きく異なります。</p>
            <p>また、近年は手続きの簡素化が進み、オンラインや公式アプリを通じて申請・発給されるビザも増えています。これらは一般的に電子的に管理され、紙のビザが発行されないケースが多く、パスポート情報と紐づけて管理されます。一方で、滞在期間が長期に及ぶ場合や、特定の条件が求められるビザでは、追加書類の提出や詳細な審査が行われます。</p>
            <p>このように、オーストラリアのビザは「滞在中に何ができるか」を定める重要な要素であり、制度の違いを理解したうえで、自身の渡航目的に合ったビザを選択することが大切です。</p>
          </div>
          <div className="mt-6 p-5 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-gray-700">
            <p className="font-bold mb-2">注意事項</p>
            <p>オーストラリアのビザ（特に就労ビザおよび家族・長期滞在向けビザ）は、制度や要件、運用ルールが頻繁に変更される傾向があります。本ページでは、制度の概要や一般的な考え方について情報提供を目的として掲載しており、最新の要件や個別ケースへの適用を保証するものではありません。</p>
            <p className="mt-2">最新情報はオーストラリア政府の<a href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">公式ウェブサイト</a>をご確認ください。</p>
            <p className="mt-2">ご自身の状況に応じた判断については、本サイト監修者であるオーストラリア政府の登録移民エージェントKotaro Mizoguchiの公式サイトより直接ご相談ください。</p>
          </div>
        </div>
      </section>

      {/* 短期滞在向けビザ */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">短期滞在向けビザ（観光・商用）</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />

          <h3 className="text-lg font-bold text-gray-800 mb-3">電子的に申請できる短期ビザ</h3>
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアでは、観光や短期商用を目的とする一部の渡航者に対し、オンラインや公式アプリを通じて申請・発給される短期滞在向けビザが用意されています。代表的なものとして ETA（Electronic Travel Authority / Subclass 601） と eVisitor（Subclass 651） があります。いずれも紙のビザは発行されず、承認後はパスポート情報と電子的に紐づけて管理されます。</p>
            <p>ETAは、主に日本を含む対象国・地域の渡航者が利用でき、観光や短期の非就労商用活動を目的とした滞在が認められています。一方、eVisitorは主に欧州の一部の国籍を対象とした短期滞在用ビザで、ETAと同様に観光や短期商用を目的とした利用が可能です。申請方法や対象国籍は異なりますが、いずれも短期滞在を前提としており、就労や長期滞在を目的とした利用は認められていません。</p>
            <p>これらの電子的に申請できる短期ビザは、渡航目的や国籍に応じて選択する必要があり、自身の条件に適したビザを確認したうえで申請することが重要です。</p>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mt-10 mb-3">観光ビザ（Visitor visa / Subclass 600）</h3>
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>観光ビザ（Visitor visa / Subclass 600）は、観光、知人・家族訪問、短期の非就労活動などを目的として利用される短期滞在向けビザです。電子的に申請可能な短期ビザの対象外となる国籍の方や、より長い滞在期間を希望する場合に選択されることがあります。滞在可能期間や入国回数は申請内容や審査結果によって異なり、ETAと比べて審査に時間を要する場合があります。また、このビザでも原則として就労は認められておらず、滞在条件を超えた活動は制限されます。渡航条件に応じて、ETAとの違いを理解したうえで選択することが重要です。</p>
          </div>
        </div>
      </section>

      {/* ETA */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ETA（Electronic Travel Authority / Subclass 601）</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアの ETAは、観光や短期商用を目的とする渡航者向けに設けられた短期滞在用のビザです。一般的に「電子渡航認証」と呼ばれることもありますが、制度上はビザの一種として位置づけられており、入国や滞在の条件が明確に定められています。ETAは、オーストラリア政府が提供する公式アプリを通じて申請・発給され、承認後はパスポート情報と電子的に紐づけられます。紙のビザは発行されず、渡航時に別途書類を携帯する必要はありません。主に観光、知人・家族訪問、短期の商用活動が認められますが、就労や長期滞在、留学を目的とした利用は認められていません。また、ETAには有効期間や1回あたりの滞在可能日数が設定されており、条件を超えた滞在や活動はビザ違反となる可能性があります。申請手続きが比較的簡素である一方、対象となる国籍や利用条件が限定されているため、自身の渡航目的や状況に適しているかを事前に確認することが重要です。</p>
          </div>
        </div>
      </section>

      {/* 学生ビザ */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">学生ビザ（Student visa）</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアの学生ビザ（Student visa）は、大学や専門学校、語学学校など、政府に認可された教育機関で就学することを目的としたビザです。主な目的は学業であり、就労や長期滞在を主目的とするビザとは制度上明確に区別されています。</p>
            <p>学生ビザでは、在学期間中の滞在が認められるほか、一定の条件下で就労が許可される場合があります。ただし、就労時間や内容には制限が設けられており、学業に支障が出ない範囲でのみ認められる点に注意が必要です。また、ビザの有効期間は在籍するコースの期間に連動しており、修了後は原則として別のビザへの切り替えが必要となります。</p>
            <p>このビザは「学ぶこと」を前提とした制度であるため、観光や短期商用、就労を主目的とする渡航には適していません。進学や留学を検討する場合は、入学予定の教育機関や就学期間に応じて、学生ビザの条件を正しく理解したうえで準備を進めることが重要です。</p>
          </div>
        </div>
      </section>

      {/* 就労・家族支援タイプ */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">就労・家族支援タイプの長期ビザ</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアには、一定期間以上の滞在や、将来的な永住を視野に入れた中長期滞在向けのビザが複数用意されています。これらのビザは、単純に「就労」「家族」といった区分だけで整理されているわけではなく、滞在の目的や背景、申請者の立場によって制度が設計されています。</p>
            <p>たとえば、雇用主の支援を受けて就労を行うことを前提としたビザの中には、一定の条件を満たすことで永住権につながるものも存在します。また、家族との同居や扶養関係を理由として申請されるビザであっても、滞在期間が長期に及び、結果として永住を目的とするケースもあります。このように、中長期滞在向けのビザは「一時的な滞在」と「永住」を明確に切り分けるのではなく、段階的な制度として位置づけられている点が特徴です。</p>
            <p>そのため、これらのビザを検討する際には、現在の滞在目的だけでなく、将来的な居住計画や就労形態、家族構成なども踏まえたうえで、制度全体を理解することが重要です。</p>
          </div>
        </div>
      </section>

      {/* ビザ利用時の注意点 */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ビザ利用時の注意点</h2>
          <div className="w-16 h-[2px] bg-red-700 mb-8" />
          <div className="text-gray-700 leading-relaxed text-[15px] space-y-4">
            <p>オーストラリアのビザを取得していても、入国が保証されるわけではありません。最終的な入国の可否は、到着時に行われる入国審査において、入国審査官の判断に委ねられます。ビザはあくまで「滞在や活動を行う資格」を示すものであり、入国審査時には渡航目的や滞在計画について確認される場合があります。</p>
            <p>また、取得したビザには、認められる滞在期間や活動内容が明確に定められており、その条件を超えた行為は認められていません。たとえば、就労が許可されていないビザで働くことや、滞在期間を超えて滞在することは、ビザ条件違反となる可能性があります。トラブルを避けるためにも、渡航前にビザの条件を十分に理解し、遵守することが重要です。</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4">
          <FAQ items={faqItems} title="ビザ・ETAに関するよくある質問" />
        </div>
      </section>

      <CountryNav />
    </>
  );
}
