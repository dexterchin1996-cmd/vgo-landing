export type ServiceItem = {
  id: string;
  icon: string;
  image: string;
  title: string;
  tagline: string;
  canDo: string[];
  scenarios: string[];
  capabilities: string[];
};

export type ServiceData = {
  label: string;
  title: string;
  sub: string;
  sec_todo: string;
  sec_scene: string;
  sec_cap: string;
  cta: string;
  items: ServiceItem[];
};

export const SERVICES: Record<"zh" | "en" | "ms", ServiceData> = {
  zh: {
    label: "V'GO 功能",
    title: "6 大核心功能",
    sub: "覆盖生活方方面面，一个 App 全搞定",
    sec_todo: "能做什么",
    sec_scene: "适用场景",
    sec_cap: "核心能力",
    cta: "预约服务",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "上门维修",
        tagline: "家里坏了，认证师傅上门搞定",
        canDo: ["水管维修（漏水/堵塞/更换）", "电路检修（跳闸/短路/开关）", "家电维修（冰箱/洗衣机/空调）", "门锁更换与开锁", "空调清洗加雪种", "马桶/洗手盆疏通"],
        scenarios: ["半夜水管突然爆了", "家电用着用着坏了", "老人独居没有依靠", "不懂电路怕出危险"],
        capabilities: ["实名认证 + 证件审核", "标准服务平台定价", "其他服务师傅公开报价", "完工确认平台担保"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "清洁打扫",
        tagline: "专业保洁团队，按时上门",
        canDo: ["日常保洁（每周/每月）", "深度清洁（厨房/卫生间）", "开荒清洁（新居入住）", "玻璃窗清洁", "地毯/沙发清洗", "油烟机深度清洗"],
        scenarios: ["搬新家前要彻底清洁", "节前大扫除人手不够", "出租房退租要清理", "长期未清洁需深度打理"],
        capabilities: ["实名认证保洁员", "自带清洁工具耗材", "按时上门服务", "不满意可要求返工"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "按摩",
        tagline: "持证按摩师上门服务",
        canDo: ["中医推拿", "泰式按摩", "精油 SPA", "足底按摩", "肩颈理疗", "产后修复按摩"],
        scenarios: ["久坐肩颈酸痛", "运动后需要放松", "老年人日常保健", "产后需要恢复调理"],
        capabilities: ["持证专业按摩师", "自带按摩器材", "预约到家服务", "隐私严格保护"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "跑腿代购",
        tagline: "同城配送，30 分钟响应",
        canDo: ["代买药品/生活用品", "代取快递包裹", "代送文件/礼物", "代买餐食", "代排队办事", "代缴费用"],
        scenarios: ["生病在家不便出门", "工作忙抽不开身", "老人行动不便", "急件需要快速送达"],
        capabilities: ["30 分钟快速响应", "全城范围覆盖", "实时位置追踪", "明码标价不议价"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "二手商城",
        tagline: "本地闲置交易，同城面交",
        canDo: ["家电家具买卖", "数码产品交易", "母婴用品转让", "运动器材出售", "书籍文具交换", "服饰箱包买卖"],
        scenarios: ["搬家清理闲置物品", "想买二手省钱购物", "寻找绝版好物", "同城快速交易"],
        capabilities: ["实名认证用户", "同城当面验货", "平台交易担保", "防诈骗机制"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "找工作",
        tagline: "零工散工，灵活接单",
        canDo: ["日结工（装修/搬运）", "小时工（清洁/帮厨）", "装修散工", "兼职促销", "家政散工", "餐饮帮工"],
        scenarios: ["想找短期灵活收入", "学生兼职赚零花", "自由职业者接单", "失业期过渡"],
        capabilities: ["日结/周结灵活选择", "实名认证企业雇主", "平台担保工资", "无需中介费用"] },
    ],
  },
  en: {
    label: "V'GO Features",
    title: "6 Core Services",
    sub: "Covering every aspect of life — all in one app",
    sec_todo: "What's Included",
    sec_scene: "Common Situations",
    sec_cap: "Why Choose Us",
    cta: "Book a Service",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "Home Repair",
        tagline: "Certified technicians for plumbing, electrical & appliance fixes",
        canDo: ["Plumbing (leaks, clogs, replacement)", "Electrical (trips, shorts, switches)", "Appliances (fridge, washer, AC)", "Lock replacement & unlocking", "AC normal service & gas top-up", "Toilet/sink unclogging"],
        scenarios: ["Pipe bursts at midnight", "Appliance suddenly breaks", "Elderly living alone", "Afraid of electrical risks"],
        capabilities: ["ID + credential verified", "Platform pricing for standard services", "Public quotes for others", "Platform warranty on completion"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "Home Cleaning",
        tagline: "Vetted cleaners with tools & supplies included",
        canDo: ["Regular cleaning (weekly/monthly)", "Deep cleaning (kitchen/bathroom)", "Move-in deep clean", "Window cleaning", "Carpet/sofa cleaning", "Range hood deep clean"],
        scenarios: ["Moving in, need deep clean", "Pre-holiday big clean", "Rental handover cleanup", "Long-neglected deep clean"],
        capabilities: ["Verified cleaners", "Tools & supplies included", "Punctual arrival", "Redo if unsatisfied"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "Massage & Therapy",
        tagline: "Licensed therapists, delivered to your door",
        canDo: ["TCM tuina", "Thai massage", "Aromatherapy SPA", "Foot reflexology", "Neck & shoulder therapy", "Postnatal recovery"],
        scenarios: ["Sitting long hours, stiff neck", "Post-workout recovery", "Elderly wellness care", "Postnatal recovery needs"],
        capabilities: ["Licensed therapists", "Equipment included", "Book to your home", "Strict privacy protection"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "Errand & Delivery",
        tagline: "Same-city delivery with 30-min response",
        canDo: ["Buy medicine/daily items", "Pick up parcels", "Deliver documents/gifts", "Buy meals", "Queue on your behalf", "Pay bills"],
        scenarios: ["Sick, can't go out", "Too busy at work", "Elderly with limited mobility", "Urgent package delivery"],
        capabilities: ["30-min response", "Nationwide coverage", "Live location tracking", "Fixed transparent pricing"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "Buy & Sell",
        tagline: "Local secondhand deals, meet in person",
        canDo: ["Appliances & furniture", "Electronics", "Baby & kids items", "Sports gear", "Books & stationery", "Clothing & bags"],
        scenarios: ["Moving, clear unused items", "Looking for secondhand deals", "Hunting rare items", "Fast local trades"],
        capabilities: ["Verified users", "In-person inspection", "Platform trade guarantee", "Anti-fraud protection"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "Gig Work",
        tagline: "Flexible gigs, take orders anytime",
        canDo: ["Daily pay (renovation/porter)", "Hourly (cleaning/kitchen)", "Renovation gigs", "Promotional part-time", "Domestic helper gigs", "F&B helper"],
        scenarios: ["Seeking flexible income", "Student part-time", "Freelancer taking gigs", "Transitional work"],
        capabilities: ["Daily/weekly pay", "Verified employers", "Platform wage guarantee", "Zero agency fees"] },
    ],
  },
  ms: {
    label: "Ciri V'GO",
    title: "6 Servis Utama",
    sub: "Meliputi setiap aspek kehidupan — semua dalam satu app",
    sec_todo: "Apa Yang Termasuk",
    sec_scene: "Situasi Lazim",
    sec_cap: "Mengapa Pilih Kami",
    cta: "Tempah Servis",
    items: [
      { id: "repair", icon: "Wrench", image: "/features/repair.jpg", title: "Pembaikan Rumah",
        tagline: "Ada yang rosak? Juruteknik bertauliah ke pintu anda",
        canDo: ["Paip (bocor, tersumbat, ganti)", "Elektrik (trip, litar pintas, suis)", "Alatan (peti sejuk, mesin basuh, penghawa)", "Ganti kunci & buka kunci", "Servis penghawa (cuci biasa) & isi gas", "Bersih tandas/sinki tersumbat"],
        scenarios: ["Paip pecah tengah malam", "Alatan tiba-tiba rosak", "Warga emas tinggal sendiri", "Takut risiko elektrik"],
        capabilities: ["Pengesahan ID + dokumen", "Harga platform untuk servis standard", "Sebut harga terbuka untuk lain", "Jaminan platform selepas siap"] },
      { id: "clean", icon: "Sparkles", image: "/features/clean.jpg", title: "Servis Pembersihan",
        tagline: "Pembersih profesional, tepat masa ke pintu anda",
        canDo: ["Pembersihan biasa (mingguan/bulanan)", "Pembersihan mendalam (dapur/bilik air)", "Cuci masuk rumah baru", "Cuci tingkap", "Cuci permaidani/sofa", "Cuci tudung dapur"],
        scenarios: ["Pindah rumah, perlu cuci mendalam", "Cuci besar sebelum perayaan", "Cuci sebelum serah sewa", "Cuci setelah lama diabaikan"],
        capabilities: ["Pembersih disahkan", "Alat & bahan disediakan", "Tiba tepat masa", "Boleh ulang jika tak puas hati"] },
      { id: "massage", icon: "Heart", image: "/features/massage.jpg", title: "Urutan & Terapi",
        tagline: "Terapis bertauliah ke rumah anda",
        canDo: ["Tuina TCM", "Urutan Thai", "SPA aromaterapi", "Refleksologi kaki", "Terapi leher & bahu", "Pemulihan selepas bersalin"],
        scenarios: ["Duduk lama, leher tegang", "Pemulihan selepas senaman", "Penjagaan warga emas", "Keperluan pemulihan selepas bersalin"],
        capabilities: ["Terapis berlesen", "Peralatan disediakan", "Tempah ke rumah", "Perlindungan privasi ketat"] },
      { id: "errand", icon: "Truck", image: "/features/errand.jpg", title: "Penghantaran & Beli-Belah",
        tagline: "Penghantaran dalam bandar, respons 30 minit",
        canDo: ["Beli ubat/barang harian", "Ambil bungkusan", "Hantar dokumen/hadiah", "Beli makanan", "Berdiri dalam barisan", "Bayar bil"],
        scenarios: ["Sakit, tak boleh keluar", "Sibuk bekerja", "Warga emas kurang mobiliti", "Penghantaran segera"],
        capabilities: ["Respons 30 minit", "Liputan seluruh bandar", "Pemantauan lokasi langsung", "Harga telus tetap"] },
      { id: "market", icon: "ShoppingBag", image: "/features/market.jpg", title: "Jual Beli Terpakai",
        tagline: "Jual beli terpakai tempatan, berjumpa sendiri",
        canDo: ["Alatan & perabot", "Elektronik", "Barang bayi & kanak-kanak", "Peralatan sukan", "Buku & alat tulis", "Pakaian & beg"],
        scenarios: ["Pindah, kosongkan barang", "Cari tawaran terpakai", "Mencari barang nadir", "Urusniaga tempatan pantas"],
        capabilities: ["Pengguna disahkan", "Pemeriksaan sendiri", "Jaminan urusniaga platform", "Perlindungan anti-penipuan"] },
      { id: "jobs", icon: "Briefcase", image: "/features/jobs.jpg", title: "Kerja Sambilan",
        tagline: "Kerja gig fleksibel, ambil pesanan bila-bila",
        canDo: ["Bayaran harian (renovasi/angkut)", "Setiap jam (cuci/dapur)", "Gig renovasi", "Promosi sambilan", "Pembantu rumah", "Pembantu F&B"],
        scenarios: ["Cari pendapatan fleksibel", "Sambilan pelajar", "Bebas ambil gig", "Kerja peralihan"],
        capabilities: ["Bayaran harian/mingguan", "Majikan disahkan", "Jaminan gaji platform", "Sifar yuran agensi"] },
    ],
  },
};
