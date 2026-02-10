import React from 'react';

export default function ContactPage() {
    return (
        <div className="flex-1 flex grow flex-col bg-[#f8f7f6] dark:bg-[#221910] text-[#1b140d] dark:text-[#fcfaf8]" style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>

            <main className="flex-1 flex flex-col items-center py-10 px-4">
                <div className="max-w-[800px] w-full bg-white dark:bg-[#2d2218] rounded-[1rem] shadow-sm border border-[#ee8c2b]/5 overflow-hidden">
                    {/* Progress Header */}
                    <div className="p-6 border-b border-[#ee8c2b]/5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-semibold text-[#ee8c2b]">入力</span>
                            <span className="text-sm font-medium opacity-70">予約情報の入力</span>
                        </div>
                        <div className="w-full bg-[#f3ede7] dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#ee8c2b] h-full rounded-full transition-all duration-500" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    <div className="p-8 lg:p-12">
                        <div className="text-center mb-10">
                            <h1 className="text-2xl lg:text-3xl font-bold mb-3">【無料】15分オンライン相談を予約する</h1>
                            <p className="text-sm opacity-70">AI導入の第一歩を、カジュアルな対話から始めましょう。</p>
                        </div>
                        <form className="space-y-10">
                            {/* Section 1: Contact Info */}
                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="bg-[#ee8c2b]/20 text-[#ee8c2b] w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                                    <h2 className="text-xl font-bold">お客様情報を入力してください</h2>
                                </div>
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-bold flex items-center gap-2">
                                                お名前 <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">必須</span>
                                            </label>
                                            <input className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] h-12 px-4 outline-none" placeholder="例：山田 太郎" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-bold flex items-center gap-2">
                                                メールアドレス <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">必須</span>
                                            </label>
                                            <input className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] h-12 px-4 outline-none" placeholder="example@mail.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold flex items-center gap-2">
                                            AIでやってみたいこと・悩みがあればご記入ください <span className="bg-gray-400 text-white text-[10px] px-1.5 py-0.5 rounded">任意</span>
                                        </label>
                                        <textarea className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] p-4 outline-none resize-y min-h-[120px]" placeholder="例：ChatGPTを業務効率化に使いたい、何から始めればいいかわからない..." rows={4}></textarea>
                                    </div>
                                </div>
                            </section>
                            {/* Section 3: Submit */}
                            <div className="pt-6">
                                <div className="bg-[#ee8c2b]/5 rounded-[1rem] p-4 mb-6 flex items-start gap-3 border border-[#ee8c2b]/10">
                                    <span className="material-symbols-outlined text-[#ee8c2b] mt-0.5">verified_user</span>
                                    <p className="text-sm font-medium leading-relaxed">
                                        <span className="font-bold text-[#ee8c2b] block mb-1">安心のノーセールス宣言</span>
                                        相談後のしつこい勧誘は一切ありません。まずはAIの可能性を気軽にお話ししましょう。
                                    </p>
                                </div>
                                <button className="w-full bg-[#ee8c2b] hover:bg-[#d97d24] text-white py-4 rounded-[1.5rem] font-bold text-lg shadow-lg shadow-[#ee8c2b]/20 transition-all flex items-center justify-center gap-2 cursor-pointer" type="submit">
                                    この内容で予約する
                                    <span className="material-symbols-outlined">calendar_add_on</span>
                                </button>
                                <p className="text-center text-xs opacity-50 mt-4">
                                    「予約する」ボタンを押すと、入力したメールアドレスに確認メールが届きます。
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">speed</span>
                        <span className="text-sm font-medium">所要時間15分</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">video_chat</span>
                        <span className="text-sm font-medium">オンライン対応</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined">payments</span>
                        <span className="text-sm font-medium">完全無料</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
