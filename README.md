# 育玫｜陪老闆看見自己公司

個人品牌網站：Next.js 15（App Router，靜態匯出）+ Decap CMS + Netlify。

## 本地開發

```bash
npm install
cp .env.example .env.local   # 填入 GA4 ID（可先留白）
npm run dev
```

開 http://localhost:3000

## 目錄結構

```
app/
  layout.tsx          # 全站 <head> / 字型 / GA4 / Nav / Footer
  page.tsx            # 首頁（含 Person / LocalBusiness / FAQPage JSON-LD）
  globals.css         # 品牌色系 + 原 HTML 樣式
  components/         # Hero / Pain / Turn / Funnel / About / Testimonials / Faq / FooterCta / SiteNav / GA4
  posts/
    page.tsx          # 文章列表
    [slug]/page.tsx   # 文章詳細（含 Article JSON-LD）
  search/
    page.tsx          # 搜尋頁殼
    SearchClient.tsx  # Fuse.js 前端搜尋
  sitemap.ts          # 自動產出 sitemap.xml
  robots.ts           # robots.txt

content/              # Decap CMS 管理
  posts/              # 文章（Markdown + frontmatter）
  testimonials/       # 客戶見證
  faqs/               # 常見問題

lib/content.ts        # 讀 Markdown + remark 轉 HTML

public/
  admin/index.html    # Decap CMS shell（載 Netlify Identity + decap-cms）
  admin/config.yml    # CMS collections 設定

scripts/build-search-index.mjs  # 建置前產出 /search-index.json

netlify.toml          # 部署設定 + 安全 headers
```

## 內容管理（/admin）

Decap CMS 透過 Netlify Identity + Git Gateway 認證。編輯後會直接在 GitHub 送 PR（或直接 commit，視 publish_mode 設定），Netlify 自動重新建置部署。

三個 collection：
- **文章** — Markdown，可設標題、日期、摘要、標籤
- **客戶見證** — 名稱、職稱、見證內文
- **常見問題** — 問題、排序、答案（答案會一起寫入 FAQPage JSON-LD）

## 品牌色系（Tailwind + CSS 變數）

| Token | HEX |
|---|---|
| navy-deep | #212A51 |
| navy | #3461A7 |
| blue-soft | #8CB2C2 |
| gold | #EBBF61 |
| beige | #EBD6B3 |
| cream | #F8F5F3 |

## SEO

- 每頁 `title` / `description` / `canonical` / `openGraph` / `twitter` 都用 Next.js `metadata` API 獨立設定
- 首頁內嵌 Person、LocalBusiness、FAQPage JSON-LD
- 文章頁內嵌 Article JSON-LD
- `app/sitemap.ts` + `app/robots.ts` 自動產出 `/sitemap.xml`、`/robots.txt`
- `/admin` 路徑 `noindex` 且在 robots.txt disallow

## GA4

設 `NEXT_PUBLIC_GA4_ID=G-XXXXXXX` 於 `.env.local` 或 Netlify 環境變數即可。留空就不會注入任何追蹤碼。

## 搜尋

`npm run build` 會先跑 `scripts/build-search-index.mjs`，把所有 posts / FAQ / testimonials 抽成 `/public/search-index.json`。`/search` 頁在 client 端用 Fuse.js 載入這份索引做模糊搜尋。

---

## 部署到 Netlify 的完整步驟

### 1. 把專案推上 GitHub

```bash
cd yumei-website
git init
git add .
git commit -m "feat: initial yumei website"
git branch -M main
git remote add origin https://github.com/<你的帳號>/yumei-website.git
git push -u origin main
```

### 2. 在 Netlify 建立新站

1. 登入 https://app.netlify.com → **Add new site** → **Import an existing project**
2. 選 **GitHub**，授權後選剛才推上去的 repo
3. 部署設定應會自動從 `netlify.toml` 讀取：
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `20`
4. 點 **Deploy site**，等第一次建置完成

### 3. 設定環境變數（Netlify Dashboard）

**Site configuration → Environment variables** 新增：

| Key | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.yumeiot.com`（或你暫時用的 netlify 網址） |
| `NEXT_PUBLIC_GA4_ID` | `G-XXXXXXXXXX`（GA4 建立資源後拿到） |

改完後 **Deploys → Trigger deploy → Deploy site** 重建一次讓變數生效。

### 4. 開啟 Netlify Identity（讓你可以登入 /admin）

1. Netlify site → **Integrations → Identity → Enable Identity**
2. **Registration preferences** 改成 **Invite only**（避免路人註冊）
3. **Services → Git Gateway → Enable Git Gateway**
4. 回 **Identity → Invite users**，把自己的 email 邀請進去
5. 收信 → 點邀請連結 → 設密碼
6. 開 `https://<你的站>.netlify.app/admin/` → 用剛設的帳密登入 → 就會進到 Decap CMS 後台

> 重要：Git Gateway 是讓 Decap 不用你自己開 GitHub OAuth App 就能 commit 到 repo 的橋樑。一定要開。

### 5. 綁自訂網域 `www.yumeiot.com`

1. Netlify site → **Domain management → Add a domain** → 輸入 `yumeiot.com`
2. 到你的 DNS（Cloudflare / GoDaddy / 等等）加：
   - `A` record：`@` → Netlify load balancer IP（Netlify 會顯示）
   - `CNAME`：`www` → `<你的站>.netlify.app`
   - 或直接用 Netlify DNS 託管整個網域（更簡單）
3. 回 Netlify **Domain settings → HTTPS → Verify DNS → Provision certificate**（Let's Encrypt 自動簽）
4. **Primary domain** 設成 `www.yumeiot.com`

### 6. 上 GA4

1. https://analytics.google.com → 建立新「資源」
2. 資料串流 → 網站 → 輸入 `https://www.yumeiot.com`
3. 拿到 `G-XXXXXXXXXX` → 填回 Netlify 的 `NEXT_PUBLIC_GA4_ID` → 重新 deploy

### 7. 驗證清單

部署完成後檢查：

- [ ] 首頁 https://www.yumeiot.com/ 正常顯示，Noto Sans TC + Montserrat 字型有載入
- [ ] View source 看得到 Person / LocalBusiness / FAQPage 三段 JSON-LD
- [ ] https://www.yumeiot.com/sitemap.xml 有東西
- [ ] https://www.yumeiot.com/robots.txt 有 `Disallow: /admin`
- [ ] https://www.yumeiot.com/posts/ 看得到範例文章
- [ ] https://www.yumeiot.com/posts/2026-04-11-welcome/ 打得開
- [ ] https://www.yumeiot.com/search/ 可以搜到「育玫」「聊聊」「接班」
- [ ] https://www.yumeiot.com/admin/ 登入後能看到「文章／客戶見證／常見問題」三個 collection
- [ ] 在 CMS 新增一篇測試文章 → 送出 → Netlify 自動 deploy → 首頁 / posts 出現新文章
- [ ] GA4 即時報表看得到流量
- [ ] Google 的 [Rich Results Test](https://search.google.com/test/rich-results) 檢查首頁 FAQPage schema 有效

---

## 常見操作

- **加一篇文章**：`/admin` → 文章 → 新增
- **改 FAQ**：`/admin` → 常見問題（改完會同步到首頁的 FAQPage JSON-LD）
- **加客戶見證**：`/admin` → 客戶見證（有內容後首頁「見證」區塊就會從 placeholder 切成真實卡片）
- **改品牌色**：`app/globals.css` 的 `:root` + `tailwind.config.ts` 的 `colors`
