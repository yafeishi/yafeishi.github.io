import type { Lang } from "../i18n";

type CareerItem = { year: string; role: string; org: string };

export const career: Record<Lang, CareerItem[]> = {
  zh: [
    {
      year: "2022—",
      role: "数据库解决方案架构师 / AI 方案实践",
      org: "服务金融及更多行业，负责数据库选型、PoC、迁移与容灾，并探索 Agent、知识库和评测在真实交付中的应用。",
    },
    {
      year: "2016—2021",
      role: "AntDB 产品规划与交付负责人",
      org: "分布式数据库的产品规划、交付标准化、售前与信创。累计完成 1000+ 人次内训，也在 PostgreSQL 社区做过分享。",
    },
    {
      year: "2011—2016",
      role: "Oracle DBA / 技术顾问",
      org: "多省运营商 CRM / BOSS 等核心系统的部署、架构、优化与培训，后来负责 SQL 审核产品的售前、PoC 和专项调优。",
    },
  ],
  en: [
    {
      year: "2022—",
      role: "Database Solutions Architect / Applied AI",
      org: "Database selection, PoCs, migration and disaster recovery for financial services and beyond — plus putting agents, knowledge bases and evaluation to work in real delivery.",
    },
    {
      year: "2016—2021",
      role: "AntDB Product Planning & Delivery Lead",
      org: "Product planning, delivery standards, presales and domestic-stack replacement for a distributed database. Delivered internal training to 1,000+ attendees and spoke at PostgreSQL community events.",
    },
    {
      year: "2011—2016",
      role: "Oracle DBA / Technical Consultant",
      org: "Deployment, architecture, tuning and training for CRM, BOSS and other core systems at provincial telecom carriers; later presales, PoCs and targeted tuning for a SQL review product.",
    },
  ],
};
