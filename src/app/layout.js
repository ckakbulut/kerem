import { NTR } from "next/font/google";
import "./globals.css";

const ntr = NTR({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-ntr",
    display: "swap",
});

export const metadata = {
    title: "Can Kerem Akbulut",
    description:
        "Software engineer based in NYC and Istanbul. Currently a Computer Science master's student at Columbia University.",
    icons: {
        icon: "/favicon.ico",
    },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.dataset.theme='light';}}catch(e){}})();`;

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={ntr.variable} suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: themeInitScript }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
