import { Button } from "@/component/ui/button";
import { Card, CardContent } from "@/component/ui/card";
import { FileText, AlertTriangle, User } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0055A4] to-[#0066CC] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quản lý dịch vụ nước dễ dàng hơn bao giờ hết!
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Đối tác đáng tin cậy của bạn cho các dịch vụ nước chất lượng
          </p>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Check and Pay Bill */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white border-2 border-transparent hover:border-[#0055A4]"
            onClick={() => onNavigate('check-bill')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#E6F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#0055A4]" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  Tra cứu và Thanh toán
                </h3>
                <p className="text-[#222222] opacity-70">
                  Tra cứu hóa đơn hiện tại và thực hiện thanh toán an toàn trực tuyến
                </p>
              </div>
              <Button 
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
              >
                Bắt đầu
              </Button>
            </CardContent>
          </Card>

          {/* Report Leak or Issue */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white border-2 border-transparent hover:border-[#0055A4]"
            onClick={() => onNavigate('report-leak')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#E6F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#0055A4]" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  Báo cáo Rò rỉ hoặc Vấn đề
                </h3>
                <p className="text-[#222222] opacity-70">
                  Báo cáo rò rỉ nước hoặc vấn đề dịch vụ trong khu vực của bạn
                </p>
              </div>
              <Button 
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
              >
                Báo cáo Ngay
              </Button>
            </CardContent>
          </Card>

          {/* Access My Account */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white border-2 border-transparent hover:border-[#0055A4]"
            onClick={() => onNavigate('virtual-office')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#E6F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-[#0055A4]" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">
                  Truy cập Tài khoản của tôi
                </h3>
                <p className="text-[#222222] opacity-70">
                  Quản lý tài khoản và truy cập các dịch vụ văn phòng ảo
                </p>
              </div>
              <Button 
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
              >
                Đăng nhập
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-[#222222] mb-6">
            Tại sao chọn IntroAqua?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-[#222222] mb-2">Dịch vụ 24/7</h4>
              <p className="text-[#222222] opacity-70">
                Hỗ trợ 24 giờ cho tất cả nhu cầu dịch vụ nước của bạn
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#222222] mb-2">Cung cấp Đáng tin cậy</h4>
              <p className="text-[#222222] opacity-70">
                Cung cấp nước ổn định và chất lượng cao cho ngôi nhà của bạn
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-[#222222] mb-2">Quản lý Dễ dàng</h4>
              <p className="text-[#222222] opacity-70">
                Công cụ trực tuyến đơn giản để quản lý tài khoản và dịch vụ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}