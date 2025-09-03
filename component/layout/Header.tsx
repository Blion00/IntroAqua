import { Button } from "@/component/ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'check-bill', label: 'Tra cứu hóa đơn' },
    { id: 'report-leak', label: 'Báo cáo rò rỉ' },
    { id: 'payments', label: 'Thanh toán' },
    { id: 'virtual-office', label: 'Văn phòng ảo' },
    { id: 'news', label: 'Tin tức' },
    { id: 'help', label: 'Trợ giúp / Liên hệ' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
                          <div 
                className="text-2xl font-bold text-[#0055A4] cursor-pointer"
                onClick={() => onNavigate('home')}
              >
                IntroAqua
              </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => onNavigate(item.id)}
                className={`${
                  currentPage === item.id 
                    ? "bg-[#0055A4] text-white" 
                    : "text-[#222222] hover:text-[#0055A4] hover:bg-[#E6F0FA]"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-[#222222] hover:text-[#0055A4]"
            >
              Menu
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              onClick={() => onNavigate(item.id)}
              className={`w-full justify-start ${
                currentPage === item.id 
                  ? "bg-[#0055A4] text-white" 
                  : "text-[#222222] hover:text-[#0055A4] hover:bg-[#E6F0FA]"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}