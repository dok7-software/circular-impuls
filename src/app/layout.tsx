import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      className={`${fontVariables} h-full`}
    >
      <body className="min-h-full font-clear-sans">{children}</body>
    </html>
  );
}
