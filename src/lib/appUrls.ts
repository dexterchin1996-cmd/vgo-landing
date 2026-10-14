/**
 * VGO 统一入口配置
 * 官网所有登录/注册入口，都通过这里配置
 * 环境变量可覆盖默认域名：
 *   NEXT_PUBLIC_APP_CUSTOMER_URL
 *   NEXT_PUBLIC_APP_MERCHANT_URL
 *   NEXT_PUBLIC_APP_PROVIDER_URL
 */

const DEFAULT_CUSTOMER = "https://service.vgoservice.com";
const DEFAULT_MERCHANT = "https://merchant.vgoservice.com";
const DEFAULT_PROVIDER = "https://tech.vgoservice.com";

export const APP_URLS = {
  customer: process.env.NEXT_PUBLIC_APP_CUSTOMER_URL || DEFAULT_CUSTOMER,
  merchant: process.env.NEXT_PUBLIC_APP_MERCHANT_URL || DEFAULT_MERCHANT,
  provider: process.env.NEXT_PUBLIC_APP_PROVIDER_URL || DEFAULT_PROVIDER,
} as const;

// ===== 登录入口 =====
export const LOGIN_CUSTOMER_URL = `${APP_URLS.customer}/login/customer`;
export const LOGIN_MERCHANT_URL = `${APP_URLS.merchant}/login/merchant`;
export const LOGIN_PROVIDER_URL = `${APP_URLS.provider}/login/provider`;

// ===== 注册入口 =====
export const REGISTER_CUSTOMER_URL = `${APP_URLS.customer}/register`;
export const REGISTER_MERCHANT_URL = `${APP_URLS.merchant}/register`;
export const REGISTER_PROVIDER_URL = `${APP_URLS.provider}/register`;

// ===== 兼容旧引用 =====
export const LOGIN_URL = LOGIN_CUSTOMER_URL;

// ===== 统一入口子选项 =====
export type AuthRole = "customer" | "merchant" | "provider";
export type AuthIconKey = "user" | "store" | "wrench";

export interface AuthOption {
  role: AuthRole;
  icon: AuthIconKey;
  label: { zh: string; en: string; ms: string };
  sub:   { zh: string; en: string; ms: string };
  loginUrl: string;
  registerUrl: string;
}

export const AUTH_OPTIONS: AuthOption[] = [
  {
    role: "customer",
    icon: "user",
    label: { zh: "客户", en: "Customer",   ms: "Pelanggan"  },
    sub:   { zh: "找服务", en: "Book Services", ms: "Tempah Servis" },
    loginUrl: LOGIN_CUSTOMER_URL,
    registerUrl: REGISTER_CUSTOMER_URL,
  },
  {
    role: "merchant",
    icon: "store",
    label: { zh: "商家", en: "Merchant",   ms: "Peniaga"    },
    sub:   { zh: "做生意", en: "Do Business",  ms: "Berniaga" },
    loginUrl: LOGIN_MERCHANT_URL,
    registerUrl: REGISTER_MERCHANT_URL,
  },
  {
    role: "provider",
    icon: "wrench",
    label: { zh: "师傅", en: "Technician", ms: "Juruteknik" },
    sub:   { zh: "靠技术", en: "Offer Skills", ms: "Tawar Servis" },
    loginUrl: LOGIN_PROVIDER_URL,
    registerUrl: REGISTER_PROVIDER_URL,
  },
];
