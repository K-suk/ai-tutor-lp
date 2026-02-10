import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-16 lg:px-40 lg:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-[960px] w-full flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-orange/10 px-4 py-1.5 text-accent-orange font-bold text-sm">
            <span className="material-symbols-outlined text-base">waving_hand</span>
            <span>はじめての方、シニアの方大歓迎！</span>
          </div>
          <h1 className="text-text-main dark:text-white text-4xl md:text-6xl font-black leading-[1.15] mb-6">
            〜時代遅れなんて言わせない〜<br />
            <span className="text-primary">1からわかる</span>AIの使い方
          </h1>
          <p className="text-text-sub dark:text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            まずは無料で相談。あなたに合ったAIの使い方を一緒に見つけます。<br className="hidden md:block" />
            大学生がマンツーマンで、優しく丁寧にサポートします。
          </p>
          <div className="flex flex-col items-center gap-4 w-full">
            <Link href="/contact" className="w-full max-w-md flex cursor-pointer items-center justify-center rounded-xl h-16 px-8 bg-primary text-white text-xl font-black shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform">
              <span>無料ヒアリング（15分）を予約する</span>
            </Link>
            <p className="text-sm text-text-sub flex items-center gap-2">
              <span className="material-symbols-outlined text-base text-accent-orange">check_circle</span> オンライン実施 ／ 売り込み・勧誘一切なし
            </p>
          </div>
        </div>
        <div className="mt-16 w-full max-w-[960px] aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Student and senior person smiling together looking at a laptop screen"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBjkwK9_02nTZAx7eTxWqd8lW_1EG6ivOXMykyqnLrXNoYtnODTLmpEGOg00z8B0XApDNpj0yfJxYbFe5RhBE66Je3kFr4IR57t83jnlX1sSD2nray1x0kMavOCJ--N_qR-VGxIjN5p5tRjwCj4tNVFABdX5tScEqMU5Z2mDzhJFxt0kxGmKKL6Cb7CRwyC24GYc2MG-rUFMFAMoNMErmAme20FTSI3suGRT9Jh7B8aosnbRp6pKAkaggEoJl-ywe6QRjTEGcTnWww')" }}
          ></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-6 py-20 lg:px-40 bg-white dark:bg-background-dark/50">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-text-main dark:text-white text-3xl font-bold text-center mb-12">安心して学べる3つのポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-[#cfe1e7] dark:border-gray-700 shadow-sm">
              <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold">Face-to-face support</h3>
              <p className="text-text-sub dark:text-gray-400 leading-relaxed">マンツーマンの対面サポート。分からないことはその場ですぐに質問・解決できます。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-[#cfe1e7] dark:border-gray-700 shadow-sm">
              <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">touch_app</span>
              </div>
              <h3 className="text-xl font-bold">Hands-on practice</h3>
              <p className="text-text-sub dark:text-gray-400 leading-relaxed">座学だけでなく、あなたのスマホやPCを実際に触りながら実践的に学びます。</p>
            </div>
            <div className="flex flex-col gap-4 p-8 rounded-2xl bg-background-light dark:bg-gray-800 border border-[#cfe1e7] dark:border-gray-700 shadow-sm">
              <div className="size-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">description</span>
              </div>
              <h3 className="text-xl font-bold">Ready-to-use templates</h3>
              <p className="text-text-sub dark:text-gray-400 leading-relaxed">講習後もすぐに使える「指示の出し方（プロンプト）」の雛形をプレゼントします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended For Section */}
      <section className="px-6 py-20 lg:px-40 bg-accent-orange/5">
        <div className="max-w-[800px] mx-auto bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="material-symbols-outlined text-accent-orange text-4xl">check_circle</span>
            こんな方におすすめです
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">done</span>
              <p className="text-lg md:text-xl font-medium">AIって言葉は聞くけど、何から始めればいいか分からない</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">done</span>
              <p className="text-lg md:text-xl font-medium">高額なスクールに通うのは不安。もっと手軽に始めたい</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">done</span>
              <p className="text-lg md:text-xl font-medium">若い人の柔軟な考え方や最新のツールを教えてほしい</p>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">done</span>
              <p className="text-lg md:text-xl font-medium">自分の仕事や趣味にどう活かせるか、個別で相談したい</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Service Flow Section */}
      <section className="px-6 py-20 lg:px-40">
        <div className="max-w-[960px] mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">ご利用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold relative z-10">1</div>
              <h4 className="font-bold">無料予約</h4>
              <p className="text-sm text-text-sub">ボタンから日程を選択</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold relative z-10">2</div>
              <h4 className="font-bold">無料ヒアリング</h4>
              <p className="text-sm text-text-sub">オンライン15分相談</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold relative z-10">3</div>
              <h4 className="font-bold">プランのご提案</h4>
              <p className="text-sm text-text-sub">あなた専用の講習内容</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold relative z-10">4</div>
              <h4 className="font-bold">講習の実施</h4>
              <p className="text-sm text-text-sub">対面・マンツーマン</p>
            </div>
            {/* Step 5 */}
            <div className="flex flex-col items-center gap-4">
              <div className="size-16 rounded-full bg-accent-orange text-white flex items-center justify-center text-2xl font-bold relative z-10">5</div>
              <h4 className="font-bold">活用開始！</h4>
              <p className="text-sm text-text-sub">自由自在にAIを活用</p>
            </div>
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-primary/20 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 lg:px-40 bg-background-light dark:bg-gray-900">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Pricing Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-primary p-8 shadow-xl">
              <h3 className="text-xl font-bold text-center mb-4">無料ヒアリング</h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-black text-primary">0</span>
                <span className="text-xl font-bold text-primary">円</span>
              </div>
              <ul className="space-y-3 mb-8 text-text-sub dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> 15分間のオンライン相談</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> 目的や悩みのヒアリング</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check</span> 最適なツールの選定</li>
              </ul>
              <Link href="/contact" className="flex items-center justify-center w-full h-14 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">無料で相談する</Link>
            </div>
            {/* Pricing Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl border-2 border-accent-orange p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent-orange text-white px-6 py-1 font-bold rounded-bl-xl text-sm italic">大学生だからできる低価格</div>
              <h3 className="text-xl font-bold text-center mb-4">AI個別講習 (60分)</h3>
              <div className="text-center mb-6">
                <span className="text-5xl font-black text-accent-orange">5,000</span>
                <span className="text-xl font-bold text-accent-orange">円</span>
              </div>
              <ul className="space-y-3 mb-8 text-text-sub dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-orange">check</span> 60分間のマンツーマン対面講習</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-orange">check</span> あなたのPC・スマホ設定サポート</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-accent-orange">check</span> オリジナル指示書テンプレート付</li>
              </ul>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl mb-8">
                <p className="text-xs text-text-sub text-center mb-1">大手企業セミナーとの比較</p>
                <div className="flex justify-between items-center px-4">
                  <span className="line-through text-gray-400">通常 50,000円〜</span>
                  <span className="font-bold text-accent-orange">90%オフ！</span>
                </div>
              </div>
              <Link href="/contact" className="flex items-center justify-center w-full h-14 rounded-xl bg-accent-orange text-white font-bold shadow-lg shadow-accent-orange/20 hover:scale-[1.02] transition-transform">まずは無料で相談から！</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lecturer Profile Section */}
      <section className="px-6 py-20 lg:px-40 bg-white dark:bg-background-dark">
        <div className="max-w-[960px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">講師のご紹介</h2>
          <div className="flex flex-col md:flex-row items-center gap-10 bg-primary/5 rounded-3xl p-8 md:p-12">
            <div
              className="size-48 shrink-0 rounded-full bg-cover bg-center border-4 border-white shadow-lg"
              data-alt="Portrait of Rito Yamazaki"
              style={{ backgroundImage: "url('/images/rito_logo.jpg')" }}
            ></div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">山﨑 リト<span className="text-sm font-normal text-text-sub">(青山学院大学 4年)</span></h3>
              <p className="text-text-main dark:text-gray-300 leading-relaxed mb-6">
                「AIは魔法の道具ではありませんが、正しく使えば人生をより豊かにする強力なパートナーになります。難しい言葉は使わず、皆さんの『やりたいこと』に寄り添って、楽しく学べる時間を提供します。趣味の料理、旅行の計画、お仕事の効率化など、何でもご相談ください！」
              </p>
              {/* <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium border border-primary/20">
                  <span className="material-symbols-outlined text-primary">verified_user</span> 講師歴1年
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-sm font-medium border border-primary/20">
                  <span className="material-symbols-outlined text-primary">history_edu</span> 講習実績 200名突破
                </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 lg:px-40 bg-background-light dark:bg-gray-900" id="faq">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="space-y-4">
            <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold pr-4">スマホしか持っていないのですが、大丈夫ですか？</h4>
                <span className="material-symbols-outlined text-primary">expand_more</span>
              </div>
              <div className="px-6 pb-6 text-text-sub dark:text-gray-400">
                はい、もちろんです！最近はスマホアプリで手軽に使えるAIも増えています。あなたのスマホに合わせた活用方法をお教えします。
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold pr-4">対面場所はどこになりますか？</h4>
                <span className="material-symbols-outlined text-primary">expand_more</span>
              </div>
              <div className="px-6 pb-6 text-text-sub dark:text-gray-400">
                主要駅近くのカフェやコワーキングスペース、またはご自宅にお伺いすることも可能です（交通費別途）。ご相談の際にご希望をお聞きします。
              </div>
            </div>
            <div className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6 flex justify-between items-center cursor-pointer">
                <h4 className="font-bold pr-4">全くの初心者で、何を聞けばいいかも分かりません。</h4>
                <span className="material-symbols-outlined text-primary">expand_more</span>
              </div>
              <div className="px-6 pb-6 text-text-sub dark:text-gray-400">
                ご安心ください！まずは「AIで何ができるのか」を実際に見せるデモンストレーションから始めます。そこから興味のあるものを一緒に探していきましょう。
              </div>
            </div>
          </div>
          <div className="mt-16 p-6 border-l-4 border-primary bg-primary/5 rounded-r-xl">
            <h5 className="font-bold mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">policy</span>
              キャンセルポリシー
            </h5>
            <ul className="text-sm text-text-sub space-y-1">
              <li>・前日までのキャンセル：無料</li>
              <li>・当日のキャンセル：講習料金の50%</li>
              <li>・無断キャンセル：講習料金の100%</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-24 lg:px-40 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <defs>
              <pattern height="10" id="grid" patternUnits="userSpaceOnUse" width="10">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="max-w-[800px] mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            AIを味方につけて、<br />
            あなたの毎日をもっと楽しく。
          </h2>
          <p className="text-white/80 text-lg md:text-xl mb-12">
            まずは15分の無料オンライン相談から。無理な勧誘はありません。<br className="hidden md:block" />
            あなたの新しい一歩を、私たちが全力でサポートします。
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="flex items-center justify-center w-full md:w-auto min-w-[300px] h-16 bg-white text-primary rounded-xl text-xl font-bold shadow-2xl hover:bg-gray-50 transition-colors">
              無料ヒアリングを予約する
            </Link>
          </div>
        </div>
      </section>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AI学舎",
            description: "大学生によるマンツーマンAI活用講習",
            provider: {
              "@type": "Organization",
              name: "AI学舎",
              url: "https://ai-gakusha.com",
            },
            areaServed: "Japan",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "AI講習プラン",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "無料ヒアリング",
                  },
                  price: "0",
                  priceCurrency: "JPY",
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AI個別講習 (60分)",
                  },
                  price: "5000",
                  priceCurrency: "JPY",
                },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
