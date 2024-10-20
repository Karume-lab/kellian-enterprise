import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Footer, Header } from "@/components";
import { ThemeProvider } from "@/components/core/utils/ThemeProvider";
import { ModalProvider } from "@/hooks/use-modal";

const firaSans = Fira_Sans({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
});


export const metadata: Metadata = siteConfig.nextMetada;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={`${firaSans.className}`}>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>
            <Header />
            <div className="flex-grow mt-12 lg:mt-24">
              {children}
            </div>
            <Footer />
          </ModalProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}


export default RootLayout;
