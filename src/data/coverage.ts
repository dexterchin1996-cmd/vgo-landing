export type Tri = { zh: string; en: string; ms: string };
export const COVERAGE_CITIES: { key: string; label: Tri; areas: Tri[] }[] = [
  { key: "kk", label: { zh: "亚庇", en: "Kota Kinabalu", ms: "Kota Kinabalu" }, areas: [
    { zh: "亚庇市区", en: "KK Center", ms: "Pusat KK" },
    { zh: "丹容亚路", en: "Tanjung Aru", ms: "Tanjung Aru" },
    { zh: "路阳", en: "Luyang", ms: "Luyang" },
    { zh: "哥隆邦", en: "Kolombong", ms: "Kolombong" },
    { zh: "甘拜园", en: "Kepayan", ms: "Kepayan" },
    { zh: "下南南", en: "Inanam", ms: "Inanam" },
    { zh: "里卡士", en: "Likas", ms: "Likas" },
    { zh: "达迈", en: "Damai", ms: "Damai" },
    { zh: "兵南邦", en: "Penampang", ms: "Penampang" },
    { zh: "必打丹", en: "Putatan", ms: "Putatan" },
    { zh: "孟加达", en: "Menggatal", ms: "Menggatal" },
    { zh: "实邦加", en: "Sepanggar", ms: "Sepanggar" },
    { zh: "打里卜", en: "Telipok", ms: "Telipok" },
  ]},
  { key: "sandakan", label: { zh: "山打根", en: "Sandakan", ms: "Sandakan" }, areas: [
    { zh: "市中心", en: "City Center", ms: "Pusat Bandar" },
    { zh: "英达镇", en: "Bandar Indah", ms: "Bandar Indah" },
    { zh: "金凤市", en: "Bandar Kim Fung", ms: "Bandar Kim Fung" },
    { zh: "美丽园", en: "Taman Mawar", ms: "Taman Mawar" },
    { zh: "四哩", en: "Mile 4", ms: "Batu 4" },
    { zh: "七哩", en: "Mile 7", ms: "Batu 7" },
    { zh: "西必洛", en: "Sepilok", ms: "Sepilok" },
  ]},
  { key: "tawau", label: { zh: "斗湖", en: "Tawau", ms: "Tawau" }, areas: [
    { zh: "沙宾都", en: "Sabindo", ms: "Sabindo" },
    { zh: "发佳", en: "Fajar", ms: "Fajar" },
    { zh: "旧斗湖", en: "Tawau Lama", ms: "Tawau Lama" },
    { zh: "古古山", en: "Kubota", ms: "Kubota" },
    { zh: "阿拔士", en: "Apas", ms: "Apas" },
  ]},
];
export const COVERAGE_LABELS = {
  zh: { label: "服务区域", sub: "当前服务区域，持续扩展中", form_t: "没有你的地区？", form_sub: "留个邮箱，开通时第一时间通知你", form_ph: "你的邮箱", form_btn: "通知我", form_agree: "我同意接收服务开通通知邮件，可随时取消订阅", form_ok: "已收到！开通后会通知你", form_err: "提交失败，请稍后再试" },
  en: { label: "Service Area", sub: "Currently live, expanding", form_t: "Your area not listed?", form_sub: "Leave your email, we will notify you when we arrive", form_ph: "Your email", form_btn: "Notify Me", form_agree: "I agree to receive service launch notifications. Unsubscribe anytime.", form_ok: "Got it! We will notify you when live", form_err: "Failed. Please try again later." },
  ms: { label: "Kawasan Servis", sub: "Kawasan semasa, sedang berkembang", form_t: "Kawasan anda tiada?", form_sub: "Tinggalkan e-mel, kami maklumkan apabila tiba", form_ph: "E-mel anda", form_btn: "Maklumkan", form_agree: "Saya bersetuju menerima notifikasi pelancaran perkhidmatan. Boleh berhenti bila-bila.", form_ok: "Diterima! Kami akan maklumkan", form_err: "Gagal. Sila cuba lagi." },
};
