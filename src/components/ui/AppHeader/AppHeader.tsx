import "./AppHeader.scss"

const AppHeader = () => {
    return <div className="Header ">
        <div className="container mx-auto h-full">
            <div className="header-content flex h-full justify-between items-center">
                <div className="logo">
                    <h3>Thành Phố Tội Lỗi</h3>
                </div>

                <div>
                    <ul  className="menu flex h-full  gap-x-5 ">
                        <li>Cộng đồng</li>
                        <li>Khám phá</li>
                        <li>Đội ngũ phát triển</li>
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