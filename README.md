# Lightning Web Components レシピ
<!--
[![CircleCI](https://circleci.com/gh/trailheadapps-jp/lwc-recipes-jp.svg?style=svg)](https://circleci.com/gh/trailheadapps-jp/lwc-recipes-jp)
-->

## This is Localized Repository. Original is here.
https://github.com/trailheadapps/lwc-recipes

![recipes-logo](recipes-logo.png)

Lightning Web Componentsの簡単なコードサンプル集を提供します。 それぞれのレシピは特定のタスクについて30行弱程度のコードで構築されています。ソースの表示リンクでGithubのコードを参照できます。Hello Worldからサードパーティのライブラリやデータアクセスまで、豊富なレシピがあります！

## インストール手順

Lightning Web Components レシピには2種類のインストール方法があります。:

- [Salesforce DXを利用](#salesforce-dxを使ったレシピのインストール): 推奨する手順です。開発者でアプリとコードを詳しく知りたい方はこちらを利用してください。
- [ロック解除済みパッケージを利用](#ロック解除済みパッケージを使ったレシピのインストール): このオプションはローカルの開発環境のインストール無しに誰でもサンプルアプリを試すことができます。

## Salesforce DXを使ったレシピのインストール

> **重要**: 現在はプレリリースのため、以下の様なフォルダ名をがプロジェクトのパスに含まれていないことを確認して下さい: **lwc**, **aura**, **wave**。例えば、このリポジトリを **/Projects/lwc** の様な名称のフォルダにcloneしないで下さい。

1. 環境をセットアップします。 [Quick Start: Lightning Web Components](https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/) Trailhead プロジェクトのステップに従います。このステップには以下が含まれます:

  - Spring '19 プレリリースにサインアップし、Dev Hubを有効化する
  - プレリリースバージョンの Salesforce CLI のインストール
  - Visual Studio Codeのインストール
  - ightning Web Components extensionを含む、Visual Studio Code Salesforce extensionsのインストール

2. まだ実施していない場合にはSpring '19 Hub組織に認証し、エイリアスを設定します(spring19hub):

  ```
  sfdx force:auth:web:login -d -a spring19hub
  ```

3. lwc-recipes-jp リポジトリをCloneします:

  ```
  git clone https://github.com/trailheadapps-jp/lwc-recipes-jp
   cd lwc-recipes-jp
  ```

4. スクラッチ組織を生成し、エイリアスを設定します (**lwc-recipes-jp** を以下のコマンドラインでは使用):

  ```
  sfdx force:org:create -s -f config/project-scratch-def.json -a lwc-recipes-jp
  ```

5. アプリをスクラッチ組織にPushします:

  ```
  sfdx force:source:push
  ```

6. **recipes** 権限セットをデフォルトユーザにアサインします:

  ```
  sfdx force:user:permset:assign -n recipes
  ```

7. サンプルデータをロードします:

  ```
  sfdx force:data:tree:import --plan ./data/data-plan.json
  ```

8. スクラッチ組織を開きます:

  ```
  sfdx force:org:open
  ```

9. **設定** ページから, **テーマおよびブランド設定** で **Recipes Lite** もしくは **Recipes Blue** テーマを有効にします。

10. アプリケーションランチャーより、 **LWC** アプリを選択します。

## ロック解除済みパッケージを使ったレシピのインストール

1. [サインアップ](https://www.salesforce.com/form/signup/prerelease-spring19/) ページでSpring '19プレリリース組織を取得して私のドメインを有効化し、すべてのユーザに展開します。

2. [このリンク](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tB0000000YGYOIA4) をクリックし、レシピのロック解除済みパッケージをSpring '19組織にインストールします。

3. **すべてのユーザのインストール** を選択します。

4. 取引先及び取引先責任者のデータをインポートします:

  - [こちら](https://raw.githubusercontent.com/trailheadapps-jp/lwc-recipes-jp/master/data/Accounts-Contacts.csv) をクリックし**Accounts-Contacts.csv** ファイルにアクセスします。ブラウザウィンドウで右クリックし、ファイルを **Accounts-Contacts.csv** として保存します。
  - **設定** ページより**データインポート** とクイック検索に入力し、**データインポートウィザード** をクリックします。
  - **ウィザードを起動** をクリックします
  - **取引先 & 取引先責任者**を選択し、**新規レコードの追加**をクリックします。
  - 保存した**Accounts-Contacts.csv** ファイルをアップロードエリアにドラッグします。
  - **次へ**, **次へ**とクリックし、**インポート開始** をクリックします。

5. **設定** ページから, **テーマおよびブランド設定** で **Recipes Lite** もしくは **Recipes Blue** テーマを有効にします。

6. アプリケーションランチャーより、 **LWC** アプリを選択します。



## 追加のインストール手順

このリポジトリではモダンなWeb開発のツールをSalesforce開発プロセスに統合したり、継続的インテグレーション/継続的デプロイメントのプロセスを実現するのに関連するいくつかのファイルが含まれています。

### コードフォーマット

[Prettier](https://prettier.io/) はコードベースを一貫したフォーマットで保証するために使用されるコードフォーマッタです。PrettierをVisual Studio Codeと一緒に利用する場合、[こちらの機能拡張](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) をVisual Studio Code Marketplaceからインストールしてください。このリポジトリの一部として提供される [.prettierignore](/.prettierignore) 及び [.prettierrc](/.prettierrc) ファイルはPrettierフォーマッタの挙動をコントロールします。

### コードのlinting

[ESLint](https://eslint.org/) は構文エラーや誤った構成を見分けるためのポピュラーなJavaScript lintingツールです。ESLintをVisual Studio Codeと一緒に利用する場合、[こちらの機能拡張](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) をVisual Studio Code Marketplaceからインストールしてください。このリポジトリの一部として提供される[.eslintignore](/.eslintignore) ファイルでLighning Web Components開発のコンテキストで特定のファイルをlintingプロセスから除外します。

### Pre-commit hook

このリポジトリには <package.json> ファイルも付属しています。`git commit` で変更をするたびにPrettierとESLintを実行してコードのフォーマットとlintingを強制するpre-commitフックを簡単に設定できます。

フォーマットとlintingのpre-commit hook 設定するには:

1. [Node.js](https://nodejs.org) がインストールされていない場合はインストールします
2. `npm install` をプロジェクトルートフォルダで実行し、ESLint及びPrettierモジュールをインストールします (メモ: MacユーザはXcode command line toolsがインストールされていることをこのコマンドの実行前に確認してください。)

Prettier 及び ESLint はcommit変更のたびに毎回自動的に実行されます。コミットはlintingエラーを検出した場合には失敗します。またフォーマット及びlintingをコマンドラインから以下のコマンドによって実行することも可能です( <package.json> で完全なリストを確認してください):

```
npm run lint:lwc
npm run prettier
```
