import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { MealPlannerProvider } from "@/components/MealPlannerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NaijaMeals - Nigerian Meal Planner",
  description: "Plan your weekly Nigerian meals with authentic recipes from top creators. Generate grocery lists automatically.",
  keywords: ["Nigerian food", "meal planning", "African recipes", "Jollof rice", "Egusi soup"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <MealPlannerProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-100 py-8 mt-12">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
              <p>NaijaMeals - Authentic Nigerian recipes from creators you love</p>
              <p className="mt-2">
                Recipes inspired by Sisi Yemmie, Sisi Jemimah, Zeelicious Foods, and more
              </p>
            </div>
          </footer>
        </MealPlannerProvider>
      </body>
    </html>
  );
}
