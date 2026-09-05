export type BookStatus = "读完" | "在读" | "翻过";

export type Book = {
  title: string;
  author: string;
  cat: string;
  status: BookStatus;
  date?: string;
  note?: string;
};

export const BOOK_CATS = [
  "跑步",
  "健康",
  "计算机",
  "工作",
  "成长",
  "历史",
  "小说",
  "社会",
] as const;

export const books: Book[] = [
  {
    title: "无伤跑法",
    author: "戴剑松 / 郑家轩",
    cat: "跑步",
    status: "读完",
    date: "2025-01",
    note: "着地时膝盖别锁死。给想无伤跑下去的人。",
  },
  {
    title: "跑步圣经",
    author: "赫尔伯特·史迪凡尼",
    cat: "跑步",
    status: "在读",
    date: "2025-02",
    note: "训练要系统，不是靠意志硬扛。",
  },
  {
    title: "超越百岁",
    author: "彼得·阿提亚",
    cat: "健康",
    status: "读完",
    date: "2025-01",
    note: "健康是长期资产。",
  },
  {
    title: "运动改造大脑",
    author: "约翰·瑞迪 / 埃里克·哈格曼",
    cat: "健康",
    status: "读完",
    date: "2025-01",
  },
  {
    title: "30分钟中老年力量训练",
    author: "米尔萨德·哈西奇",
    cat: "健康",
    status: "在读",
    date: "2025-01",
  },
  {
    title: "一平米健身",
    author: "斌卡",
    cat: "健康",
    status: "在读",
    date: "2025-02",
  },
  {
    title: "无限可能的身体",
    author: "卢永利",
    cat: "健康",
    status: "在读",
    date: "2025-01",
  },
  {
    title: "我们为什么要睡觉",
    author: "马修·沃克",
    cat: "健康",
    status: "翻过",
    note: "睡眠不是可压缩的余量。",
  },
  {
    title: "高性能 MySQL",
    author: "Silvia Botros / Jeremy Tinley",
    cat: "计算机",
    status: "读完",
    date: "2023-12",
    note: "调优先看证据，而不是先改参数。",
  },
  {
    title: "云原生数据库：原理与实践",
    author: "李飞飞 等",
    cat: "计算机",
    status: "翻过",
    date: "2023-05",
    note: "原理层，和交付现场对得上。",
  },
  {
    title: "AI未来进行式",
    author: "李开复 / 陈楸帆",
    cat: "计算机",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "一本书讲透IT售前",
    author: "蒋珍波",
    cat: "工作",
    status: "读完",
    date: "2024-12",
    note: "和现在的方案工作直接相关。",
  },
  {
    title: "工作型PPT该这样做",
    author: "秦阳",
    cat: "工作",
    status: "读完",
    date: "2024-12",
  },
  {
    title: "富爸爸穷爸爸",
    author: "罗伯特·清崎",
    cat: "工作",
    status: "读完",
    date: "2025-02",
  },
  {
    title: "我们终将变富",
    author: "兰启昌",
    cat: "工作",
    status: "读完",
    date: "2024-10",
  },
  {
    title: "需求",
    author: "亚德里安·斯莱沃斯基",
    cat: "工作",
    status: "在读",
    date: "2024-10",
  },
  {
    title: "大厂人才",
    author: "娄珺",
    cat: "工作",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "To B产品经理入门",
    author: "李鑫",
    cat: "工作",
    status: "翻过",
    date: "2024-01",
  },
  {
    title: "决胜B端",
    author: "杨堃",
    cat: "工作",
    status: "翻过",
    date: "2024-01",
  },
  {
    title: "纳瓦尔宝典",
    author: "纳瓦尔",
    cat: "成长",
    status: "读完",
    date: "2022-07",
    note: "读比听快，做比看快。",
  },
  {
    title: "认知觉醒",
    author: "周岭",
    cat: "成长",
    status: "读完",
    date: "2025-03",
  },
  {
    title: "美好人生运营指南",
    author: "一稼",
    cat: "成长",
    status: "读完",
    date: "2025-03",
  },
  {
    title: "全面效能",
    author: "李云 / 楼建芳",
    cat: "成长",
    status: "读完",
    date: "2024-12",
  },
  {
    title: "精力重启",
    author: "彼得·霍林斯",
    cat: "成长",
    status: "读完",
    date: "2024-11",
  },
  {
    title: "掌控习惯",
    author: "詹姆斯·克利尔",
    cat: "成长",
    status: "翻过",
    date: "2023-09",
    note: "系统比意志可靠。",
  },
  {
    title: "福格行为模型",
    author: "B.J.福格",
    cat: "成长",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "人生效率手册",
    author: "张萌",
    cat: "成长",
    status: "在读",
    date: "2025-03",
  },
  {
    title: "时间增值",
    author: "剑飞",
    cat: "成长",
    status: "在读",
    date: "2025-03",
  },
  {
    title: "时间贫困",
    author: "凯茜·霍姆斯",
    cat: "成长",
    status: "在读",
    date: "2024-09",
  },
  {
    title: "沟通的本质",
    author: "罗纳德·阿德勒 等",
    cat: "成长",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "破局",
    author: "月夜生凉",
    cat: "成长",
    status: "在读",
    date: "2024-10",
  },
  {
    title: "让写作成为自我精进的武器",
    author: "师北宸",
    cat: "成长",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "我的外婆，从不内耗",
    author: "理微尘",
    cat: "成长",
    status: "在读",
    date: "2024-12",
  },
  {
    title: "习惯的力量",
    author: "查尔斯·都希格",
    cat: "成长",
    status: "翻过",
    date: "2023-04",
  },
  {
    title: "把时间当作朋友",
    author: "李笑来",
    cat: "成长",
    status: "翻过",
    date: "2024-09",
  },
  {
    title: "如何成为一个有趣的人",
    author: "王小圈",
    cat: "成长",
    status: "翻过",
    date: "2024-05",
  },
  {
    title: "如何做一个情绪稳定的成年人",
    author: "清流",
    cat: "成长",
    status: "翻过",
    date: "2024-02",
  },
  {
    title: "一百年，许多人，许多事",
    author: "杨苡 / 余斌",
    cat: "成长",
    status: "翻过",
    date: "2023-05",
  },
  {
    title: "写作课",
    author: "叶开",
    cat: "成长",
    status: "翻过",
    date: "2023-12",
  },
  {
    title: "前方高能",
    author: "硬核的HeyMatt",
    cat: "成长",
    status: "翻过",
    date: "2024-08",
  },
  {
    title: "早起的奇迹",
    author: "哈尔·埃尔罗德 等",
    cat: "成长",
    status: "翻过",
    date: "2024-08",
  },
  {
    title: "相信",
    author: "蔡磊",
    cat: "成长",
    status: "翻过",
    date: "2024-01",
  },
  {
    title: "人类简史",
    author: "尤瓦尔·赫拉利",
    cat: "历史",
    status: "在读",
    date: "2024-11",
    note: "用来拉开时间尺度。",
  },
  {
    title: "显微镜下的大明",
    author: "马伯庸",
    cat: "历史",
    status: "在读",
    date: "2024-10",
  },
  {
    title: "曾国藩传",
    author: "张宏杰",
    cat: "历史",
    status: "翻过",
    date: "2024-05",
  },
  {
    title: "女人的胜利",
    author: "余华",
    cat: "小说",
    status: "读完",
    date: "2025-02",
  },
  {
    title: "十八岁出门远行",
    author: "余华",
    cat: "小说",
    status: "读完",
    date: "2024-09",
    note: "短，狠。",
  },
  {
    title: "我胆小如鼠",
    author: "余华",
    cat: "小说",
    status: "翻过",
    date: "2024-09",
  },
  {
    title: "第七天",
    author: "余华",
    cat: "小说",
    status: "翻过",
    date: "2024-02",
  },
  {
    title: "长安的荔枝",
    author: "马伯庸",
    cat: "小说",
    status: "翻过",
    date: "2024-06",
  },
  {
    title: "太白金星有点烦",
    author: "马伯庸",
    cat: "小说",
    status: "翻过",
    date: "2024-02",
  },
  {
    title: "法治的细节",
    author: "罗翔",
    cat: "社会",
    status: "翻过",
    date: "2023-10",
  },
  {
    title: "法律简史",
    author: "桑本谦",
    cat: "社会",
    status: "翻过",
    date: "2023-09",
  },
  {
    title: "法学的故事",
    author: "蒋来用",
    cat: "社会",
    status: "翻过",
    date: "2023-10",
  },
  {
    title: "“她”的力量",
    author: "露西·库克",
    cat: "社会",
    status: "翻过",
    date: "2024-05",
  },
];

const statusRank: Record<BookStatus, number> = {
  读完: 0,
  在读: 1,
  翻过: 2,
};

export function booksByCategory(cat?: string): { cat: string; items: Book[] }[] {
  const cats = cat ? [cat] : [...BOOK_CATS];
  return cats
    .map((name) => ({
      cat: name,
      items: books
        .filter((book) => book.cat === name)
        .sort((a, b) => {
          const rank = statusRank[a.status] - statusRank[b.status];
          if (rank !== 0) return rank;
          return (b.date ?? "").localeCompare(a.date ?? "");
        }),
    }))
    .filter((group) => group.items.length > 0);
}
