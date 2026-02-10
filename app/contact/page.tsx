"use client";

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xvzbzzpr");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    if (state.succeeded) {
        return (
            <div className="flex-1 flex grow flex-col text-[#1b140d] dark:text-[#fcfaf8] py-8 md:py-24" style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>
                <main className="flex-1 flex flex-col items-center justify-center py-10 px-4">
                    <div className="max-w-[600px] w-full bg-white dark:bg-[#2d2218] rounded-[1rem] shadow-sm border border-[#ee8c2b]/5 p-8 lg:p-12 text-center">
                        <div className="size-20 bg-[#ee8c2b]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-4xl text-[#ee8c2b]">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">お問い合わせありがとうございます！</h2>
                        <p className="text-opacity-70 mb-8">
                            内容を確認次第、担当者よりご連絡させていただきます。<br />
                            自動返信メールをお送りしましたので、ご確認ください。
                        </p>
                        <a href="/" className="inline-block bg-[#ee8c2b] hover:bg-[#d97d24] text-white px-8 py-3 rounded-[1rem] font-bold transition-all">
                            トップページに戻る
                        </a>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex-1 flex grow flex-col text-[#1b140d] dark:text-[#fcfaf8] py-8 md:py-24" style={{ fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>

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
                        <form onSubmit={handleSubmit} className="space-y-10">
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
                                            <input
                                                id="name"
                                                name="name"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] h-12 px-4 outline-none"
                                                placeholder="例：山田 太郎"
                                                type="text"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <label className="text-sm font-bold flex items-center gap-2">
                                                メールアドレス <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">必須</span>
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] h-12 px-4 outline-none"
                                                placeholder="example@mail.com"
                                                type="email"
                                                required
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-bold flex items-center gap-2">
                                            AIでやってみたいこと・悩みがあればご記入ください <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">必須</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="rounded-[0.5rem] border border-[#ee8c2b]/20 bg-[#f8f7f6] dark:bg-[#221910]/30 focus:border-[#ee8c2b] focus:ring-[#ee8c2b] p-4 outline-none resize-y min-h-[120px]"
                                            placeholder="例：ChatGPTを業務効率化に使いたい、何から始めればいいかわからない..."
                                            rows={4}
                                            required
                                        ></textarea>
                                        <ValidationError
                                            prefix="Message"
                                            field="message"
                                            errors={state.errors}
                                        />
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
                                <button
                                    className="w-full bg-[#ee8c2b] hover:bg-[#d97d24] text-white py-4 rounded-[1.5rem] font-bold text-lg shadow-lg shadow-[#ee8c2b]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? '送信中...' : 'この内容で予約する'}
                                    {!state.submitting && <span className="material-symbols-outlined">calendar_add_on</span>}
                                </button>
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
