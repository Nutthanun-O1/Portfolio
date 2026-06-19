import "./globals.css";

export const metadata = {
  title: "Nutthanun Noothong | AI & Full-Stack Developer",
  description:
    "Portfolio of Nutthanun Noothong — Computer Science student at Prince of Songkla University specializing in AI, web development with Next.js, React, and Google Earth Engine.",
  keywords: [
    "Nutthanun Noothong",
    "AI Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Prince of Songkla University",
  ],
  openGraph: {
    title: "Nutthanun Noothong | AI & Full-Stack Developer",
    description:
      "Portfolio of Nutthanun Noothong — AI & Full-Stack Developer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
                  document.documentElement.setAttribute('data-theme', savedTheme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
