import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="px-6 py-12 lg:px-40 bg-background-light dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="flex items-center gap-2">
                        <img src="/images/logo.png" alt="AI学舎" className="h-20 w-auto object-contain" />
                        <h2 className="text-text-main dark:text-white text-xl font-bold tracking-tight">
                            AIFE
                        </h2>
                    </div>
                    <p className="text-xs text-text-sub">© 2026 AIFE. All rights reserved.</p>
                </div>
                <div className="flex gap-8 text-sm text-text-sub font-medium">
                    <a className="hover:text-primary transition-colors" href="#">利用規約</a>
                    <a className="hover:text-primary transition-colors" href="#">プライバシーポリシー</a>
                    <a className="hover:text-primary transition-colors" href="#">運営者情報</a>
                </div>
            </div>
        </footer>
    );
}
