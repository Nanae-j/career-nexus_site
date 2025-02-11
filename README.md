<div id="top"></div>

## 使用技術一覧

<div style="display: inline">

  <!-- フロントエンドのフレームワーク一覧 -->
  <a href="https://nodejs.org/ja">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  </a>
  <a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/-Next.js-blue.svg?logo=next.js&style=for-the-badge">
  </a>
  <!-- フロントエンドの言語 -->
  <a href="http://ja.react.dev/">
  <img src="https://img.shields.io/badge/-React-23272f.svg?logo=react&style=for-the-badge">
  </a>
  <a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/-Typescript-FFF.svg?logo=typescript&style=for-the-badge">
  </a>
  
  <!-- ミドルウェア -->
  <a href="https://microcms.io/">
  <img src="https://img.shields.io/badge/-microCMS-563bff.svg?logo=microcms&style=for-the-badge">
  </a>
  <a href="https://www.hubspot.jp/">
 <img src="https://img.shields.io/badge/-Hubspot-gray.svg?logo=hubspot&style=for-the-badge">
  </a>

</div>

#### 使用ライブラリ

<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://gsap.com/">GSAP</a></p>
  <p><a href="https://lenis.darkroom.engineering/">lenis</a></p>
  <p><a href="https://github.com/microcmsio/microcms-js-sdk?tab=readme-ov-file">microcms-js-sdk</a></p>
  <p><a href="https://www.react-hook-form.com/">react-hook-form</a></p>
  <p><a href="https://zod.dev/">zod</a></p>
  <p><a href="https://sass-lang.com/">sass</a></p>
  <p><a href="https://tailwindcss.com/">tailwindcss</a></p>
</div>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)

<!-- プロジェクトの概要を記載 -->

## プロジェクトについて

<p align="right">(<a href="#top">トップへ</a>)</p>

<!-- プロジェクトの環境を記載 -->

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク | バージョン |
| -------------------- | ---------- |
| Node.js              | 18.20.4    |
| Next.js              | 14.2.20    |
| React                | 18.3.1     |

その他のパッケージのバージョンは package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```
.
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src
│   └── app
│       ├── _actions
│       ├── _fonts
│       ├── _libs
│       ├── _validations
│       ├── about
│       ├── components
│       ├── contact
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── member
│       ├── news
│       ├── page.tsx
│       ├── privacy
│       └── service
├── tailwind.config.ts
└── tsconfig.json
```

app/

```
.
├── _actions
│   └── contact.ts
├── _fonts
│   ├── GeistMonoVF.woff
│   └── GeistVF.woff
├── _libs
│   ├── microcms.ts
│   └── utils.ts
├── _validations
│   └── scheme.ts
├── about
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Contents
│   │   ├── about
│   │   ├── news
│   │   ├── service
│   │   └── top
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Logos
│   │   ├── Logo.tsx
│   │   └── MenuLogo.tsx
│   ├── theme
│   │   └── theme.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── AdobeFont.tsx
│       ├── BreadCrumb.tsx
│       ├── Button.tsx
│       ├── CodingSVG.tsx
│       ├── Date.tsx
│       ├── FaceTimeSVG.tsx
│       ├── LowerTitle.tsx
│       ├── MemberList.tsx
│       ├── NavItems.tsx
│       ├── ReceptionistSVG.tsx
│       ├── RollText.tsx
│       ├── Sheet.tsx
│       ├── TextSplitter.tsx
│       └── Transition.tsx
├── contact
│   ├── layout.tsx
│   └── page.tsx
├── favicon.ico
├── globals.css
├── layout.tsx
├── member
│   ├── layout.tsx
│   └── page.tsx
├── news
│   ├── [slug]
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── page.tsx
├── privacy
│   ├── layout.tsx
│   └── page.tsx
└── service
    ├── layout.tsx
    └── page.tsx
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

In the project directory, you can run:

#### `npm install`

### .env.local ファイルを作成

以下の環境変数の一覧を元に作成

```
### 環境変数の一覧

| 変数名                        | 役割
| -----------------------------| ----------------------------------------------------------------
| NEXT_PUBLIC_KIT_ID           | AdobeフォントのkitId
| MICROCMS_API_KEY             |
| MICROCMS_SERVICE_DOMAIN      |
| HUBSPOT_PORTAL_ID            |
| HUBSPOT_FORM_ID              |

```

### 動作確認

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<p align="right">(<a href="#top">トップへ</a>)</p>
