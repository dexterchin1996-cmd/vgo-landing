export const SITE_CONFIG = {
  name: "V'GO",
  domain: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  contact: {
    whatsapp: 'https://wa.me/601172691788',
    email: 'hello@vgo.com.my',
    location: 'Kota Kinabalu, Sabah, Malaysia',
  },
  meta: {
    title: "V'GO — 本地生活服务平台",
    description: '便捷、可靠、值得信赖',
  },
} as const;
