import type { Metadata } from "next";
import { PublishedNote, type PublishedNoteData } from "../../../components/PublishedNote";

const note = {
  "title": "手机遥控 Mac：WorkBuddy 远程已通",
  "description": "今天把 WorkBuddy 远程遥控跑通了：手机同账号连上，能实时看桌面，也能遥控键鼠。",
  "canonical": "https://danghb.cn/notes/mac-workbuddy/",
  "date": "2026-10-29",
  "kicker": "WorkBuddy",
  "lede": "今天把 WorkBuddy 远程遥控跑通了：手机同账号连上，能实时看桌面，也能遥控键鼠。",
  "credit": "同步自微信公众号「Hobson 小党」 · 2026-10-29",
  "blocks": [
    {
      "type": "img",
      "src": "/notes/mac-workbuddy/workbuddy-remote-settings-ed40c008.png",
      "alt": "封面",
      "caption": "▲ 封面"
    },
    {
      "type": "p",
      "inlines": [
        {
          "type": "text",
          "text": "今天把 WorkBuddy 远程遥控跑通了：手机同账号连上，能实时看桌面，也能遥控键鼠。"
        }
      ]
    },
    {
      "type": "h2",
      "text": "怎么开"
    },
    {
      "type": "p",
      "inlines": [
        {
          "type": "text",
          "text": "路径："
        },
        {
          "type": "strong",
          "text": "设置 → 设备连接 → 远程遥控 Beta"
        }
      ]
    },
    {
      "type": "p",
      "inlines": [
        {
          "type": "text",
          "text": "需要同时满足三件事："
        }
      ]
    },
    {
      "type": "li",
      "inlines": [
        {
          "type": "strong",
          "text": "允许同账号设备远程连接"
        },
        {
          "type": "text",
          "text": " 打开"
        }
      ]
    },
    {
      "type": "li",
      "inlines": [
        {
          "type": "strong",
          "text": "远程遥控插件（WorkBuddy Remote）V1.0.0.60"
        },
        {
          "type": "text",
          "text": " 打开"
        }
      ]
    },
    {
      "type": "li",
      "inlines": [
        {
          "type": "text",
          "text": "两个系统权限都显示 "
        },
        {
          "type": "strong",
          "text": "已授权"
        },
        {
          "type": "text",
          "text": "屏幕录制与系统录音（手机才能实时看到画面、听到声音）辅助功能（手机才能遥控鼠标键盘）"
        }
      ]
    },
    {
      "type": "h2",
      "text": "实测"
    },
    {
      "type": "p",
      "inlines": [
        {
          "type": "text",
          "text": "手机端打开 WorkBuddy，选中这台 Mac，就能看到实时桌面预览。我这边已经能从手机看到 Mini 的桌面画面，并随时断开。"
        }
      ]
    },
    {
      "type": "p",
      "inlines": [
        {
          "type": "text",
          "text": "对无显示器的 Mac Mini 特别有用：以前共享屏幕经常「Unable to capture screen」，现在多了一条「同账号手机遥控」的路。"
        }
      ]
    },
    {
      "type": "h2",
      "text": "注意"
    },
    {
      "type": "li",
      "inlines": [
        {
          "type": "text",
          "text": "这是 Beta，断线就断，别当生产运维通道"
        }
      ]
    },
    {
      "type": "li",
      "inlines": [
        {
          "type": "text",
          "text": "录屏和辅助功能授权后，等同把本机画面和键鼠交给同账号手机，只用自己的号"
        }
      ]
    },
    {
      "type": "img",
      "src": "/notes/mac-workbuddy/workbuddy-remote-settings-a3ddafca.png",
      "alt": "设置里打开同账号远程与录屏、辅助功能授权"
    },
    {
      "type": "img",
      "src": "/notes/mac-workbuddy/workbuddy-remote-desktop-72950c64.png",
      "alt": "手机端实时预览 Mac 桌面"
    }
  ]
} satisfies PublishedNoteData;

export const metadata: Metadata = {
  title: note.title.includes("Hobson") ? note.title : `${note.title} — Hobson`,
  description: note.description,
  alternates: { canonical: note.canonical },
};

export default function Page() {
  return <PublishedNote note={note} />;
}
