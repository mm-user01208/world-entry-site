import Link from 'next/link';

const basePath = '/world-entry-site';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="max-w-5xl mx-auto px-4 py-14">
        {/* Logo & description */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={`${basePath}/images/logo.png`} alt="" className="h-10 w-auto" />
            <h3 className="font-bold text-xl">Global Travel Center</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto mb-4">
            本サイトは、OMARA登録移民エージェント Kotaro Mizoguchi（Registration No. 1465274）の監修のもと、各国のビザ申請サポートおよび電子渡航認証（ETA・ESTA・K-ETA）に関する情報を提供しています。
          </p>
          <p className="text-gray-500 text-xs leading-relaxed max-w-3xl mx-auto">
            当サイトは政府機関のウェブサイトではありません。電子渡航認証やビザは、各国政府の公式サイトから直接申請することも可能です。
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
