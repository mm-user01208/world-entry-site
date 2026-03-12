import Link from 'next/link';

const basePath = '/world-entry-site';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={`${basePath}/images/footer-logo.png`} alt="" className="h-8 w-auto" />
              <h3 className="font-bold text-lg">Global Travel Center</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              ビザ・電子渡航認証（ETA・ESTA等）に関する総合情報サイト
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">運営者情報</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>M2Agency Inc.</p>
              <p>4-8-25, Nakameguro, Meguro-ku, Tokyo, 153-0061, Japan</p>
              <p>info@m2-agency.net</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">リンク</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white">利用規約</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">個人情報保護方針</Link>
              <Link href="/legal-information" className="text-gray-400 hover:text-white">特定商取引法に関する表記</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>Copyright © All Rights reserved by Global Travel Center</p>
        </div>
      </div>
    </footer>
  );
}
