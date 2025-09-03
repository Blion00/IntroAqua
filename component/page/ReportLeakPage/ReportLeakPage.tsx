import { useState } from "react";
import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Label } from "@/component/ui/label";
import { Textarea } from "@/component/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { ArrowLeft, Upload, CheckCircle } from "lucide-react";

interface ReportLeakPageProps {
  onNavigate: (page: string) => void;
}

export function ReportLeakPage({ onNavigate }: ReportLeakPageProps) {
  const [formData, setFormData] = useState({
    address: "",
    description: "",
    photo: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.address && formData.description) {
      const newTrackingNumber = "FUGA-" + Math.random().toString(36).substr(2, 9).toUpperCase();
      setTrackingNumber(newTrackingNumber);
      setSubmitted(true);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, photo: file });
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#F7F7F7]">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center">
            <Card className="bg-white">
              <CardContent className="p-8">
                <div className="mb-6">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h1 className="text-2xl font-bold text-[#222222] mb-4">
                    Báo cáo đã được gửi thành công!
                  </h1>
                  <p className="text-[#222222] opacity-70 mb-6">
                    Cảm ơn bạn đã báo cáo vấn đề này. Đội ngũ của chúng tôi sẽ điều tra và phản hồi sớm nhất có thể.
                  </p>
                </div>
                
                <div className="bg-[#E6F0FA] rounded-lg p-4 mb-6">
                  <Label className="text-[#222222] opacity-70">Số theo dõi</Label>
                  <p className="text-[#0055A4] font-bold text-xl">{trackingNumber}</p>
                  <p className="text-sm text-[#222222] opacity-60 mt-1">
                    Lưu số này để theo dõi báo cáo của bạn
                  </p>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ address: "", description: "", photo: null });
                      setTrackingNumber("");
                    }}
                    className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                    size="lg"
                  >
                    Báo cáo Vấn đề Khác
                  </Button>
                  <Button 
                    onClick={() => onNavigate('home')}
                    variant="outline"
                    className="w-full border-[#0055A4] text-[#0055A4] hover:bg-[#E6F0FA]"
                    size="lg"
                  >
                    Về Trang chủ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <div className="max-w-2xl mx-auto px-4 py-8">
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
            Báo cáo Rò rỉ hoặc Vấn đề
          </h1>
          <p className="text-[#222222] opacity-70">
            Giúp chúng tôi duy trì cơ sở hạ tầng nước bằng cách báo cáo các vấn đề
          </p>
        </div>

        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-[#222222]">
              Chi tiết Vấn đề
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Address Field */}
              <div className="space-y-2">
                <Label htmlFor="address" className="text-[#222222]">
                  Địa chỉ Chính xác *
                </Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Nhập vị trí chính xác của vấn đề"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
                <p className="text-sm text-[#222222] opacity-60">
                  Vui lòng càng cụ thể càng tốt (tên đường, số nhà, điểm mốc)
                </p>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label htmlFor="photo" className="text-[#222222]">
                  Đính kèm Ảnh (Tùy chọn)
                </Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0055A4] transition-colors">
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                  <label htmlFor="photo" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-[#222222] opacity-70">
                      {formData.photo ? formData.photo.name : "Nhấp để tải lên ảnh"}
                    </p>
                    <p className="text-sm text-[#222222] opacity-50 mt-1">
                      Ảnh giúp chúng tôi hiểu rõ hơn về vấn đề
                    </p>
                  </label>
                </div>
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-[#222222]">
                  Mô tả Vấn đề *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Mô tả vấn đề chi tiết (rò rỉ nước, vấn đề áp lực, vấn đề chất lượng nước, v.v.)"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  className="min-h-[120px] bg-white border-gray-300 focus:border-[#0055A4] focus:ring-[#0055A4]"
                />
                <p className="text-sm text-[#222222] opacity-60">
                  Bao gồm chi tiết như khi nào vấn đề bắt đầu, mức độ nghiêm trọng và bất kỳ thông tin liên quan nào khác
                </p>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-[#0055A4] hover:bg-[#004494] text-white"
                size="lg"
                disabled={!formData.address || !formData.description}
              >
                Gửi Báo cáo
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Information Card */}
        <Card className="mt-6 bg-[#E6F0FA] border-[#0055A4]">
          <CardContent className="p-6">
            <h3 className="font-semibold text-[#222222] mb-2">
              Điều gì xảy ra sau khi gửi báo cáo?
            </h3>
            <ul className="space-y-2 text-[#222222] opacity-70">
              <li>• Bạn sẽ nhận được số theo dõi để theo dõi báo cáo của mình</li>
              <li>• Đội ngũ kỹ thuật của chúng tôi sẽ xem xét báo cáo trong vòng 24 giờ</li>
              <li>• Đối với vấn đề khẩn cấp, chúng tôi sẽ liên hệ trực tiếp với bạn</li>
              <li>• Bạn sẽ nhận được cập nhật về tiến độ sửa chữa</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}