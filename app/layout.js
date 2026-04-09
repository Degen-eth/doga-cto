import "./globals.css";

export const metadata = {
  title: "American Doge - DOGA CTO | Ethereum",
  description: "DOGA CTO - America&apos;s memecoin on Ethereum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
