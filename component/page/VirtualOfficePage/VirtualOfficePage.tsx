import { useState } from "react";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

interface VirtualOfficePageProps {
  onNavigate: (page: string) => void;
}

export function VirtualOfficePage({ onNavigate }: VirtualOfficePageProps) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      alert("Chức năng đăng nhập sẽ xác thực người dùng và chuyển hướng đến bảng điều khiển");
    }
  };

  const handleForgotPassword = () => {
    alert("Khôi phục mật khẩu sẽ gửi hướng dẫn đặt lại đến email đã đăng ký");
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  if (isRegistering) {
    return (
      <div className="min-h-screen bg-[#F7F7F7]">
        <div className="max-w-md mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => setIsRegistering(false)}
            className="mb-6 text-[#0055A4] hover:bg-[#E6F0FA]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Về Đăng nhập
          </Button>

          <Card className="bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-[#222222]">
                Đăng ký Văn phòng Ảo
              </CardTitle>
              <p className="text-[#222222] opacity-70">
                Tạo tài khoản để truy cập các dịch vụ trực tuyến
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="reg-nic" className="text-[#222222]">
                  Số CMND/CCCD *
                </Label>
                <Input
                  id="reg-nic"
                  type="text"
                  placeholder="Nhập số CMND/CCCD của bạn"
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-account" className="text-[#222222]">
                  Số tài khoản *
                </Label>
                <Input
                  id="reg-account"
                  type="text"
                  placeholder="Nhập số tài khoản nước của bạn"
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
                <p className="text-sm text-[#222222] opacity-60">
                  Có thể tìm thấy trong hóa đơn nước của bạn
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-email" className="text-[#222222]">
                  Email *
                </Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-username" className="text-[#222222]">
                  Tạo Tên đăng nhập *
                </Label>
                <Input
                  id="reg-username"
                  type="text"
                  placeholder="Chọn tên đăng nhập"
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reg-password" className="text-[#222222]">
                  Tạo Mật khẩu *
                </Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Chọn mật khẩu an toàn"
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
              </div>

              <Button 
                onClick={() => alert("Đăng ký sẽ tạo tài khoản và gửi email xác nhận")}
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
              >
                Tạo Tài khoản
              </Button>

              <div className="text-center">
                <p className="text-sm text-[#222222] opacity-60">
                  Khi đăng ký, bạn đồng ý với Điều khoản Dịch vụ và Chính sách Bảo mật của chúng tôi
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="max-w-md mx-auto px-4 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('home')}
          className="mb-6 text-[#0055A4] hover:bg-[#E6F0FA]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Về Trang chủ
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#222222] mb-4">
            Văn phòng Ảo
          </h1>
          <p className="text-[#222222] opacity-70">
            Truy cập tài khoản và quản lý dịch vụ nước trực tuyến
          </p>
        </div>

        <Card className="bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-[#222222]">
              Đăng nhập vào Tài khoản
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[#222222]">
                  Tên đăng nhập
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Nhập tên đăng nhập của bạn"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  required
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#222222]">
                  Mật khẩu
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu của bạn"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0055A4]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
                disabled={!loginData.username || !loginData.password}
              >
                Đăng nhập
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={handleForgotPassword}
                  className="text-[#0055A4] hover:bg-[#E6F0FA]"
                >
                  Quên mật khẩu?
                </Button>
              </div>

              <div className="border-t pt-4">
                <div className="text-center">
                  <p className="text-[#222222] opacity-70 mb-3">
                    Chưa có tài khoản?
                  </p>
                  <Button
                    onClick={handleRegister}
                    variant="outline"
                    className="w-full border-[#0055A4] text-[#0055A4] hover:bg-[#E6F0FA]"
                    size="lg"
                  >
                    Đăng ký lần đầu
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-6 bg-[#E6F0FA] border-[#0055A4]">
          <CardContent className="p-4">
            <h3 className="font-semibold text-[#222222] mb-2">
              Với Văn phòng Ảo bạn có thể:
            </h3>
            <ul className="space-y-1 text-sm text-[#222222] opacity-70">
              <li>• Xem và thanh toán hóa đơn trực tuyến</li>
              <li>• Tra cứu lịch sử tiêu thụ</li>
              <li>• Cập nhật thông tin tài khoản</li>
              <li>• Thiết lập thanh toán tự động</li>
              <li>• Theo dõi yêu cầu dịch vụ</li>
              <li>• Nhận thông báo quan trọng</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}