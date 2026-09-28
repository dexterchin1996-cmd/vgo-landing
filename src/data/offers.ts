export const OFFERS = {
  zh: {
    label: "限时福利", title: "三大角色专属福利", sub: "注册即享 · 限首批 1000 名",
    tab_customer: "客户", tab_merchant: "商家", tab_tech: "师傅",
    cta: "立即注册领取", note: "福利不可叠加，最终解释权归 V'GO 所有",
    customer_title: "RM80 上门检查券", customer_desc: "注册即送，首次下单立减 RM80",
    customer_p: ["注册即到账","首单立减 RM80","全马通用","限首批 1000 名"],
    merchant_title: "前 2 个月 0% 手续费", merchant_desc: "入驻即享 2 个月免手续费，平台让利不出现金",
    merchant_p: ["0 元入驻","前 2 月 0 手续费","免费店铺页","限首批 100 名"],
    tech_title: "0% 手续费 + 创始徽章", tech_desc: "前 2 个月 0% 手续费，加创始师傅专属徽章",
    tech_p: ["前 2 月 0 手续费","创始师傅徽章","优先派单","限首批 100 名"],
  },
  en: {
    label: "Limited Offers", title: "Exclusive Offers for 3 Roles", sub: "Sign up now · First 1000 only",
    tab_customer: "Customer", tab_merchant: "Merchant", tab_tech: "Technician",
    cta: "Sign Up & Claim", note: "Offers not stackable. V'GO reserves final interpretation.",
    customer_title: "RM80 Home Inspection Voucher", customer_desc: "Get RM80 off your first order upon signup",
    customer_p: ["Instant on signup","RM80 off first order","Valid nationwide","First 1000 only"],
    merchant_title: "First 2 Months 0% Service Fee", merchant_desc: "Zero service fee for 2 months after onboarding",
    merchant_p: ["Free onboarding","2 months 0%","Free store page","First 100 only"],
    tech_title: "0% Service Fee + Founder Badge", tech_desc: "Zero service fee for 2 months + exclusive founder badge",
    tech_p: ["2 months 0%","Founder badge","Priority dispatch","First 100 only"],
  },
  ms: {
    label: "Tawaran Terhad", title: "Tawaran Eksklusif 3 Peranan", sub: "Daftar sekarang · 1000 terawal sahaja",
    tab_customer: "Pelanggan", tab_merchant: "Peniaga", tab_tech: "Pakar",
    cta: "Daftar & Tuntut", note: "Tawaran tidak boleh digabung. V'GO berhak tafsir akhir.",
    customer_title: "Baun Pemeriksaan RM80", customer_desc: "Dapat RM80 diskaun pesanan pertama selepas daftar",
    customer_p: ["Serta-merta selepas daftar","RM80 diskaun pesanan pertama","Sah seluruh negara","1000 terawal sahaja"],
    merchant_title: "2 Bulan Pertama 0% Fi Perkhidmatan", merchant_desc: "Fi Perkhidmatan sifar untuk 2 bulan pertama selepas daftar",
    merchant_p: ["Pendaftaran percuma","2 bulan 0%","Halaman kedai percuma","100 terawal sahaja"],
    tech_title: "0% Fi Perkhidmatan + Lencana Pengasas", tech_desc: "Fi Perkhidmatan sifar 2 bulan + lencana pengasas eksklusif",
    tech_p: ["2 bulan 0%","Lencana pengasas","Keutamaan tugas","100 terawal sahaja"],
  },
};

export type OffersData = typeof OFFERS.zh;
