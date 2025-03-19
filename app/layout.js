import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { AlertProvider } from "./_context/AlertContext";
import Alert from "./_components/Alert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "600", "900"],
});

export const metadata = {
  title: "Shiksha's Portfolio",
  description:
    "Welcome to Shiksha's Portfolio, showcasing projects, skills, and achievements.",
};

export default function RootLayout({ children }) {
  return (
    <AlertProvider>
      <html lang="en">
        <body
          className={`${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
          <Alert />
        </body>
      </html>
    </AlertProvider>
  );
}
