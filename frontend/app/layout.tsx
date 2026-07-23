import "./globals.css";

export const metadata = {
  title: "MetricMind",
  description: "AI Powered Business Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
