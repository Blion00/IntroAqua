import { useState } from "react";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Download, ArrowLeft } from "lucide-react";

interface CheckBillPageProps {
  onNavigate: (page: string) => void;
}

export function CheckBillPage({ onNavigate }: CheckBillPageProps) {
  const [nicNumber, setNicNumber] = useState("");
  const [showBill, setShowBill] = useState(false);

  const handleCheckStatus = () => {
    if (nicNumber.trim()) {
      setShowBill(true);
    }
  };

  const handlePayNow = () => {
    alert("Chức năng thanh toán sẽ chuyển hướng đến cổng thanh toán an toàn");
  };

  const handleDownloadPDF = () => {
    alert("Tải xuống PDF sẽ tạo và tải xuống hóa đơn");
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('home')}
          className="mb-6 text-[#0055A4] hover:bg-[#E6F0FA]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Trở Về
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#222222] mb-4">
            Tra cứu và Thanh toán Hóa đơn
          </h1>
          <p className="text-[#222222] opacity-70">
            Nhập số CMND/CCCD của bạn để xem hóa đơn hiện tại và thực hiện thanh toán
          </p>
        </div>

        {!showBill ? (
          <Card className="max-w-md mx-auto bg-white">
            <CardHeader>
              <CardTitle className="text-center text-[#222222]">
                Nhập thông tin của bạn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nic" className="text-[#222222]">
                  Số CMND/CCCD
                </Label>
                <Input
                  id="nic"
                  type="text"
                  placeholder="Nhập số CMND/CCCD của bạn"
                  value={nicNumber}
                  onChange={(e) => setNicNumber(e.target.value)}
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
                <p className="text-sm text-[#222222] opacity-60">
                  Bạn có thể tìm thấy trong hóa đơn
                </p>
              </div>
              <Button 
                onClick={handleCheckStatus}
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
                disabled={!nicNumber.trim()}
              >
                Tra cứu Trạng thái
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {/* Bill Details Card */}
            <Card className="bg-white">
              <CardHeader className="bg-[#E6F0FA]">
                <CardTitle className="text-[#222222]">
                  Chi tiết Hóa đơn
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#222222] opacity-70">Chủ tài khoản</Label>
                      <p className="text-[#222222] font-medium">Nguyễn Văn A</p>
                    </div>
                    <div>
                      <Label className="text-[#222222] opacity-70">Số tài khoản</Label>
                      <p className="text-[#222222] font-medium">WAT-2024-001234</p>
                    </div>
                    <div>
                      <Label className="text-[#222222] opacity-70">Địa chỉ dịch vụ</Label>
                      <p className="text-[#222222] font-medium">
                        Đường Trần Hưng Đạo 123, Quận 1, TP.HCM
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-[#222222] opacity-70">Kỳ thanh toán</Label>
                      <p className="text-[#222222] font-medium">1 - 31 tháng 12, 2024</p>
                    </div>
                    <div>
                      <Label className="text-[#222222] opacity-70">Lượng nước tiêu thụ</Label>
                      <p className="text-[#222222] font-medium">18.5 m³</p>
                    </div>
                    <div>
                      <Label className="text-[#222222] opacity-70">Số dư trước</Label>
                      <p className="text-[#222222] font-medium">₫0.00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Summary Card */}
            <Card className="bg-white">
              <CardHeader className="bg-[#E6F0FA]">
                <CardTitle className="text-[#222222]">
                  Tóm tắt Thanh toán
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#222222]">Dịch vụ nước</span>
                    <span className="text-[#222222]">₫12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#222222]">Dịch vụ thoát nước</span>
                    <span className="text-[#222222]">₫3,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#222222]">Phí môi trường</span>
                    <span className="text-[#222222]">₫1,200</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span className="text-[#222222]">Tổng cộng</span>
                      <span className="text-[#0055A4] text-xl">₫17,400</span>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[#222222]">Hạn thanh toán</span>
                      <span className="text-red-600 font-medium">15 tháng 1, 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handlePayNow}
                className="flex-1 bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
              >
                Thanh toán Ngay - ₫17,400
              </Button>
              <Button 
                onClick={handleDownloadPDF}
                variant="outline"
                className="flex-1 border-[#0055A4] text-[#0055A4] hover:bg-[#E6F0FA]"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Tải xuống PDF
              </Button>
            </div>

            {/* Reset Button */}
            <div className="text-center">
              <Button 
                onClick={() => {
                  setShowBill(false);
                  setNicNumber("");
                }}
                variant="ghost"
                className="text-[#0055A4] hover:bg-[#E6F0FA]"
              >
                Tra cứu Hóa đơn Khác
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}