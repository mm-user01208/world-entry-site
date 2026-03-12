import Link from 'next/link';

const basePath = '/world-entry-site';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Logo & description */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={`${basePath}/images/footer-logo.png`} alt="" className="h-10 w-auto" />
            <h3 className="font-bold text-xl">Global Travel Center</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
            本サイトは、各国のビザや電子渡航認証（ETA・ESTA・K-ETA）に関する制度を分かりやすく解説する情報提供サイトです。本サイトは情報提供を目的としており、ビザや電子渡航認証の申請代行業務は行っていません。外部サービスへのリンクは、利用を推奨または保証するものではありません。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto mb-4">
            Global Travel Centerは民間企業による運営であり、いかなる政府機関とも提携または関係はありません。<br />
            電子渡航認証やビザは、本サービスを利用せず公式サイトから直接申請することも可能です。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
            This site is supervised by a registered Australian Migration Agent<br />
            ★★★★★★★★★★（OMARA Registration No. 0000000）
          </p>
        </div>

        {/* Links row */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/legal-information" className="hover:text-white">Legal Information (Act on Specified Commercial Transactions)</Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <a href="#top" className="hover:text-white">TOP</a>
            <Link href="/australia" className="hover:text-white">Australia</Link>
            <Link href="/america" className="hover:text-white">United States of America</Link>
            <Link href="/south-korea" className="hover:text-white">South Korea</Link>
            <Link href="/united-kingdom" className="hover:text-white">United Kingdom</Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>Copyright© – All rights reserved by Global Travel Center</p>
        </div>
      </div>
    </footer>
  );
}
