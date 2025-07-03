'use client'

import AppHeader from '@/components/ui/AppHeader/AppHeader'
import React from 'react'
import "./discover.scss"
import Image from 'next/image'

const Discover = () => {
    return (
        <div className="Discover grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="app-header grid-cols-4">
                <AppHeader />
            </div>
            <main>
                <div className="overlay fade-linear neon-fade-slow ">
                    <Image
                        src="/images/discover_banner2.jpg"
                        alt="GTA V style city"
                        width={1500}
                        height={800}
                        priority // preload ảnh, dùng cho ảnh background đầu trang
                        className="object-cover fade-edge"
                    />

                </div>
                <div className="sm-banner fade-linear neon-fade-slow ">
                    {/* <Image
                        src="/images/discover_banner2.jpg"
                        alt="GTA V style city"
                        width={1500}
                        height={400}
                        priority // preload ảnh, dùng cho ảnh background đầu trang
                        className="object-cover fade-edge"
                    /> */}
                </div>
                <div className="container flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <div className='discover-content'>
                        <div className='circle-slide'>
                            <div className='circle-slide-inner'>
                                <div className='circle-slide-'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Discover