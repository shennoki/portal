# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 構成

- npm プロジェクトのルートは `app/`（リポジトリルートは Docker / Amplify 設定のみ）。
- デプロイは AWS Amplify。main への push で自動デプロイされるため、main への push は必ずユーザー承認を得る。

## コマンド

- 開発: `make start`（Docker。ローカル環境を汚さない方針なので、動作確認はコンテナで行う）
- 検証: `app/` で `npm run build`（`astro check` を兼ねる。lint / test は存在しない）

## 知らないと壊す制約

- **HTML 要素に `style` 属性を書かない**。CSP が許可リスト方式で、`style-src-attr` は Astro の設定上許可できない。動的スタイルはクラス + scoped CSS で表現する（List.astro のアクセント色が実例）。
- **`astro.config.mjs` の `vite.resolve.alias` の `@styles` を消さない**。Vite 8 は tsconfig paths を Sass に渡さないため、これが無いと `additionalData` が解決できずビルドが壊れる。
- SCSS の共通部分（mixin `mq()`、CSS 変数、リセット）は `additionalData` で全 style ブロックに自動注入される。コンポーネント側で `@use` を書き足さない。
- Amplify のビルドイメージ（Node バージョン）はコンソール側設定。コードでは制御できない。

## ハマりどころ

- dev サーバ起動失敗（ERR_EMPTY_RESPONSE）は `app/.astro/dev.json` の stale ロックが原因。`astro dev stop` か同ファイル削除で復旧。

## 慣習

- コミットメッセージは Conventional Commits（英語）。
