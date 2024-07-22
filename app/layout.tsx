import type { Metadata } from "next";
import { Inter,DM_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const dm = DM_Sans({subsets:["latin"]})

export const metadata: Metadata = {
  title: "Urlyss KAMTO",
  description: "Portfolio website of Urlyss KAMTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-primary/10 py-32 mx-auto max-w-7xl px-4",dm.className)}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Menu />
        </ThemeProvider>
        {children}</body>
    </html>
  );
}
