import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Home/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Shoukat Dev | MERN Stack Developer & Freelancer",
  description:
    "I'm Shoukat Rai — a passionate MERN Stack Developer specializing in building modern, responsive, and high-performance web applications using Next.js, React, Node.js, and MongoDB.",
  keywords: [
    "Shoukat Dev",
    "Shoukat Rai",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Web Developer",
    "Freelance Web Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Portfolio Website",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Shoukat Rai" }],
  creator: "Shoukat Rai",
  publisher: "Shoukat Dev",
  metadataBase: new URL("https://shoukatdev.vercel.app/"),
  openGraph: {
    title: "Shoukat Dev | MERN Stack Developer",
    description:
      "Explore my portfolio — full-stack projects, professional experience, and modern web apps built with React, Next.js, and Node.js.",
    url: "https://shoukatdev.vercel.app/",
    siteName: "Shoukat Dev Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shoukat Dev Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoukat Dev | MERN Stack Developer",
    description:
      "Next.js portfolio by Shoukat Rai — showcasing professional MERN stack projects and freelancing work.",
    creator: "@shoukatdev",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shoukatdev.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        {/* <meta
          // name="google-site-verification"
          // content="6wBik4iQjKxYhzrFUQjvQYYPjMbbtGC4itX72PDKAEw"
        // /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shoukat Rai",
              url: "https://shoukatdev.vercel.app/",
              sameAs: [
                "https://github.com/shoukatrai",
                "https://linkedin.com/in/shoukatrai",
                "https://twitter.com/shoukatrai4",
              ],
              jobTitle: "MERN Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
              description:
                "Shoukat Rai is a MERN Stack Developer building scalable, modern web applications with React, Node.js, Express, and MongoDB.",
            }),
          }}
        />
      </head>

      <body className={`${poppins.className} bg-[#0F172A] text-gray-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
