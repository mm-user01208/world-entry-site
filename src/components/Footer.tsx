import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">🌐 Global Travel Center</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              ビザ・電子渡航認証（ETA・ESTA等）に関する総合情報サイト
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">運営者情報</h4>
            <div className="text-gray-400 text-sm space-y-1">
              <p>M2Agency Inc.</p>
              <p>4-8-25, Nakameguro, Meguro-ku, Tokyo, 153-0061, Japan</p>
              <p>info@m2-agency.net</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3">リンク</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white">利用規約</Link>
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white">個人情報保護方針</Link>
              <Link href="/legal-information" className="text-gray-400 hover:text-white">特定商取引法に関する表記</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; Global Travel Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
