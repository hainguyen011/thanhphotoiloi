// app/dashboard/layout.tsx
'use client'
import { ReactNode } from 'react'
import Header from '@/components/admin/Header/Header'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar (bạn có thể mở comment nếu có) */}
      {/* <Sidebar /> */}

      {/* Nội dung chính */}
      <div className="flex flex-col flex-1">
        <Header />

        {/* Main content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
