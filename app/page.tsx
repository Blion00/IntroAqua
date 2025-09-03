"use client";
import { useState } from "react";
import { Header } from "@/component/layout/Header";
import { HomePage } from "@/component/page/HomePage/HomePage";
import { CheckBillPage } from "@/component/page/CheckBillPage/CheckBillPage";
import { ReportLeakPage } from "@/component/page/ReportLeakPage/ReportLeakPage";
import { VirtualOfficePage } from "@/component/page/VirtualOfficePage/VirtualOfficePage";
import { NewsPage } from "@/component/page/NewsPage/NewsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'check-bill':
        return <CheckBillPage onNavigate={handleNavigate} />;
      case 'report-leak':
        return <ReportLeakPage onNavigate={handleNavigate} />;
      case 'virtual-office':
        return <VirtualOfficePage onNavigate={handleNavigate} />;
      case 'news':
        return <NewsPage onNavigate={handleNavigate} />;
      case 'payments':
        return <CheckBillPage onNavigate={handleNavigate} />;
      case 'help':
        return (
          <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center">
            <div className="text-center max-w-2xl mx-auto px-4">
              <h1 className="text-3xl font-bold text-[#222222] mb-4">
                Liên hệ
              </h1>
              <p className="text-[#222222] opacity-70 mb-6">
                Trang này sẽ chứa các câu hỏi thường gặp, thông tin liên hệ và tài nguyên hỗ trợ.
              </p>
              <button
                onClick={() => handleNavigate('home')}
                className="bg-[#0055A4] hover:bg-[#004494] text-white px-6 py-2 rounded-lg"
              >
                Về Trang chủ
              </button>
            </div>
          </div>
        );
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-[#222222] text-white py-12 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#0055A4] mb-4">IntroAqua</div>
              <p className="text-gray-300">
                Đối tác đáng tin cậy của bạn cho các dịch vụ nước chất lượng tại Việt Nam.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liên kết Nhanh</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button 
                    onClick={() => handleNavigate('check-bill')}
                    className="hover:text-[#0055A4] transition-colors"
                  >
                    Tra cứu Hóa đơn
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('report-leak')}
                    className="hover:text-[#0055A4] transition-colors"
                  >
                    Báo cáo Vấn đề
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigate('virtual-office')}
                    className="hover:text-[#0055A4] transition-colors"
                  >
                    Văn phòng Ảo
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Thông tin Liên hệ</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Khẩn cấp: 911</li>
                <li>Chăm sóc Khách hàng: 1-800-INTRO-INFO</li>
                <li>Email: info@introaqua.vn</li>
                <li>Giờ làm việc: T2-T6 8AM-5PM</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Theo dõi chúng tôi</h4>
              <p className="text-gray-300 mb-4">
                Giữ kết nối để nhận những cập nhật và tin tức mới nhất.
              </p>
              <div className="flex space-x-4">
                <button className="text-gray-300 hover:text-[#0055A4] transition-colors">
                  Facebook
                </button>
                <button className="text-gray-300 hover:text-[#0055A4] transition-colors">
                  Twitter
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 IntroAqua - Công ty Cấp nước và Vệ sinh Môi trường. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}