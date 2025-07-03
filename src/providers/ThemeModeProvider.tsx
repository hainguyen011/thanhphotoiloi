'use client'

import { ThemeProvider } from "next-themes"
export function ThemeModeProvider({ children } : { children: React.ReactNode }) {
    return <ThemeProvider
        attribute="class"
        defaultTheme="dark"   // 👉 Mặc định là dark
        enableSystem={false}  // 👉 Tắt theo hệ thống
    >
        {children}
    </ThemeProvider>
}