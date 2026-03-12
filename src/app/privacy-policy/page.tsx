import type { Metadata } from 'next';

export const metadata: Metadata = { title: '個人情報保護方針' };

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">個人情報保護方針</h1>
          <p className="text-gray-400">Privacy Policy</p>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-700 leading-relaxed">
        <Section title="1．基本方針">
          <p>当サイトは、利用者のプライバシーを尊重し、個人情報保護の重要性を認識しています。当サイトは、ビザおよび電子渡航認証に関する一般情報を提供する情報提供サイトであり、利用者から氏名、住所、生年月日、パスポート番号、クレジットカード情報等の個人情報および決済情報を直接取得、保存、管理することは一切ありません。</p>
        </Section>
        <Section title="2．監修者による個人情報の取扱いについて">
          <p>当サイトに掲載されているオーストラリア関連情報は、OMARA登録移民エージェントによる監修を予定していますが、監修者が個人情報を取得・管理することはありません。監修はあくまで情報内容の確認を目的とするものであり、利用者との間で個別の契約関係が発生するものではありません。</p>
        </Section>
        <Section title="3．外部リンク先における個人情報の取扱い">
          <p>当サイト内に設置された外部リンクを通じて遷移した先のウェブサイトにおいて、申請に伴う個人情報や支払情報の入力が発生する場合がありますが、これらの情報はリンク先サイトの管理下で取り扱われます。当サイトおよび監修者は、リンク先サイトで取得される情報の内容、管理方法、セキュリティ対策について一切の責任を負いません。</p>
        </Section>
        <Section title="4．Cookieおよびアクセス解析について">
          <p>当サイトでは、サイト改善および利便性向上を目的として、Cookieやアクセス解析ツールを利用する場合がありますが、これにより個人を特定できる情報が取得されることはありません。</p>
        </Section>
        <Section title="5．法令遵守および方針の見直し">
          <p>当サイトは、関連法令およびガイドラインを遵守するとともに、社会情勢や制度変更に応じて本方針の内容を見直し、継続的な改善に努めます。</p>
        </Section>
        <Section title="6．運営者情報">
          <div className="space-y-1">
            <p>サイト名：Global Travel Center</p>
            <p>運営者：M2Agency Inc.</p>
            <p>所在地：4-8-25, Nakameguro, Meguro-ku, Tokyo, 153-0061, Japan</p>
            <p>お問い合わせ：info@m2-agency.net</p>
          </div>
        </Section>
      </article>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
