import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import CountryNav from '@/components/CountryNav';

export const metadata: Metadata = {
  title: 'ESTA(エスタ)申請｜米国公式の電子渡航認証を日本語でご案内',
  description: 'ESTA(エスタ)は米国政府が定める公式の電子渡航認証システムです。短期のアメリカ渡航に必須となるESTAの申請手続きを日本語で分かりやすくご案内。出発72時間前までに申請を済ませてください。',
};

const faqItems = [
  { q: 'どのような場合にESTA申請が必要となるのでしょうか？', a: 'ビザ免除プログラム（VWP）対象国の市民が、観光や短期商用を目的として90日以内の滞在でアメリカへ渡航する場合にESTA申請が必要です。年齢を問わず、ハワイを含むアメリカへ渡航するすべての方が対象となります。' },
  { q: 'ESTAの申請時期・期日はいつまでですか？', a: '出発の72時間前までにESTA申請を済ませることが推奨されています。出発の際にESTAを取得していない場合、原則として航空機への搭乗ができません。' },
  { q: 'ESTAは申請から取得や審査時間はどのくらいですか？', a: '通常は即時〜数時間で結果が出ますが、審査に最長72時間を要する場合があります。余裕をもって申請することをお勧めします。' },
  { q: 'ESTAの有効期限はどのくらいですか？', a: '「渡航認証許可」の承認から2年間有効です。ただし、パスポートの有効期限が2年以内の場合は、パスポート有効期限日をもってESTAは失効します。更新制度はなく、失効時は再申請が必要です。' },
  { q: 'ESTAを取得することで、アメリカへの入国が必ず認められるのでしょうか？', a: 'いいえ。ESTAは搭乗・渡航の許可を示すもので、入国の可否は到着時にU.S. Customs and Border Protection（米国税関・国境警備局）が最終判断します。' },
  { q: 'アメリカの有効なビザを取得していますが、渡米の際はESTAも必要でしょうか？', a: '有効なビザをお持ちの場合、ESTAは必要ありません。ビザで渡航してください。' },
  { q: 'ESTA(エスタ)を印刷・コピーする必要がありますか？', a: 'ESTAは電子的にパスポートと紐づけられるため、印刷は必須ではありません。ただし、念のためコピーを保管しておくことをお勧めします。' },
  { q: 'ESTAを利用してアメリカで働くことは可能ですか？', a: 'できません。有償・無償を問わず、アメリカ国内での就労はESTAでは認められていません。就労目的の場合は適切なビザの取得が必要です。' },
  { q: 'ハワイ旅行を予定していますが、ESTAを取得しなければ入国できないのでしょうか？', a: 'はい。ハワイもアメリカ合衆国の一部であるため、ビザ免除プログラム対象国の方は事前にESTAの取得が必要です。' },
  { q: 'ESTA(エスタ)とビザの違いとは？', a: 'ESTAは短期滞在（原則90日以内）向けの簡易な渡航認証制度で、オンラインで申請できます。ビザは就労、留学、長期滞在など目的に応じた許可証で、大使館・領事館での面接が必要な場合があります。' },
  { q: 'ビザ免除プログラム(VWP)とはどんな制度ですか？', a: 'VWPは、指定された国・地域の市民がビザなしで最長90日間アメリカに滞在できる制度です。対象国の渡航者はESTAの事前取得が必要です。' },
  { q: 'パソコンに不慣れなため家族や知人にESTA申請を依頼しても問題ないでしょうか？', a: '問題ありません。第三者による代理申請は認められています。ただし、入力内容の正確性は申請者本人の責任となります。' },
  { q: 'ESTAの公式サイトについて', a: 'ESTAの公式申請サイトはアメリカ合衆国税関・国境警備局（CBP）が運営しています。非公式の代行サイトと混同しないようご注意ください。' },
  { q: 'お支払い方法', a: 'VISA、MasterCard、JCB、American Express、Diners Clubのクレジットカードに対応しています。最新のSSL技術により決済情報はすべて暗号化されます。' },
  { q: 'その他注記事項', a: '当サービスはESTA申請の入力補助・日本語サポートを提供するものであり、米国政府機関とは提携しておりません。登録審査は最長72時間を要する場合があります。' },
];

export default function EstaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif-country text-3xl md:text-4xl font-bold mb-4">ESTA申請は出発の3日前までに</h1>
          <p className="text-red-200 text-lg mb-8">申請には一定の時間がかかります。早めに手続きを済ませましょう。</p>
          <div className="inline-block bg-white text-red-800 font-bold py-3 px-8 rounded-lg shadow-lg text-lg">
            出発の72時間前までに申請をお願いします
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 space-y-10">

        {/* ESTA基本説明 */}
        <Section title="アメリカ入国には「ESTA」の申請が必要です">
          <p>ESTA（Electronic System for Travel Authorization：電子渡航認証システム）は、米国国土安全保障省（DHS）により2009年1月から義務化された電子渡航認証です。</p>
          <p className="mt-3">ビザ免除プログラム（VWP）対象国の市民が、観光や短期商用を目的としてアメリカへ渡航する場合、最長90日間の滞在に限りビザ取得が免除されますが、代わりにESTAの事前申請が必要です。</p>
          <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
            <p className="font-bold text-red-800 mb-2">ESTA申請が認められない場合</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>2011年3月1日以降にイラン、イラク、北朝鮮、スーダン、シリア、リビア、ソマリア、イエメン、キューバへの渡航・滞在歴がある方</li>
              <li>上記の国との二重国籍をお持ちの方</li>
            </ul>
          </div>
        </Section>

        {/* 申請対象 */}
        <Section title="ESTA(エスタ)の申請対象・必要な方とは">
          <p>年齢を問わず、ハワイを含むアメリカへ渡航するすべての方がESTAの申請対象となります。ESTAは米国国土安全保障省（DHS）傘下の税関・国境警備局（CBP）が管轄しており、外務省や在日米国大使館では申請を受け付けていません。</p>
        </Section>

        {/* 申請手順 */}
        <Section title="ESTA(エスタ)の申請手順">
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <StepCard num={1} title="申請者情報の入力" desc="申請フォームの案内に沿って「ESTAお申込みに関する同意事項」を確認し、氏名・生年月日・パスポート番号などの申請者情報を入力します。" />
            <StepCard num={2} title="申請料お支払い" desc="クレジットカード情報を入力し、申請料のお支払いを行います。" />
            <StepCard num={3} title="審査" desc="登録のメールアドレスに「申請受付完了」の通知が届きます。審査に最長72時間を要する場合があります。" />
            <StepCard num={4} title="申請完了" desc="「渡航認証許可」の通知をもって申請は完了です。ESTAはパスポートと電子的に紐づけられます。" />
          </div>
        </Section>

        {/* 申請条件 */}
        <Section title="ESTA(エスタ)の申請条件・資格">
          <ul className="space-y-3 mt-2">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>ビザ免除プログラム（VWP）対象国の市民であり、期限が有効なパスポートを所持していること</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>渡航目的が90日以内の短期観光または商用で、就労や留学に該当しないこと</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>米国が定める伝染病や病気に罹患していないこと</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>米国のビザを所持していないこと</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold mt-0.5">&#10003;</span>
              <span>過去に重大な犯罪歴や米国で入国拒否を受けていないこと</span>
            </li>
          </ul>
        </Section>

        {/* 申請時期・期限 */}
        <Section title="ESTA(エスタ)申請の時期・期限に関する注意点">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="font-bold text-yellow-800 mb-2">重要</p>
            <p>出発72時間前までにESTA申請を済ませるよう推奨されています。出発の際にESTA申請を済ませていない方は、原則として航空機への搭乗ができません。</p>
            <p className="mt-2 text-sm text-yellow-700">米国CBPサイトでは定期的にシステムメンテナンスを行っているため、余裕をもった申請をお願いします。</p>
          </div>
        </Section>

        {/* 必要な物 */}
        <Section title="ESTA(エスタ)申請に必要な物とは？">
          <p>ESTA申請には、氏名・生年月日・パスポート番号などの入力が必要です。所要時間は約10分です。</p>
          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <RequiredItem icon="&#128368;" title="有効なパスポート" desc="有効期限内のパスポートが必要です" />
            <RequiredItem icon="&#128179;" title="クレジットカード" desc="申請料のお支払いに使用します" />
            <RequiredItem icon="&#128231;" title="メールアドレス" desc="申請結果の通知に使用します" />
          </div>
          <p className="mt-4 text-sm text-gray-500">※パソコンでの申請をお勧めします</p>
        </Section>

        {/* アプリ申請 */}
        <Section title="アプリでのESTA(エスタ)申請方法について">
          <p>「ESTA Mobile（エスタ モバイル）」アプリを使用して申請することも可能です。App StoreまたはGoogle Playよりダウンロードし、パスポートをスキャンして申請手続きを行えます。</p>
        </Section>

        {/* 有効期限 */}
        <Section title="ESTA(エスタ)の有効期限について">
          <p>ESTAは「渡航認証許可」の承認から<strong>2年間</strong>有効です。有効期間内であれば、複数回の渡航が可能です。</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>パスポートの有効期限が2年以内の場合、パスポート有効期限日をもってESTAは失効します</li>
            <li>更新制度はありません。失効時は新規で再申請が必要です</li>
            <li>注意：ハンガリー・ブルネイ国籍の方は有効期間が1年に短縮されます</li>
          </ul>
        </Section>

        {/* ニュース */}
        <Section title="ESTA(エスタ)とアメリカ入国の最新情報">
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <NewsCard title="ハワイの入国に関する最新情報【2026年4月最新】" />
            <NewsCard title="オリジナルファーマーズマーケットの見どころは？" />
            <NewsCard title="子連れで楽しめるロサンゼルスのおすすめ観光スポット" />
            <NewsCard title="アメリカの国立公園、外国人観光客の入場料を大幅値上げへ" />
          </div>
        </Section>

        {/* ハワイ */}
        <Section title="ハワイ渡航のESTA(エスタ)申請について">
          <p>日本国籍の方がハワイへ渡航する場合、90日以内の観光・短期商用を目的として訪問する際には、ビザ免除プログラム（VWP）制度によりESTAの「渡航認証許可」の取得が必須です。ハワイはアメリカ合衆国の一部であるため、米国本土と同じ入国要件が適用されます。</p>
        </Section>

        {/* グアム */}
        <Section title="グアム渡航のESTA(エスタ)申請について">
          <p>グアムへの渡航には、グアム-北マリアナ諸島連邦ビザ免除プログラム（Guam-CNMI VWP）を利用することが可能です。</p>
          <div className="mt-3 bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="font-bold text-blue-800 mb-1">2024年11月30日からの変更</p>
            <p className="text-sm">「G-CNMI ETA」の事前取得が義務化されました。従来の「I-736フォーム」書面提出は廃止されています。</p>
          </div>
        </Section>

        {/* サイパン */}
        <Section title="サイパン渡航のESTA(エスタ)申請について">
          <p>サイパンへの渡航には「G-CNMI ETA」の申請が必須です。G-CNMI ETAでは最長45日間のサイパン滞在が可能です。45日以上の滞在を希望する場合はESTA申請が必要となります。</p>
        </Section>

        {/* 関連記事 */}
        <Section title="ESTA申請関連情報">
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <RelatedLink title="ESTA(電子渡航認証システム)とは" />
            <RelatedLink title="ESTAの申請方法・記入例" />
            <RelatedLink title="グループ・家族申請の方法" />
            <RelatedLink title="ESTAの更新・有効期限" />
            <RelatedLink title="米国連絡先の記入方法" />
            <RelatedLink title="ESTA申請の確認・状況照会" />
            <RelatedLink title="スマートフォンでのESTA申請" />
            <RelatedLink title="ESTA申請の訂正・変更方法" />
          </div>
        </Section>

        <Section title="ビザ関連情報">
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            <RelatedLink title="エスタとビザの違い" />
            <RelatedLink title="B1・B2ビザについて" />
            <RelatedLink title="学生ビザ（F-1）について" />
            <RelatedLink title="就労ビザ（H-1B）について" />
            <RelatedLink title="ビザ免除プログラム（VWP）とは" />
            <RelatedLink title="グリーンカード（永住権）" />
            <RelatedLink title="トランジットビザについて" />
            <RelatedLink title="ビザ申請に必要な書類一覧" />
          </div>
        </Section>

        {/* 支払い方法 */}
        <Section title="お支払い方法">
          <p>以下のクレジットカードに対応しています。最新のSSL技術により、決済情報はすべて暗号化されます。</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <CardBadge name="VISA" />
            <CardBadge name="MasterCard" />
            <CardBadge name="JCB" />
            <CardBadge name="American Express" />
            <CardBadge name="Diners Club" />
          </div>
          <div className="mt-6 bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
            <p>&#10003; 日本語でのお問い合わせが可能です</p>
            <p>&#10003; 分かりづらい入力項目のフォローを行います</p>
            <p>&#10003; ESTA(エスタ)の登録審査は最長で72時間です</p>
          </div>
        </Section>

      </article>

      <div className="max-w-4xl mx-auto px-4">
        <FAQ items={faqItems} title="ESTA(エスタ)に関するよくある質問" />
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

function StepCard({ num, title, desc }: { num: number; title: string; desc: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
      <div className="flex items-center gap-3 mb-2">
        <span className="bg-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{num}</span>
        <h3 className="font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function RequiredItem({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function NewsCard({ title }: { title: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
      <p className="text-sm font-medium text-gray-800">{title}</p>
    </div>
  );
}

function RelatedLink({ title }: { title: string }) {
  return (
    <div className="py-2 px-3 bg-gray-50 rounded text-sm text-gray-700 hover:bg-gray-100 transition-colors">
      {title}
    </div>
  );
}

function CardBadge({ name }: { name: string }) {
  return (
    <span className="bg-white border border-gray-300 rounded px-3 py-1.5 text-sm font-medium text-gray-700">
      {name}
    </span>
  );
}
