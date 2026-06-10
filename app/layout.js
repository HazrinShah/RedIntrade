import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading-next",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body-next",
});

export const metadata = {
  title: "Redintrade Sdn Bhd | Media Production & Event Management Malaysia",
  description: "Redintrade Sdn Bhd — A premier media production, broadcasting, event management and artist management company based in Kuala Lumpur, Malaysia. Doing things to perfection.",
  keywords: "Redintrade, media production, event management, artist management, broadcasting, film production, drama production, Kuala Lumpur, Malaysia",
  openGraph: {
    title: "Redintrade Sdn Bhd | Media Production & Event Management",
    description: "A multi business company that always does things to the perfection.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          precedence="default"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
