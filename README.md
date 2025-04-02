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
### プロジェクトの概要

<p>
このサイトは、ヘッドレスCMSとGSAPの活用方法を学習する目的で作成された架空のコーポレートサイトです。<br />
ヘッドレスCMSを利用してコンテンツの管理と配信を行い、GSAPで動的なアニメーションを実現しています。モダンなWeb技術を駆使して、ユーザー体験を向上させることに焦点を当てました。<br />
フォームはreact-hook-form,zodで作成し、バリデーション機能を実装。hubspotに連携しました。<br />
</p>

### 苦労したところ

#### 問題： FVの背景に配置されている「 C 」のロゴアニメーションが滑らかに動かない
<p>
gsapのscrubでスクロールに連動させて動かしています。<br />
最初はFVのセクション内にロゴ要素を配置し、スクロールに合わせてyのpositionを下にずらしていました。ですが、その実装だとロゴのアニメーションにカクつきが発生。<br />
</p>

#### 解決案： ロゴの要素をFVセクションから出してbodyの子要素として配置、refで要素の高さを取得しpositionに反映する実装に変更
<p>
fvセクションの高さからロゴ要素の高さをひいて動的に計算、どの画面幅でもfvセクションの真ん中にロゴが表示されるように調整<br />
  
  ```
// components/Contents/top/Top.tsx

  //refで取得(Mainコンポーネントの中のfvとlogoをrefで取得)
  const FV_HEIGHT = mainRef.current?.fvRef?.offsetHeight;
  const LOGO_HEIGHT = mainRef.current?.logoRef?.offsetHeight;

  ...省略

  //nullの可能性があるので存在を確認して代入
  if (FV_HEIGHT) {
    fv_height = FV_HEIGHT;
  } else {
    console.error("fv_height is null or undefined.");
  }

  if (LOGO_HEIGHT) {
    logo_height = LOGO_HEIGHT;
  } else {
    console.error("logo_height is null or undefined.");
  }
  
  LOGO_SCROLL_TL.set(".fv-logo", {
    top: fv_height / 2 - logo_height / 2,
  }).to(".fv-logo", {
    // **** FVのロゴをbodyに追従 ****
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: endValue,
      scrub: 1,
      markers: false,
      onUpdate: () => {
        const scrollY = window.scrollY;
          gsap.to(".fv-logo", {
              y: scrollY,
          });
        },
      },
    });
  ```

</p>

<p>
logoはnewsセクションにてスクロールの追従を止めるので、ここもrefでそれぞれの高さを取得、計算し終了位置を算出しました<br />
  
  ```
// components/Contents/top/Top.tsx

  //refで取得
  const FOOTER_HEIGHT = footerRef.current?.offsetHeight;
  const SERVICE_HEIGHT = mainRef.current?.serviceRef?.offsetHeight;
  const MEMBER_HEIGHT = mainRef.current?.memberRef?.offsetHeight;

  ...省略

  //nullの可能性があるので存在を確認して代入
  if (FOOTER_HEIGHT && SERVICE_HEIGHT && MEMBER_HEIGHT) {
    end_height = FOOTER_HEIGHT + SERVICE_HEIGHT + MEMBER_HEIGHT;
  } else {
    console.error("end_hight is null or undefined.");
  }

 if (mobile) {
     endValue = `bottom-=${end_height}px center+=15%`;
  } else if (tablet) {
    endValue = `bottom-=${end_height}px center+=15%`;
  } else if (small) {
    endValue = `bottom-=${end_height}px bottom`;
  } else if (medium) {
    endValue = `bottom-=${end_height + end_height * 0.25}px bottom`;
  } else if (large) {
    endValue = `bottom-=${end_height + end_height * 0.25}px bottom`;
  }

  LOGO_SCROLL_TL.set(".fv-logo", {
    top: fv_height / 2 - logo_height / 2,
  }).to(".fv-logo", {
   // **** FVのロゴをbodyに追従 ****
    scrollTrigger: {
     ...省略
      // scrollTriggerのend値に計算した値をセット  
      end: endValue,
      scrub: 1,
      markers: false,
      onUpdate: () => {
        const scrollY = window.scrollY;
          gsap.to(".fv-logo", {
              y: scrollY,
            });
          },
        },
      });
  ```
</p>


#### 問題： safariでのsvgアニメーションの挙動がおかしい
<p>
safariだけfvセクションからaboutセクションにかけてのlogoのアニメーション(色と大きさの変化)が極端に遅い
</p>

#### 解決案： logoをsvgからpngに変更。2枚重ねて置き、aboutセクションにかけて1枚目(紫色)をopacity: 0;にすることで2枚目(青色)への色変化を実現

<a href="https://github.com/Nanae-j/career-nexus_site/commit/736475a23adeed7a7371eb6586a48ec1f9ea8bbf" target="_blank">Commit 736475a</a>

<p>修正前</p>

https://github.com/user-attachments/assets/9bca7352-343a-4b7a-901f-07fe9c75a9e6

<p>修正後</p>

https://github.com/user-attachments/assets/a3a9a547-1697-4a7e-85f2-222ea9825b1d


#### 問題： フォームの送信が失敗する。hubspotにデータが送られていない。

#### 解決案： 複数選択のチェックボックス部分のデータの作り方を間違えていたためAIへの質問を参考に修正

<p>postmanを使用して確認したところ送信成功したのでPOSTのURLの間違いはなさそうでした。</p>
<img width="1427" alt="career nexusのフォームのエラー解決スクショ" src="https://github.com/user-attachments/assets/e4792105-991b-41a6-96ee-09b8e91c306e" />
<p>
複数選択の部分のデータ構造の作り方が怪しいと思いAI(claude)に質問。回答をもとに修正<br />
  
```
// contact.ts

export interface FormData {
  ...省略
  inquires: {
    [key: string]: boolean;
  };
}

// trueの値だけを抽出してセミコロン区切りの文字列を作成
const selectedInquiries = Object.keys(data.inquires)
  .filter((key) => data.inquires[key]) // trueのものだけ取得
  .join(";"); // セミコロンで結合

body: JSON.stringify({
  fields: [
    ...省略
  {
    objectTypeId: "0-1",
    name: "inquires_type",
    value: selectedInquiries,
  },

```

```
// scheme.ts

export const contactSchema = z.object({
  ...省略
  inquires: z
    .object({
      staffing: z.boolean(),
      recruitment_support: z.boolean(),
      foreign_employment: z.boolean(),
      others: z.boolean(),
    })
    .refine(
      (data) => Object.values(data).some((value) => value), // 少なくとも1つ選択されているか確認
      { message: "お問い合わせの種類を少なくとも1つ選択してください。" }
    ),
});

```

</p>

<p>hubspotでは以下のように用意</p>

![スクリーンショット 2025-04-02 22 17 20](https://github.com/user-attachments/assets/85df8f40-b288-48aa-a6f8-1a4ce350ede7)

<p>送信内容が以下のように保存、メールで通知が来ることを確認</p>

![スクリーンショット 2025-04-02 22 18 46](https://github.com/user-attachments/assets/46826a02-ffa3-47b9-94fc-5cbb9a45ddaf)


### 制作後の振り返り

<p>
制作を開始した当時は、Next.jsの基本構文に慣れ始めたばかりで、クライアントコンポーネントとサーバーコンポーネントの使い分けについてはまだ理解が不十分でした。そのため、useGSAPやLenisなどのライブラリの実装に苦労しました。<br />
まずは完成させることを第一目標として開発を進めましたが、結果としてパフォーマンスが低く全体的に動作が遅いアプリケーションとなってしまいました。これはコンポーネントの効率的な使用方法についての理解が不足していたことが原因だと考えています。<br />
特にGSAPによるアニメーションを多用したため、本来サーバーコンポーネントとして扱えるはずの部分も含めて、全体がクライアントコンポーネントとなってしまいました。<br />
今後は、アニメーション要素を必要とするコンポーネントのみをクライアントコンポーネントとして分離し、残りをサーバーコンポーネントとして実装するなど、パフォーマンス改善が必要です。<br />
一方で、以前学習したZodとReact Hook Formに、Server ActionsとHubSpotへの送信機能を組み合わせることで、学んだ知識を実践的に応用できた点は大きな成果でした。
</p>



  
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
├── .vscode
│   └── settings.json
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
│       ├── not-found.tsx
│       ├── page.tsx
│       ├── privacy
│       ├── robots.txt
│       ├── service
│       └── sitemap.xml
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
│   ├── ClientContactPage.tsx
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
├── not-found.tsx
├── page.tsx
├── privacy
│   ├── layout.tsx
│   └── page.tsx
├── robots.txt
├── service
│   ├── layout.tsx
│   └── page.tsx
└── sitemap.xml
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

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
