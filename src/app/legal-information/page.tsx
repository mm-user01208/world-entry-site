import type { Metadata } from 'next';

export const metadata: Metadata = { title: '特定商取引法に関する表記' };

export default function LegalInformation() {
  return (
    <>
      <section className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">特定商取引法に関する表記</h1>
          <p className="text-gray-400">Legal Information (Act on Specified Commercial Transactions)</p>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-700 leading-relaxed">
        <Section title="1．当サイトの位置づけについて">
          <p>当サイトは、ビザおよび電子渡航認証に関する一般情報を提供する情報提供サイトです。商品または役務の販売、申込みの受付、申請代行、料金の請求、決済行為は行っておりません。</p>
        </Section>
        <Section title="2．特定商取引法との関係">
          <p>当サイトでは、特定商取引法に定める「通信販売」に該当する取引を行っていないため、同法第11条に基づく表示義務の対象とはなりません。</p>
        </Section>
        <Section title="3．外部サイトで発生する取引について">
          <p>当サイトから案内される外部ウェブサイトにおいて、ビザや電子渡航認証の申請に伴い費用が発生する場合がありますが、これらの取引は、利用者と当該サイト運営者との間で直接行われるものです。当サイトは、これらの取引の当事者とはならず、申込み、契約、支払い、キャンセル、返金等には一切関与いたしません。</p>
        </Section>
        <Section title="4．責任の範囲">
          <p>外部サイトで提供される商品・サービスの内容、価格、支払方法、契約条件、返金対応等について、当サイトは一切の責任を負いません。詳細は、各外部サイトに掲載されている特定商取引法表記および利用規約をご確認ください。</p>
        </Section>
        <Section title="5．運営者情報">
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
