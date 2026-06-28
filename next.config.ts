/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // เปลี่ยนเป็นโดเมนเว็บที่คุณจะไปดึงรูปมา
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com', // ใส่เพิ่มได้ถ้ามีหลายเว็บ
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
