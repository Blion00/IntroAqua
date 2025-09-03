import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IntroAqua - Quản lý Dịch vụ Nước",
  description: "Đối tác đáng tin cậy của bạn cho các dịch vụ nước chất lượng tại Việt Nam. Tra cứu hóa đơn, báo cáo vấn đề, và quản lý tài khoản trực tuyến.",
  keywords: "nước, dịch vụ nước, hóa đơn nước, thanh toán nước, IntroAqua, Việt Nam",
  authors: [{ name: "IntroAqua" }],
  creator: "IntroAqua",
  publisher: "IntroAqua",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://introaqua.vn'),
  openGraph: {
    title: "IntroAqua - Quản lý Dịch vụ Nước",
    description: "Đối tác đáng tin cậy của bạn cho các dịch vụ nước chất lượng tại Việt Nam",
    url: 'https://introaqua.vn',
    siteName: 'IntroAqua',
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IntroAqua - Quản lý Dịch vụ Nước",
    description: "Đối tác đáng tin cậy của bạn cho các dịch vụ nước chất lượng tại Việt Nam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}


