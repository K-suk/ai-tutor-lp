
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "無料相談予約 | AI学舎",
    description: "AI学舎の15分無料オンライン相談予約ページです。AI活用に関するお悩み、ご要望をお聞かせください。勧誘は一切ありません。",
    openGraph: {
        title: "無料相談予約 | AI学舎",
        description: "まずは15分の無料相談から。あなたの「やりたいこと」をAIで実現する方法を一緒に考えます。",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
