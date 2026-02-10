import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7f0f3] bg-background-light/95 dark:bg-background-dark/95 px-6 lg:px-40 py-4 backdrop-blur-md">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="AI学舎" className="h-10 w-auto object-contain" />
                    <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight">
                        AIFE <span className="text-sm font-normal text-primary hidden md:inline ml-1">AI NativeによるAI活用サポート</span>
                    </h2>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <a className="hidden md:block text-text-main dark:text-gray-300 font-medium hover:text-primary" href="/#faq">
                    よくある質問
                </a>
                <Link href="/contact">
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                        <span>お問い合わせ</span>
                    </button>
                </Link>
            </div>
        </header>
    );
}
