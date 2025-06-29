'use client'
import ThemeToggle from "@/components/ui/ThemeToggleButton";
import Image from "next/image";
import "./home.scss"
import AppHeader from "@/components/ui/AppHeader/AppHeader";
import { useRouter } from 'next/navigation'
import { text } from "stream/consumers";


export default function Home() {
  const router = useRouter()

  const handleClickDashboard = () => {
    router.push('/dashboard') // ← Thay đường dẫn tùy bạn
  }

  return (
    <div className="Home grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16  font-[family-name:var(--font-geist-sans)]">
      <div className="app-header grid-cols-4">
        <AppHeader />
      </div>
      <main>
        <div className="overlay fade-linear neon-fade-slow ">
          <Image
            src="/images/overlay3.jpg"
            alt="GTA V style city"
            width={1500}
            height={800}
            priority // preload ảnh, dùng cho ảnh background đầu trang
            className="object-cover fade-edge"
          />

        </div>
        <div className="container flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="hero-typho-001">
            <div className="logo">

            </div>
            <h2>HARD ROLEPLAY</h2>
            <h1 className="title">Thành Phố Tội Lỗi</h1>

            <p>Thành Phố Tội Lỗi là một server GTA V Roleplay Việt Nam được xây dựng với mục tiêu mang đến một thế giới nhập vai chân thực, nơi mỗi người chơi đều có cơ hội bắt đầu một cuộc sống thứ hai theo cách của riêng mình. Lấy bối cảnh một thành phố hiện đại đầy biến động, thành phố mở ra một xã hội thu nhỏ với đủ mọi tầng lớp: từ cảnh sát, bác sĩ, doanh nhân, cho đến những băng đảng tội phạm nguy hiểm. Tham gia cùng chúng tôi để viết lên câu chuyện của chính mình và gặp gỡ thêm nhiều người bạn mới.</p>
            <a href="https://cfx.re/join/g7jr5m" target="_blank" type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:outline-none   shadow-lg  dark:shadow-lg dark:text-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-6">PLAY NOW</a>
            <a href="https://discord.gg/RsPNrDWjZu" target="_blank" type="button" className="text-white   focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
              Tham gia discord
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>

          {/* <div className="hero-section-001 flex flex-wrap">
            <h2 className="title-main section-col" style={{ textAlign: "center" }}>Bạn sẽ trở thành ai ?</h2>
            <div className="section-col flex-3/3">
              <Image
                src="/images/image1.jpg"
                alt="GTA V style city"
                width={800}
                height={800}
                priority // preload ảnh, dùng cho ảnh background đầu trang
                className="object-cover fade-linear"
              />
            </div>
            <div className="section-col flex-1/3">hehehe</div>
            <div className="section-col flex-1/3">hehehe</div>
          </div> */}


          <div className="hero-section-002 flex flex-wrap" id="our-values">
            <h2 style={{ textAlign: "center" }} className="title-main">Giá trị & Mục tiêu</h2>
            <div className="section-col">
              <h2 >XÂY DỰNG CỘNG ĐỒNG <span style={{ color: " rgba(214, 0, 0, 0.829)" }}>ROLEPLAY</span></h2>
              <p>Trong thế giới ảo rộng lớn, điều khiến một thành phố trở nên khác biệt không chỉ là đồ họa hay lối chơi – mà chính là cộng đồng. Chúng tôi hiểu rằng một cộng đồng mạnh không tự nhiên mà có. Nó được xây dựng từ sự tôn trọng, giao tiếp, và tinh thần nhập vai nghiêm túc của từng thành viên.
                Tại đây, mỗi người chơi không chỉ là một nhân vật – mà là một phần của câu chuyện lớn. Bạn có thể trở thành bất kỳ ai: một cảnh sát tận tâm, một doanh nhân thành đạt, hay một kẻ nổi loạn mưu trí. Nhưng dù bạn là ai, bạn sẽ luôn được lắng nghe, hỗ trợ và tôn trọng.
                Chúng tôi đặt mục tiêu tạo ra một môi trường nơi mọi người có thể sống đúng với vai diễn của mình – không bị phân biệt, không bị bỏ rơi. Cộng đồng của chúng tôi không chấp nhận sự độc hại, phá game hay phân biệt đối xử. Ở đây, mọi người cùng nhau viết nên những câu chuyện, xây dựng những mối quan hệ và phát triển thế giới nhập vai theo cách riêng.
                Chúng tôi tin rằng một server tốt là một nơi mà bạn không chỉ chơi, mà còn muốn gắn bó.</p>

            </div>

            <div className="section-col flex-1/3">
              <h2 style={{ fontSize: "2em" }}>CÔNG BẰNG</h2>
              <p>Sự công bằng không chỉ là nền tảng để một server roleplay vận hành hiệu quả, mà còn là yếu tố tạo nên một cộng đồng bền vững và đáng tin cậy.
                Công bằng được thể hiện từ những điều căn bản nhất – một hệ thống ổn định, gameplay mượt mà, đến từng chi tiết nhỏ trong trải nghiệm nhập vai đều được đầu tư tỉ mỉ để tất cả người chơi, dù mới hay lâu năm, đều có cơ hội phát triển và tỏa sáng như nhau.
                Chúng tôi tạo ra một môi trường mà ở đó luật lệ được áp dụng minh bạch, vai trò của mỗi cá nhân được tôn trọng, và không ai bị bỏ lại phía sau. </p>
              <p>Mỗi hành động đều mang trọng lượng, mỗi quyết định đều có hậu quả – đúng với tinh thần nhập vai chân thực.
                Với chúng tôi, công bằng không chỉ là nguyên tắc – đó là cam kết, là kim chỉ nam trong mọi lựa chọn phát triển và điều hành cộng đồng.</p>
            </div>
            
            <div className="section-image flex-3/3">
              <Image
                src="/images/image2.jpg"
                alt="GTA V style city"
                width={2000}
                height={400}
                priority // preload ảnh, dùng cho ảnh background đầu trang
                className="object-cover fade-linear"
              />
            </div>
            <div className="section-col flex-1/3">
              <h2 style={{ fontSize: "2em" }}>KHÔNG P2W</h2>
              <p>Chúng tôi hiểu rằng một thế giới nhập vai đúng nghĩa phải bắt đầu từ sự công bằng và minh bạch. Vì thế, server cam kết hoàn toàn không “Pay to Win” – không có việc dùng tiền để vượt trội người khác, không có đặc quyền mua bằng ví tiền.</p>
              <p>Chúng tôi tin rằng khi loại bỏ yếu tố "trả tiền để thắng", mỗi người chơi sẽ cảm nhận rõ hơn giá trị của từng thành tựu, từng mối quan hệ và từng lựa chọn trong cuộc sống. Đây không chỉ là một server, mà là nơi bạn có thể bắt đầu lại từ con số 0 như bao người khác và tự mình viết nên câu chuyện riêng.</p>
            </div>
            <div className="section-col flex-1/3">
              <h2 style={{ fontSize: "2em" }}>CHẤT LƯỢNG & CHÂN THỰC</h2>
              <p>Bên cạnh chất lượng vận hành, yếu tố “chân thực” còn thể hiện qua cách chúng tôi xây dựng môi trường cộng đồng – nơi luật lệ rõ ràng, vai trò được tôn trọng, và mọi người cùng nhau giữ gìn không khí nhập vai nghiêm túc, sáng tạo nhưng không gò bó.</p>
              <p>Từ hình ảnh, âm thanh đến từng chi tiết trong gameplay, chúng tôi luôn đầu tư để mang đến cảm giác nhập vai gần với thực tế nhất, giúp bạn thực sự “sống” trong một thế giới thứ hai, nơi mỗi lựa chọn đều mang ý nghĩa.</p>
            </div>
            <div className="section-col flex-3/3">
              <h2><span style={{ color: " rgba(214, 0, 0, 0.829)" }}>SÁNG TẠO</span> & PHÁT TRIỂN</h2>
              <p>Chúng tôi không xem server là một sản phẩm đã hoàn chỉnh – mà là một hành trình không ngừng phát triển. Mỗi bản cập nhật, mỗi phản hồi từ cộng đồng đều là động lực để chúng tôi cải tiến hệ thống, tối ưu hóa trải nghiệm và mở rộng thế giới nhập vai ngày càng phong phú hơn.
                Chúng tôi lắng nghe người chơi. Chúng tôi thử nghiệm ý tưởng mới. Và chúng tôi không ngại thay đổi – miễn là những thay đổi đó mang lại giá trị thực cho cộng đồng.
                Phát triển đối với chúng tôi không chỉ là thêm tính năng, mà là nuôi dưỡng một môi trường bền vững, công bằng và đáng tin cậy.
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
