import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Badge } from "@/component/ui/badge";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";

interface NewsPageProps {
  onNavigate: (page: string) => void;
}

export function NewsPage({ onNavigate }: NewsPageProps) {
  const newsItems = [
    {
      id: 1,
      title: "Bảo trì Định kỳ tại Trung tâm TP.HCM",
      date: "8 tháng 1, 2025",
      time: "2 giờ trước",
      category: "Cập nhật Dịch vụ",
      summary: "Chúng tôi sẽ thực hiện bảo trì định kỳ hệ thống phân phối nước tại khu vực trung tâm. Dịch vụ có thể bị gián đoạn tạm thời.",
      content: "Đội ngũ kỹ thuật của chúng tôi sẽ thực hiện công việc bảo trì cần thiết trên các đường ống chính phân phối nước phục vụ trung tâm TP.HCM vào ngày 12 tháng 1 năm 2025, từ 6:00 sáng đến 2:00 chiều. Bảo trì này cần thiết để đảm bảo dịch vụ liên tục đáng tin cậy và cải thiện áp lực nước trong khu vực.",
      priority: "high"
    },
    {
      id: 2,
      title: "Tùy chọn Thanh toán Trực tuyến Mới có sẵn",
      date: "5 tháng 1, 2025",
      time: "3 ngày trước",
      category: "Cập nhật Hệ thống",
      summary: "Chúng tôi đã thêm các phương thức thanh toán mới thuận tiện để việc thanh toán hóa đơn nước trở nên dễ dàng hơn bao giờ hết.",
      content: "Từ tuần này, khách hàng giờ đây có thể thanh toán hóa đơn nước bằng ví điện tử, chuyển khoản ngân hàng và tiền điện tử. Truy cập Văn phòng Ảo của chúng tôi để thiết lập thanh toán tự động và không bao giờ bỏ lỡ hạn thanh toán.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Chương trình Tiết kiệm Nước được Khởi động",
      date: "2 tháng 1, 2025",
      time: "1 tuần trước",
      category: "Cộng đồng",
      summary: "Tham gia sáng kiến tiết kiệm nước mới của chúng tôi và nhận phần thưởng khi giảm tiêu thụ nước.",
      content: "IntroAqua tự hào khởi động chương trình tiết kiệm nước mới. Khách hàng giảm tiêu thụ nước 15% trở lên so với năm trước sẽ nhận được giảm giá 10% cho hóa đơn tiếp theo. Tìm hiểu về các mẹo tiết kiệm nước và tham gia các hội thảo cộng đồng của chúng tôi.",
      priority: "low"
    },
    {
      id: 4,
      title: "Cập nhật Lịch Dịch vụ Giáng sinh",
      date: "28 tháng 12, 2024",
      time: "2 tuần trước",
      category: "Cập nhật Dịch vụ",
      summary: "Văn phòng chăm sóc khách hàng của chúng tôi sẽ có lịch làm việc thay đổi trong mùa Giáng sinh.",
      content: "Vui lòng lưu ý rằng văn phòng chăm sóc khách hàng của chúng tôi sẽ hoạt động với lịch làm việc rút gọn từ ngày 30 tháng 12 năm 2024 đến ngày 3 tháng 1 năm 2025. Dịch vụ khẩn cấp vẫn có sẵn 24/7. Văn phòng Ảo và các dịch vụ trực tuyến tiếp tục hoạt động bình thường.",
      priority: "medium"
    },
    {
      id: 5,
      title: "Mở rộng Cơ sở hạ tầng tại Tỉnh Đồng Nai",
      date: "20 tháng 12, 2024",
      time: "3 tuần trước",
      category: "Cơ sở hạ tầng",
      summary: "Cải tiến cơ sở hạ tầng quan trọng đang được tiến hành để phục vụ nhiều cộng đồng hơn tại Tỉnh Đồng Nai.",
      content: "IntroAqua đã bắt đầu xây dựng nhà máy xử lý nước mới và mạng lưới phân phối sẽ cung cấp dịch vụ nước đáng tin cậy cho 15,000 cư dân bổ sung tại Tỉnh Đồng Nai. Dự án dự kiến hoàn thành vào giữa năm 2025.",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleReadMore = (id: number) => {
    const newsItem = newsItems.find(item => item.id === id);
    if (newsItem) {
      alert(`Bài viết Đầy đủ: ${newsItem.title}\n\n${newsItem.content}`);
    }
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
          Về Trang chủ
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#222222] mb-4">
            Tin tức và Thông báo
          </h1>
          <p className="text-[#222222] opacity-70">
            Cập nhật với những tin tức mới nhất, cập nhật dịch vụ và thông báo quan trọng
          </p>
        </div>

        {/* Featured News */}
        <Card className="mb-8 bg-white border-2 border-[#0055A4]">
          <CardHeader className="bg-[#0055A4] text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Thông báo Nổi bật</CardTitle>
              <Badge className="bg-white text-[#0055A4]">
                Quan trọng
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-[#222222] mb-2">
              {newsItems[0].title}
            </h3>
            <div className="flex items-center gap-4 text-[#222222] opacity-70 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{newsItems[0].date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{newsItems[0].time}</span>
              </div>
            </div>
            <p className="text-[#222222] mb-4">
              {newsItems[0].content}
            </p>
            <Button 
              onClick={() => handleReadMore(newsItems[0].id)}
              className="bg-[#0055A4] hover:bg-[#004494] text-white"
            >
              Đọc Thêm
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* News List */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#222222]">
            Cập nhật Gần đây
          </h2>

          <div className="grid gap-6">
            {newsItems.slice(1).map((item) => (
              <Card key={item.id} className="bg-white hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-[#E6F0FA] text-[#0055A4]"
                        >
                          {item.category}
                        </Badge>
                        <Badge 
                          variant="outline"
                          className={getPriorityColor(item.priority)}
                        >
                          {item.priority === 'high' ? 'Ưu tiên Cao' : 
                           item.priority === 'medium' ? 'Ưu tiên Trung bình' : 'Thông tin'}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold text-[#222222] mb-2">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-[#222222] opacity-70 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      </div>
                      
                      <p className="text-[#222222] opacity-80 mb-4">
                        {item.summary}
                      </p>
                    </div>
                    
                    <div className="sm:ml-6">
                      <Button 
                        onClick={() => handleReadMore(item.id)}
                        variant="outline"
                        className="border-[#0055A4] text-[#0055A4] hover:bg-[#E6F0FA]"
                      >
                        Đọc Thêm
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            className="border-[#0055A4] text-[#0055A4] hover:bg-[#E6F0FA]"
            onClick={() => alert("Sẽ tải thêm bài viết tin tức")}
          >
            Tải Thêm Bài viết
          </Button>
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-8 bg-[#E6F0FA] border-[#0055A4]">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-bold text-[#222222] mb-2">
              Giữ Thông tin
            </h3>
            <p className="text-[#222222] opacity-70 mb-4">
              Đăng ký bản tin của chúng tôi để nhận cập nhật quan trọng trực tiếp vào email
            </p>
            <Button 
              className="bg-[#0055A4] hover:bg-[#004494] text-white"
              onClick={() => alert("Đăng ký bản tin sẽ mở form đăng ký email")}
            >
              Đăng ký Bản tin
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}