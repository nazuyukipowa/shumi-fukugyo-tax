# 趣味副業の確定申告ガイド (shumi-fukugyo-tax.com)

料理・音楽・DIYなどの趣味を副業にした会社員のための、確定申告・節税・会計ソフト比較サイト。Next.js (App Router) + TypeScript + Tailwind CSS で構築。

## 機能

- レスポンシブ対応のランディングページ
- 4カテゴリ（確定申告の基本／趣味別ガイド／会計ソフト比較／開業届・青色申告）
- 趣味別ガイド3サブページ（料理・音楽・DIY）
- freee / マネーフォワードへのアフィリエイトリンク表示エリア
- SEO対策（メタタグ、OGP、JSON-LD構造化データ、sitemap.xml、robots.txt）
- Google Analytics 4 設置済み（環境変数で測定IDを指定）
- Edge Runtime 使用の動的OGP画像生成

## セットアップ

```bash
npm install
cp .env.local.example .env.local
# .env.local を編集して GA ID とアフィリリンクを設定
npm run dev
```

ブラウザで http://localhost:3000 を開く。

## 環境変数

| 変数 | 用途 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | サイトの絶対URL（例: `https://shumi-fukugyo-tax.com`） |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 の測定ID（`G-XXXXXXXXXX`） |
| `NEXT_PUBLIC_FREEE_AFFILIATE_URL` | freee のアフィリエイトリンク |
| `NEXT_PUBLIC_MF_AFFILIATE_URL` | マネーフォワードのアフィリエイトリンク |

## デプロイ

Vercel への接続が最短：

```bash
vercel
```

環境変数は Vercel ダッシュボードまたは `vercel env add` で追加。

## ディレクトリ構成

```
app/
  layout.tsx           # ルートレイアウト + メタタグ
  page.tsx             # トップページ (LP)
  sitemap.ts           # sitemap.xml 自動生成
  robots.ts            # robots.txt 自動生成
  manifest.ts          # PWA manifest
  opengraph-image.tsx  # OGP 画像（動的生成）
  not-found.tsx        # 404
  kakutei-shinkoku/    # 確定申告の基本
  hobby-guide/         # 趣味別ガイド
    cooking/
    music/
    diy/
  kaikei-soft/         # 会計ソフト比較
  kaigyo-aoiro/        # 開業届・青色申告
  about/               # 運営者について
  privacy/             # プライバシーポリシー
  disclaimer/          # 免責事項
components/
  Header.tsx
  Footer.tsx
  Hero.tsx
  CategoryGrid.tsx
  HobbyGrid.tsx
  AffiliateSection.tsx
  GoogleAnalytics.tsx
  PageHero.tsx
  Prose.tsx
lib/
  site.ts              # サイト設定・カテゴリ定義
```

## カラースキーム

ブランドカラーは `tailwind.config.ts` の `brand` パレット（青緑系）と `accent` パレット（シアン系）で管理。

## ライセンス

私的利用前提。

## 注意

掲載されている税務情報は一般的な解説であり、個別の判断を保証するものではありません。実際の確定申告は税理士または税務署にご相談ください。
