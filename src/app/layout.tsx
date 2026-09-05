import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Arnold Nillas — Full Stack Developer",
  description: "Thoughtful websites, applications, and tools by Arnold Nillas. Explore selected full stack development projects and get in touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[100px] scroll-smooth motion-reduce:scroll-auto">
      <body className="bg-background font-sans text-foreground antialiased selection:bg-accent selection:text-accent-foreground [&_a]:transition-colors [&_a]:duration-[180ms] [&_:is(a,button)]:[-webkit-tap-highlight-color:transparent] [&_:is(a,button,input,textarea)]:focus-visible:outline [&_:is(a,button,input,textarea)]:focus-visible:outline-2 [&_:is(a,button,input,textarea)]:focus-visible:outline-offset-4 [&_:is(a,button,input,textarea)]:focus-visible:outline-accent motion-reduce:[&_*]:!animate-none motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:before:!animate-none motion-reduce:[&_*]:after:!animate-none motion-reduce:[&_*]:before:!transition-none motion-reduce:[&_*]:after:!transition-none">
        {children}
      </body>
    </html>
  );
}
