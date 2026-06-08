# LivePlan

面向中文用户的个人向日音 Live Market / 关注规划助手。

核心体验：

1. 在 Live Market 浏览官方已公开、尚未演出的日音 Live。
2. 点“关注”把 Live 加入自己的 cart。
3. 在 cart 里为每场 Live 做时间规划、预算拆分、准备清单和决策备注。
4. 在提醒页查看受付截止与 Live 当日。

## 项目结构

```text
liveplan-app/
├─ index.html                 # 根入口，自动跳转到 frontend/
├─ frontend/
│  ├─ index.html              # App 页面结构
│  ├─ app.js                  # 关注 cart、详情、日历、预算、提醒逻辑
│  └─ styles.css              # 现代、圆润、少女乐队风视觉样式
├─ data/
│  └─ live-market.json        # 已核验的官方 Live Market 数据
├─ scripts/
│  ├─ serve.ps1               # 本地静态服务器启动脚本
│  └─ sync-bangdream.mjs      # 官方来源检查 / 同步脚手架
└─ docs/
   └─ architecture.md         # 架构说明
```

## 本地运行

现在前端会读取 `data/live-market.json`，所以推荐用本地静态服务器打开，不再直接双击 `frontend/index.html`。

PowerShell：

```powershell
.\scripts\serve.ps1
```

然后打开：

```text
http://localhost:5173/
```

如果之后开启 GitHub Pages，也可以直接访问：

```text
https://marigold9780.github.io/liveplan/
```

## 当前功能

- Live Market：从 `data/live-market.json` 读取已核验 Live 数据
- 信息条：展示标题、中文说明、日期、时间、城市、原文场馆、票价、标签和来源
- 关注 cart：点击“关注”后加入个人关注列表
- 详情页：Market 和 cart 都可以打开同一套详情信息
- 时间规划：按 Live 所在月份生成日历，高亮演出日，可点击选择任意日期作为行程安排
- 预算拆分：记录票价、交通、住宿、物贩预算
- 准备清单：票务、交通、住宿、物贩、证件 / 入场材料
- 决策状态：观望中、想冲、已抽选、已中选、已买票、暂不考虑
- 提醒：展示受付截止和 Live 当日
- 数据导出：导出个人 cart 数据为 JSON

## 数据来源说明

当前数据层只放入已核验字段。标题、艺人、场馆等容易误解的关键字段保留官方原文；摘要、规划提示和说明使用中文。

静态前端不会直接抓官网。未来同步流程会放在 `scripts/` 中：抓取官方页面、生成检查报告、人工或半自动核验后更新 `data/live-market.json`。

## 下一步建议

1. 让 `scripts/sync-bangdream.mjs` 从“检查来源”升级为“解析候选 Live”。
2. 增加 `data/staging/`，把未核验数据和正式 Market 数据分开。
3. 增加图片缓存或可信图片字段校验。
4. 增加日期冲突判断和远征行程模板。
5. 增加 GitHub Pages 自动部署说明。
