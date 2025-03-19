import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import DashboardLayout from "@/mainlayout/DashboardLayout";
import MainLayout from "@/mainlayout/MainLayout";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Rashaduldev - Web Developer",
  description: "Professional resume and portfolio of Rashadul Dev, a full-stack web developer specializing in React.js, Next.js, and Laravel.",
  keywords: "RashadulDev, rashaduldev,Rashadul Dev, Web Developer, React Developer, Next.js, Laravel, Portfolio",
  author: "rashaduldev,RashadulDev,Rashadul Dev",
  url: "https://rashaduldev.vercel.app",
  image: "https://res.cloudinary.com/de8yddexc/image/upload/v1739679600/rashadul/rashadul.png",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  
  // This cannot run on the server, so should be handled in a useEffect instead
  let isDashboard = false;
  if (typeof window !== "undefined") {
    isDashboard = window.location.pathname.includes("dashboard");
  }

  return (
    <html lang="en">
      <head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <link rel="canonical" href={metadata.url} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph SEO (For Social Media Sharing) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />

        {/* Twitter Card for Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        {/* Structured Data (Schema Markup) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "rashaduldev",
            "url": metadata.url,
            "image": metadata.image,
            "jobTitle": "Full-Stack Web Developer",
            "sameAs": [
              "https://github.com/rashaduldev",
              "https://linkedin.com/in/rashaduldev",
              "https://twitter.com/rashaduldev"
            ]
          })
        }} />
      </head>
      <body className={jetbrainsMono.variable}>
        {isDashboard ? (
          <DashboardLayout>{children}</DashboardLayout>
        ) : (
          <MainLayout session={session}>{children}</MainLayout>
        )}
      </body>
    </html>
  );
}
