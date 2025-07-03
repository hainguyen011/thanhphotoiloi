import { useEffect, useState } from "react";
import { redirect, RedirectType } from 'next/navigation'
import "./AppHeader.scss"

const AppHeader = () => {
    const [scrollDirection, setScrollDirection] = useState< "default" |"up" | "down" | null>("default");
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            if(window.scrollY === 0) {
                setScrollDirection("default")
            }
            else if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            } 
            lastScrollY = currentScrollY;

            console.log()
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
    }, []);

    
    return <div className={"Header px-10 " + (scrollDirection === "down" ? "header-active ": " ") + (scrollDirection === "default" ? "fixed": "")}>
        <div className="container mx-auto h-full">
            <div className="header-content flex h-full justify-between items-center">
                <div className="logo">
                    <h3>Thành Phố Tội Lỗi</h3>
                </div>

                <div className="h-full ">
                    <ul className="menu px-20 flex h-full  items-center">
                        <li className="h-full flex items-center"><span>Cộng đồng</span></li>
                        <li className="h-full flex items-center"onClick={()=> redirect('/discover', RedirectType.replace)}><span>Khám phá</span></li>
                        <li className="h-full flex items-center"><span>Đội ngũ phát triển</span></li>
                    </ul>
                </div>
                <div className="actions">
                    <button type="button" className=" text-white border border-gray-200  font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2">
                        Cộng đồng discord
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default AppHeader