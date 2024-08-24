import type { Metadata } from "next";
import { Providers } from "@/components/shared/Providers";
import { Navbar } from "@/components/shared/Navbar";

export const metadata: Metadata = {
  title: "Marketplace",
  description: "",
};

export default function RootLayout({
  parent,
  children,
}: Readonly<{
  parent: RecordingState.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ paddingBottom: "100px" }}>
        <Providers>
          <Navbar />
          {parent}
          {children}
        </Providers>
      </body>
    </html>
  );
}
