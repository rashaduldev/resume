import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Analytics from "@/components/analytics/analytics";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight:["100","200","300","400","500","600","700","800"],
  variable:"--font-jetbrainsMono",
});

export const metadata = {
  title: "Resume of Rashadul Islam",
  description: "Generated by Md Rashadul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.ibb.co/PNyYZ8w/logo-removebg-preview.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={jetbrainsMono.variable}>
        <Analytics/>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
