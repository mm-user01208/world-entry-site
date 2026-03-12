import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CountryNav from '@/components/CountryNav';

export const metadata: Metadata = { title: 'South Korea' };

const faqItems = [
  { q: 'K-ETAとは何ですか？', a: 'K-ETAは、ビザ免除対象国の渡航者が、観光や短期商用目的で韓国へ渡航する際に必要となる事前渡航認証制度です。' },
  { q: 'K-ETAとビザの違いは何ですか？', a: 'K-ETAは短期滞在向けの渡航認証で、就労や留学、長期滞在はできません。これらの目的ではビザが必要です。' },
  { q: 'K-ETAがあれば必ず入国できますか？', a: 'いいえ。K-ETAは渡航前の認証であり、入国の最終判断は到着時に入国審査当局が行います。' },
  { q: 'K-ETAで認められる滞在期間はどのくらいですか？', a: '1回の渡航につき、原則として90日以内の短期滞在が認められます。' },
  { q: 'K-ETAで仕事やアルバイトはできますか？', a: 'できません。有償・無償を問わず、韓国国内での就労はK-ETAでは認められていません。' },
  { q: 'K-ETAの有効期間はどのくらいですか？', a: '通常、K-ETAは最長3年間有効とされ、その期間内で複数回の渡航が可能です。' },
  { q: 'K-ETAは何歳から申請が必要ですか？', a: '年齢にかかわらず、原則としてすべての渡航者がK-ETAの対象となります。未成年者の場合も、個別に申請が必要です。' },
  { q: '家族やグループでまとめてK-ETAを申請できますか？', a: 'いいえ。K-ETAは1人ずつ個別に申請する必要があります。家族旅行や団体旅行であっても、申請は個人単位で行います。' },
  { q: 'パスポートを更新した場合、K-ETAはそのまま使えますか？', a: 'いいえ。K-ETAはパスポート情報と紐づけられているため、パスポートを更新した場合は再度K-ETAの申請が必要です。' },
  { q: 'K-ETAで入国した後、韓国国内で滞在資格を変更できますか？', a: '原則としてできません。K-ETAは短期滞在を前提とした制度であり、就労や留学などへの資格変更は認められていないため、必要な場合は出国後に適切なビザを申請する必要があります。' },
];

export default function SouthKoreaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif-country text-3xl md:text-4xl font-bold mb-4">South Korea</h1>
          <p className="text-green-200">韓国のビザ・電子渡航認証（K-ETA）情報</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <p className="text-gray-700 leading-relaxed">
          韓国へ渡航する際は、渡航者の国籍、渡航目的、滞在期間に応じて、事前にビザまたは電子渡航認証（K-ETA）の取得が必要です。観光や短期商用などの目的で渡航する場合であっても、原則として事前手続きなしでの入国は認められていません。必要な制度は個々の条件によって異なるため、渡航計画を立てる段階で、どの手続きが求められるかを確認することが重要です。
        </p>

        <Section title="ビザと電子渡航認証の比較">
          <p>韓国渡航にあたり、ビザと電子渡航認証（K-ETA）のどちらが適しているかは、主に以下の点で判断されます。</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>渡航目的が観光・短期商用か、就労・留学・長期滞在か</li>
            <li>予定している滞在期間</li>
            <li>渡航者の国籍がK-ETA（ビザ免除）の対象であるか</li>
          </ul>
        </Section>

        <Section title="ビザ">
          <p>韓国のビザは、就労、留学、家族滞在、長期滞在など、渡航目的に応じて複数の種類が用意されています。ビザの種類によって、申請条件、必要書類、審査期間、滞在可能期間は大きく異なります。</p>
        </Section>

        <Section title='電子渡航認証"K-ETA"'>
          <p>電子渡航認証（K-ETA）は、観光や短期商用などの目的で韓国へ短期間渡航する一部の国・地域の渡航者を対象とした制度です。K-ETAは事前渡航認証であり、承認されるとパスポート情報と電子的に紐づけられます。K-ETAは韓国政府が提供する公式ウェブサイトを通じて申請します。</p>
        </Section>

        <Section title="ビザとは">
          <p>韓国のビザには多くの種類があり、渡航目的や滞在条件によって求められる内容が異なります。以下では、代表的なビザについて概要を紹介します。</p>
          <div className="mt-4 space-y-4">
            <VisaType title="観光ビザ / Tourist Visa（C-3）" desc="観光、休暇、親族・知人の訪問、短期の非就労活動などを目的とする場合に利用されるビザです。滞在可能期間は最長90日程度が一般的で、原則として就労は認められていません。" />
            <VisaType title="留学ビザ / Student Visa（D-2）" desc="韓国の大学や大学院などの教育機関で正規に就学することを目的としたビザです。一定の条件を満たす場合には、制限付きで就労が認められることがあります。" />
            <VisaType title="商用ビザ / Business Visa（C-2）" desc="商談、会議出席、市場調査、取引先訪問など、報酬を伴わない短期の商用活動を目的とする場合に利用されるビザです。" />
            <VisaType title="就労ビザ / Work Visa（E-7）" desc="専門的な知識や技術を活かし、韓国の企業や機関で就労する場合に利用されるビザです。雇用先の要件や職種ごとに申請条件が定められています。" />
          </div>
        </Section>

        <Section title="ビザ利用に関する注意点">
          <p>韓国のビザ制度は細分化されており、同じ名称でも滞在資格や条件が異なる場合があります。制度は随時変更・改定されることがあるため、申請前には必ず最新の公式情報を確認する必要があります。なお、いずれのビザやK-ETAを取得していても、入国の最終判断は入国時にMinistry of Justice, Republic of Koreaおよび入国審査当局によって行われます。</p>
        </Section>

        <Section title='電子渡航認証"K-ETA"とは'>
          <p>電子渡航認証（K-ETA：Korea Electronic Travel Authorization）は、韓国へ渡航する一部の国・地域の渡航者を対象とした事前渡航認証制度です。K-ETAはビザそのものではありませんが、観光や短期商用などの目的でビザ免除対象として渡航する場合に必要となる制度です。</p>
        </Section>

        <Section title="K-ETAで認められる滞在内容・認められない内容">
          <p>K-ETAで認められる主な渡航目的は、観光、休暇、知人・家族の訪問、短期の商用活動（会議出席、商談、視察など、報酬を伴わないもの）です。</p>
          <p className="mt-3">一方で、以下に該当する活動はK-ETAでは認められていません。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>韓国国内での就労（有償・無償を問わない）</li>
            <li>長期の就学・留学</li>
            <li>インターンシップや研修（就労とみなされるもの）</li>
            <li>芸能活動・スポーツ活動で報酬が発生するもの</li>
            <li>永住や長期滞在を目的とした渡航</li>
            <li>医療目的での長期滞在</li>
          </ul>
        </Section>

        <Section title="K-ETAの申請方法・有効性・注意点">
          <p>K-ETAの申請は、韓国政府が提供する公式ウェブサイトから行います。K-ETAは一定期間有効とされ、その期間内で複数回の短期渡航が認められる場合がありますが、1回あたりの滞在可能期間は原則90日以内とされています。</p>
          <p className="mt-4">なお、K-ETAを取得していても入国が保証されるわけではなく、入国の最終判断は到着時にMinistry of Justice, Republic of Korea（韓国法務部）および入国審査当局によって行われます。</p>
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
