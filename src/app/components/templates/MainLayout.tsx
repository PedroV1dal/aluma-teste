import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const MainLayout = ({ children, title }: MainLayoutProps) => (
  <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-6">
    <div className="text-center w-full max-w-lg mx-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
        {title}
      </h1>
      <div className="max-h-[calc(100vh-150px)] overflow-y-auto">
        {children}
      </div>
    </div>
  </main>
);
