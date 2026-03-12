import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CountryNav from '@/components/CountryNav';

export const metadata: Metadata = { title: 'United Kingdom' };

const faqItems = [
  { q: 'イギリスのETAはどのような制度ですか？', a: 'ETAは、ビザ免除対象国の渡航者がイギリスへ短期渡航する際に必要となる事前渡航認証制度です。搭乗前に取得しておく必要があります。' },
  { q: 'ETAが必要になるのはどのような渡航者ですか？', a: '観光や短期商用などの目的で、ビザ免除対象国のパスポートを所持している渡航者が対象となります。国籍によって要否が異なります。' },
  { q: 'ETAがあればビザは不要ですか？', a: '短期滞在かつETAの対象条件を満たす場合に限り、ビザの代わりとして利用できます。就労や留学、長期滞在にはビザが必要です。' },
  { q: 'イギリスのETAで入国できる滞在期間は決まっていますか？', a: 'ETA自体が滞在期間を保証するものではなく、実際の滞在可能期間は入国時に決定されます。短期滞在の範囲内での入国が前提です。' },
  { q: 'ETAを取得していれば、何度でも入国できますか？', a: 'ETAは一定期間有効で、条件を満たす場合は複数回の渡航に利用できることがあります。ただし、入国の可否は毎回審査されます。' },
  { q: 'ETAで許可される商用活動にはどのようなものがありますか？', a: '会議出席、商談、展示会参加など、報酬を伴わない短期の商用活動が対象です。業務としての就労は含まれません。' },
  { q: 'ETAでイギリス国内の学校に通うことはできますか？', a: 'できません。短期間であっても、就学や研修を目的とする場合は適切なビザを取得する必要があります。' },
  { q: 'ETA申請時に入力した内容を後から変更できますか？', a: '一部の軽微な情報を除き、パスポート情報など重要事項は変更できません。誤りがある場合は再申請が必要となります。' },
  { q: 'ETAが拒否された場合、再申請はできますか？', a: '状況によっては再申請が可能ですが、理由によってはビザ申請を案内される場合があります。拒否理由を確認することが重要です。' },
  { q: 'ETAやビザを持っていても入国できないことはありますか？', a: 'はい。ETAやビザは渡航前の許可であり、入国の最終判断は到着時にUK Home Officeおよび入国審査当局によって行われます。' },
];

export default function UnitedKingdomPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif-country text-3xl md:text-4xl font-bold mb-4">United Kingdom</h1>
          <p className="text-purple-200">イギリスのビザ・電子渡航認証（ETA）情報</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <p className="text-gray-700 leading-relaxed">
          イギリスへ渡航する際は、渡航者の国籍・渡航目的・滞在期間に応じて、事前にビザまたは電子渡航認証（ETA）の取得が必要です。観光や短期商用などの目的であっても、原則として事前手続きなしでの入国は認められていません。どの制度が適用されるかは個々の条件によって異なるため、渡航計画を立てる段階で必要な手続きを確認しておくことが重要です。
        </p>

        <Section title="ビザと電子渡航認証の比較">
          <p>イギリス渡航にあたり、ビザと電子渡航認証（ETA）のどちらが適しているかは主に以下の点で判断されます。</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>渡航目的が観光・短期商用か、就労・留学・長期滞在か</li>
            <li>予定している滞在期間</li>
            <li>渡航者の国籍がETA（ビザ免除制度）の対象であるか</li>
          </ul>
        </Section>

        <Section title="ビザ">
          <p>イギリスのビザは、就労、留学、家族滞在、長期滞在など、渡航目的に応じて複数の種類が用意されています。ビザの種類ごとに、申請条件、必要書類、審査期間、滞在可能期間は大きく異なります。</p>
        </Section>

        <Section title='電子渡航認証"ETA"'>
          <p>電子渡航認証（ETA：Electronic Travel Authorisation）は、観光や短期商用などの目的でイギリスへ短期間渡航する一部の国・地域の渡航者を対象とした事前渡航認証制度です。ETAはビザそのものではありませんが、ビザ免除で渡航する場合に必要となる制度として位置づけられています。</p>
        </Section>

        <Section title="ビザとは">
          <p>イギリスのビザには多くの種類があり、渡航目的や滞在条件によって求められる内容が異なります。以下では、代表的なビザについて概要を紹介します。</p>
          <div className="mt-4 space-y-4">
            <VisaType title="観光ビザ / Standard Visitor Visa" desc="観光、休暇、親族・知人の訪問、短期の治療、報酬を伴わない商用活動などを目的とする場合に利用されるビザです。滞在可能期間は原則として最長6か月とされています。" />
            <VisaType title="学生ビザ / Student Visa" desc="イギリスの大学、大学院、語学学校などの教育機関で正規に就学することを目的としたビザです。一定の条件を満たす場合に限り、制限付きで就労が認められることがあります。" />
            <VisaType title="就労ビザ / Skilled Worker Visa" desc="イギリスの雇用主のもとで、一定の技能や資格を要する職種に就労する場合に利用されるビザです。雇用主によるスポンサーシップが必要です。" />
            <VisaType title="家族ビザ / Family Visa" desc="イギリスに居住する配偶者、パートナー、親、子どもなどの家族と同居・生活することを目的としたビザです。厳格な条件が設けられています。" />
          </div>
        </Section>

        <Section title="ビザ利用に関する注意点">
          <p>イギリスのビザ制度は比較的細分化されており、同じ目的区分でも短期滞在用・長期滞在用・就労向けなど複数の分類が存在します。制度は随時変更されることがあるため、申請前には必ず最新の公式情報を確認する必要があります。なお、ETAまたはビザを取得している場合であっても、入国の最終判断は入国時にUK Home Officeおよび入国審査当局によって行われます。</p>
        </Section>

        <Section title='電子渡航認証"ETA"とは'>
          <p>電子渡航認証（ETA：Electronic Travel Authorisation）は、イギリスへ渡航するビザ免除対象国・地域の渡航者を対象とした事前渡航認証制度です。ETAはビザそのものではありませんが、観光や短期商用を目的とした短期滞在において、ビザの代わりに必要となる制度として位置づけられています。</p>
        </Section>

        <Section title="ETAで認められる滞在内容・認められない内容">
          <p>ETAで認められる主な渡航目的は、観光、休暇、知人・家族の訪問、短期の商用活動（会議出席、商談、展示会参加など、報酬を伴わないもの）です。</p>
          <p className="mt-3">一方で、以下に該当する活動はETAでは認められていません。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>イギリス国内での就労（有償・無償を問わない）</li>
            <li>長期の就学・留学</li>
            <li>インターンシップや研修（就労とみなされるもの）</li>
            <li>芸能活動・スポーツ活動で報酬が発生するもの</li>
            <li>永住や長期滞在を目的とした渡航</li>
            <li>医療目的での長期滞在</li>
          </ul>
        </Section>

        <Section title="ETAの申請方法・有効性・注意点">
          <p>ETAの申請は、イギリス政府が提供する公式ウェブサイトまたは公式アプリから行います。ETAは一定期間有効とされ、その期間内で複数回の短期渡航が可能ですが、1回あたりの滞在可能期間は原則として短期滞在の範囲内に限られます。</p>
          <p className="mt-4">なお、ETAを取得していてもイギリスへの入国が保証されるわけではなく、入国の最終判断は到着時に入国審査当局によって行われます。</p>
        </Section>
      </article>

      <div className="max-w-4xl mx-auto px-4">
        <FAQ items={faqItems} title="ビザ・電子渡航認証に関するよくある質問" />
      </div>

      <CountryNav />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function VisaType({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="pl-4 border-l-2 border-gray-300">
      <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
