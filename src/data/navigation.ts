export const MAIN_NAV = [
  { href: '/', label: '首页' },
  { href: '/about', label: '关于我们' },
  { href: '/services/repair', label: '服务项目' },
  { href: '/how-it-works/intro', label: '使用流程' },
  { href: '/faq', label: '常见问题' },
  { href: '/contact', label: '联系我们' },
] as const;

export const FOOTER_LINKS = {
  services: [
    { href: '/services/repair', label: '维修服务' },
    { href: '/services/clean', label: '清洁服务' },
    { href: '/services/massage', label: '按摩服务' },
    { href: '/services/errand', label: '跑腿服务' },
  ],
  legal: [
    { href: '/terms', label: '使用条款' },
    { href: '/privacy', label: '隐私政策' },
  ],
} as const;
