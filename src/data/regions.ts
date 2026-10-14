// VGO 全马区域主数据源
// 一次做完，未来开城只改 status 字段
// 添加日期: 2026-10-13

export type Lang = "zh" | "en" | "ms";
export type Label = { zh: string; en: string; ms: string };
export type RegionStatus = "live" | "coming" | "planned";

export interface Area {
  id: string;
  label: Label;
}

export interface City {
  id: string;
  label: Label;
  status: RegionStatus;
  areas: Area[];
}

export interface State {
  id: string;
  label: Label;
  status: RegionStatus;
  cities: City[];
}

export const REGIONS: State[] = [

  // ═══════════ 沙巴 Sabah ═══════════
  {
    id: "sabah",
    label: { zh: "沙巴", en: "Sabah", ms: "Sabah" },
    status: "live",
    cities: [
      {
        id: "kk", label: { zh: "亚庇", en: "Kota Kinabalu", ms: "Kota Kinabalu" }, status: "live",
        areas: [
          { id: "kk-center", label: { zh: "亚庇市区", en: "KK Center", ms: "Pusat KK" } },
          { id: "tanjung-aru", label: { zh: "丹容亚路", en: "Tanjung Aru", ms: "Tanjung Aru" } },
          { id: "luyang", label: { zh: "路阳", en: "Luyang", ms: "Luyang" } },
          { id: "kolombong", label: { zh: "哥隆邦", en: "Kolombong", ms: "Kolombong" } },
          { id: "kepayan", label: { zh: "甘拜园", en: "Kepayan", ms: "Kepayan" } },
          { id: "inanam", label: { zh: "下南南", en: "Inanam", ms: "Inanam" } },
          { id: "likas", label: { zh: "里卡士", en: "Likas", ms: "Likas" } },
          { id: "damai", label: { zh: "达迈", en: "Damai", ms: "Damai" } },
          { id: "penampang", label: { zh: "兵南邦", en: "Penampang", ms: "Penampang" } },
          { id: "putatan", label: { zh: "必打丹", en: "Putatan", ms: "Putatan" } },
          { id: "menggatal", label: { zh: "孟加达", en: "Menggatal", ms: "Menggatal" } },
          { id: "sepanggar", label: { zh: "实邦加", en: "Sepanggar", ms: "Sepanggar" } },
          { id: "telipok", label: { zh: "打里卜", en: "Telipok", ms: "Telipok" } },
        ],
      },
      { id: "sandakan", label: { zh: "山打根", en: "Sandakan", ms: "Sandakan" }, status: "live", areas: [
        { id: "sbh-c", label: { zh: "市中心", en: "City Center", ms: "Pusat Bandar" } },
        { id: "bandar-indah", label: { zh: "英达镇", en: "Bandar Indah", ms: "Bandar Indah" } },
        { id: "kim-fung", label: { zh: "金凤市", en: "Bandar Kim Fung", ms: "Bandar Kim Fung" } },
        { id: "taman-mawar", label: { zh: "美丽园", en: "Taman Mawar", ms: "Taman Mawar" } },
        { id: "mile-4", label: { zh: "四哩", en: "Mile 4", ms: "Batu 4" } },
        { id: "mile-7", label: { zh: "七哩", en: "Mile 7", ms: "Batu 7" } },
        { id: "sepilok", label: { zh: "西必洛", en: "Sepilok", ms: "Sepilok" } },
      ]},
      { id: "tawau", label: { zh: "斗湖", en: "Tawau", ms: "Tawau" }, status: "live", areas: [
        { id: "sabindo", label: { zh: "沙宾都", en: "Sabindo", ms: "Sabindo" } },
        { id: "fajar", label: { zh: "发佳", en: "Fajar", ms: "Fajar" } },
        { id: "tawau-lama", label: { zh: "旧斗湖", en: "Tawau Lama", ms: "Tawau Lama" } },
        { id: "kubota", label: { zh: "古古山", en: "Kubota", ms: "Kubota" } },
        { id: "apas", label: { zh: "阿拔士", en: "Apas", ms: "Apas" } },
      ]},
      { id: "tuaran", label: { zh: "斗亚兰", en: "Tuaran", ms: "Tuaran" }, status: "live", areas: [] },
      { id: "papar", label: { zh: "吧巴", en: "Papar", ms: "Papar" }, status: "live", areas: [] },
      { id: "keningau", label: { zh: "根地咬", en: "Keningau", ms: "Keningau" }, status: "live", areas: [] },
      { id: "lahad-datu", label: { zh: "拿笃", en: "Lahad Datu", ms: "Lahad Datu" }, status: "live", areas: [] },
      { id: "semporna", label: { zh: "仙本那", en: "Semporna", ms: "Semporna" }, status: "live", areas: [] },
      { id: "kudat", label: { zh: "古达", en: "Kudat", ms: "Kudat" }, status: "live", areas: [] },
      { id: "ranau", label: { zh: "兰瑙", en: "Ranau", ms: "Ranau" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 吉隆坡 Kuala Lumpur ═══════════
  {
    id: "kl",
    label: { zh: "吉隆坡", en: "Kuala Lumpur", ms: "Kuala Lumpur" },
    status: "live",
    cities: [
      { id: "klc", label: { zh: "吉隆坡市", en: "KL City", ms: "Bandar KL" }, status: "live", areas: [
        { id: "bukit-bintang", label: { zh: "武吉免登", en: "Bukit Bintang", ms: "Bukit Bintang" } },
        { id: "klcc", label: { zh: "KLCC", en: "KLCC", ms: "KLCC" } },
        { id: "cheras", label: { zh: "蕉赖", en: "Cheras", ms: "Cheras" } },
        { id: "ampang", label: { zh: "安邦", en: "Ampang", ms: "Ampang" } },
        { id: "bangsar", label: { zh: "孟沙", en: "Bangsar", ms: "Bangsar" } },
        { id: "mont-kiara", label: { zh: "满家乐", en: "Mont Kiara", ms: "Mont Kiara" } },
      ]},
    ],
  },

  // ═══════════ 雪兰莪 Selangor ═══════════
  {
    id: "selangor",
    label: { zh: "雪兰莪", en: "Selangor", ms: "Selangor" },
    status: "live",
    cities: [
      { id: "shah-alam", label: { zh: "莎阿南", en: "Shah Alam", ms: "Shah Alam" }, status: "live", areas: [] },
      { id: "pj", label: { zh: "八打灵再也", en: "Petaling Jaya", ms: "Petaling Jaya" }, status: "live", areas: [] },
      { id: "subang-jaya", label: { zh: "梳邦再也", en: "Subang Jaya", ms: "Subang Jaya" }, status: "live", areas: [] },
      { id: "klang", label: { zh: "巴生", en: "Klang", ms: "Klang" }, status: "live", areas: [] },
      { id: "kajang", label: { zh: "加影", en: "Kajang", ms: "Kajang" }, status: "live", areas: [] },
      { id: "puchong", label: { zh: "蒲种", en: "Puchong", ms: "Puchong" }, status: "live", areas: [] },
      { id: "cyberjaya", label: { zh: "赛城", en: "Cyberjaya", ms: "Cyberjaya" }, status: "live", areas: [] },
      { id: "bangi", label: { zh: "万宜", en: "Bangi", ms: "Bangi" }, status: "live", areas: [] },
      { id: "rawang", label: { zh: "万挠", en: "Rawang", ms: "Rawang" }, status: "live", areas: [] },
      { id: "sepang", label: { zh: "雪邦", en: "Sepang", ms: "Sepang" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 槟城 Penang ═══════════
  {
    id: "penang",
    label: { zh: "槟城", en: "Penang", ms: "Pulau Pinang" },
    status: "live",
    cities: [
      { id: "georgetown", label: { zh: "乔治市", en: "George Town", ms: "George Town" }, status: "live", areas: [] },
      { id: "bayan-lepas", label: { zh: "峇央峇鲁", en: "Bayan Lepas", ms: "Bayan Lepas" }, status: "live", areas: [] },
      { id: "butterworth", label: { zh: "北海", en: "Butterworth", ms: "Butterworth" }, status: "live", areas: [] },
      { id: "bukit-mertajam", label: { zh: "大山脚", en: "Bukit Mertajam", ms: "Bukit Mertajam" }, status: "live", areas: [] },
      { id: "balik-pulau", label: { zh: "浮罗山背", en: "Balik Pulau", ms: "Balik Pulau" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 柔佛 Johor ═══════════
  {
    id: "johor",
    label: { zh: "柔佛", en: "Johor", ms: "Johor" },
    status: "live",
    cities: [
      { id: "jb", label: { zh: "新山", en: "Johor Bahru", ms: "Johor Bahru" }, status: "live", areas: [] },
      { id: "iskandar", label: { zh: "依斯干达公主城", en: "Iskandar Puteri", ms: "Iskandar Puteri" }, status: "live", areas: [] },
      { id: "kulai", label: { zh: "古来", en: "Kulai", ms: "Kulai" }, status: "live", areas: [] },
      { id: "batu-pahat", label: { zh: "峇株巴辖", en: "Batu Pahat", ms: "Batu Pahat" }, status: "live", areas: [] },
      { id: "kluang", label: { zh: "居銮", en: "Kluang", ms: "Kluang" }, status: "live", areas: [] },
      { id: "muar", label: { zh: "麻坡", en: "Muar", ms: "Muar" }, status: "live", areas: [] },
      { id: "pasir-gudang", label: { zh: "巴西古当", en: "Pasir Gudang", ms: "Pasir Gudang" }, status: "live", areas: [] },
      { id: "segamat", label: { zh: "昔加末", en: "Segamat", ms: "Segamat" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 砂拉越 Sarawak ═══════════
  {
    id: "sarawak",
    label: { zh: "砂拉越", en: "Sarawak", ms: "Sarawak" },
    status: "live",
    cities: [
      { id: "kuching", label: { zh: "古晋", en: "Kuching", ms: "Kuching" }, status: "live", areas: [] },
      { id: "miri", label: { zh: "美里", en: "Miri", ms: "Miri" }, status: "live", areas: [] },
      { id: "sibu", label: { zh: "诗巫", en: "Sibu", ms: "Sibu" }, status: "live", areas: [] },
      { id: "bintulu", label: { zh: "民都鲁", en: "Bintulu", ms: "Bintulu" }, status: "live", areas: [] },
      { id: "sri-aman", label: { zh: "斯里阿曼", en: "Sri Aman", ms: "Sri Aman" }, status: "live", areas: [] },
      { id: "sarikei", label: { zh: "泗里街", en: "Sarikei", ms: "Sarikei" }, status: "live", areas: [] },
      { id: "limbang", label: { zh: "林梦", en: "Limbang", ms: "Limbang" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 霹雳 Perak ═══════════
  {
    id: "perak",
    label: { zh: "霹雳", en: "Perak", ms: "Perak" },
    status: "live",
    cities: [
      { id: "ipoh", label: { zh: "怡保", en: "Ipoh", ms: "Ipoh" }, status: "live", areas: [] },
      { id: "taiping", label: { zh: "太平", en: "Taiping", ms: "Taiping" }, status: "live", areas: [] },
      { id: "teluk-intan", label: { zh: "安顺", en: "Teluk Intan", ms: "Teluk Intan" }, status: "live", areas: [] },
      { id: "batu-gajah", label: { zh: "华都牙也", en: "Batu Gajah", ms: "Batu Gajah" }, status: "live", areas: [] },
      { id: "kuala-kangsar", label: { zh: "江沙", en: "Kuala Kangsar", ms: "Kuala Kangsar" }, status: "live", areas: [] },
      { id: "sitiawan", label: { zh: "实兆远", en: "Sitiawan", ms: "Sitiawan" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 吉打 Kedah ═══════════
  {
    id: "kedah",
    label: { zh: "吉打", en: "Kedah", ms: "Kedah" },
    status: "live",
    cities: [
      { id: "alor-setar", label: { zh: "亚罗士打", en: "Alor Setar", ms: "Alor Setar" }, status: "live", areas: [] },
      { id: "sungai-petani", label: { zh: "双溪大年", en: "Sungai Petani", ms: "Sungai Petani" }, status: "live", areas: [] },
      { id: "kulim", label: { zh: "居林", en: "Kulim", ms: "Kulim" }, status: "live", areas: [] },
      { id: "langkawi", label: { zh: "浮罗交怡", en: "Langkawi", ms: "Langkawi" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 彭亨 Pahang ═══════════
  {
    id: "pahang",
    label: { zh: "彭亨", en: "Pahang", ms: "Pahang" },
    status: "live",
    cities: [
      { id: "kuantan", label: { zh: "关丹", en: "Kuantan", ms: "Kuantan" }, status: "live", areas: [] },
      { id: "temerloh", label: { zh: "淡马鲁", en: "Temerloh", ms: "Temerloh" }, status: "live", areas: [] },
      { id: "bentong", label: { zh: "文冬", en: "Bentong", ms: "Bentong" }, status: "live", areas: [] },
      { id: "cameron", label: { zh: "金马仑高原", en: "Cameron Highlands", ms: "Cameron Highlands" }, status: "live", areas: [] },
      { id: "genting", label: { zh: "云顶", en: "Genting", ms: "Genting" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 森美兰 Negeri Sembilan ═══════════
  {
    id: "nsembilan",
    label: { zh: "森美兰", en: "Negeri Sembilan", ms: "Negeri Sembilan" },
    status: "live",
    cities: [
      { id: "seremban", label: { zh: "芙蓉", en: "Seremban", ms: "Seremban" }, status: "live", areas: [] },
      { id: "port-dickson", label: { zh: "波德申", en: "Port Dickson", ms: "Port Dickson" }, status: "live", areas: [] },
      { id: "nilai", label: { zh: "汝来", en: "Nilai", ms: "Nilai" }, status: "live", areas: [] },
      { id: "bahau", label: { zh: "马口", en: "Bahau", ms: "Bahau" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 马六甲 Melaka ═══════════
  {
    id: "melaka",
    label: { zh: "马六甲", en: "Melaka", ms: "Melaka" },
    status: "live",
    cities: [
      { id: "melaka-city", label: { zh: "马六甲市", en: "Melaka City", ms: "Bandar Melaka" }, status: "live", areas: [] },
      { id: "ayer-keroh", label: { zh: "爱极乐", en: "Ayer Keroh", ms: "Ayer Keroh" }, status: "live", areas: [] },
      { id: "alor-gajah", label: { zh: "亚罗牙也", en: "Alor Gajah", ms: "Alor Gajah" }, status: "live", areas: [] },
      { id: "jasin", label: { zh: "野新", en: "Jasin", ms: "Jasin" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 登嘉楼 Terengganu ═══════════
  {
    id: "terengganu",
    label: { zh: "登嘉楼", en: "Terengganu", ms: "Terengganu" },
    status: "live",
    cities: [
      { id: "kt", label: { zh: "瓜拉登嘉楼", en: "Kuala Terengganu", ms: "Kuala Terengganu" }, status: "live", areas: [] },
      { id: "kemaman", label: { zh: "甘马挽", en: "Kemaman", ms: "Kemaman" }, status: "live", areas: [] },
      { id: "dungun", label: { zh: "龙运", en: "Dungun", ms: "Dungun" }, status: "live", areas: [] },
      { id: "besut", label: { zh: "勿述", en: "Besut", ms: "Besut" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 吉兰丹 Kelantan ═══════════
  {
    id: "kelantan",
    label: { zh: "吉兰丹", en: "Kelantan", ms: "Kelantan" },
    status: "live",
    cities: [
      { id: "kota-bharu", label: { zh: "哥打巴鲁", en: "Kota Bharu", ms: "Kota Bharu" }, status: "live", areas: [] },
      { id: "tumpat", label: { zh: "道北", en: "Tumpat", ms: "Tumpat" }, status: "live", areas: [] },
      { id: "pasir-puteh", label: { zh: "巴西富地", en: "Pasir Puteh", ms: "Pasir Puteh" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 玻璃市 Perlis ═══════════
  {
    id: "perlis",
    label: { zh: "玻璃市", en: "Perlis", ms: "Perlis" },
    status: "live",
    cities: [
      { id: "kangar", label: { zh: "加央", en: "Kangar", ms: "Kangar" }, status: "live", areas: [] },
      { id: "arau", label: { zh: "亚娄", en: "Arau", ms: "Arau" }, status: "live", areas: [] },
      { id: "padang-besar", label: { zh: "巴东勿刹", en: "Padang Besar", ms: "Padang Besar" }, status: "live", areas: [] },
    ],
  },

  // ═══════════ 联邦直辖区 ═══════════
  {
    id: "labuan",
    label: { zh: "纳闽", en: "Labuan", ms: "Labuan" },
    status: "live",
    cities: [
      { id: "victoria", label: { zh: "维多利亚", en: "Victoria", ms: "Victoria" }, status: "live", areas: [] },
    ],
  },
  {
    id: "putrajaya",
    label: { zh: "布城", en: "Putrajaya", ms: "Putrajaya" },
    status: "live",
    cities: [
      { id: "putrajaya-c", label: { zh: "布城", en: "Putrajaya", ms: "Putrajaya" }, status: "live", areas: [] },
    ],
  },

];

// ═══════════ 工具函数 ═══════════
export function getStateById(id: string): State | undefined {
  return REGIONS.find(s => s.id === id);
}

export function getCitiesByState(stateId: string): City[] {
  return getStateById(stateId)?.cities ?? [];
}

export function getAreasByCity(stateId: string, cityId: string): Area[] {
  const city = getCitiesByState(stateId).find(c => c.id === cityId);
  return city?.areas ?? [];
}

export function getStatusLabel(status: RegionStatus, lang: Lang): string {
  const map: Record<RegionStatus, Record<Lang, string>> = {
    live:    { zh: "已开通", en: "Live",        ms: "Aktif" },
    coming:  { zh: "即将开通", en: "Coming Soon", ms: "Akan Datang" },
    planned: { zh: "计划中",   en: "Planned",     ms: "Dirancang" },
  };
  return map[status][lang];
}
