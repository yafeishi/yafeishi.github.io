# 访问统计

个人主页是 GitHub Pages 静态站，页面加载时用 `VisitBeacon` 向自托管收集端 `https://hit.danghb.cn/pv` 发一次 pageview。

- 收集与统计服务：云电脑 `/workspace/homepage-hits/`
- 数据：`/workspace/homepage-hits/data/hits.sqlite`
- 统计页密钥：`/workspace/homepage-hits/secret.env` 里的 `STATS_TOKEN`
- 打开：`https://hit.danghb.cn/s/<STATS_TOKEN>`（不在导航里公开链接）

不接入第三方分析账号；UV 为按日加盐的 IP+UA 哈希。
