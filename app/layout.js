import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html className="m-0 p-0">
      <head />
      <body className="h-screen w-screen">
        {children} <Analytics />
      </body>
    </html>
  );
}
