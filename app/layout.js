import "@/styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html className="m-0 p-0">
      <head />
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
