# Lightning Web Components レシピ

[![CircleCI](https://circleci.com/gh/trailheadapps-jp/lwc-recipes-jp.svg?style=svg)](https://circleci.com/gh/trailheadapps-jp/lwc-recipes-jp)

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


<!-- 
## Optional Installation Instructions

This repository contains several files that are relevant if you want to integrate modern web development tooling to your Salesforce development processes, or to your continuous integration/continuous deployment processes.

### Code formatting

[Prettier](https://prettier.io/) is a code formatter used to ensure consistent formatting across your code base. To use Prettier with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) from the Visual Studio Code Marketplace. The [.prettierignore](/.prettierignore) and [.prettierrc](/.prettierrc) files are provided as part of this repository to control the behavior of the Prettier formatter.

### Code linting

[ESLint](https://eslint.org/) is a popular JavaScript linting tool used to identify stylistic errors and erroneous constructs. To use ESLint with Visual Studio Code, install [this extension](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode-lwc) from the Visual Studio Code Marketplace. The [.eslintignore](/.eslintignore) file is provided as part of this repository to exclude specific files from the linting process in the context of Lighning Web Components development.

### Pre-commit hook

This repository also comes with a <package.json> file that makes it easy to set up a pre-commit hook that enforces code formatting and linting by running Prettier and ESLint every time you `git commit` changes.

To set up the formatting and linting pre-commit hook:

1. Install [Node.js](https://nodejs.org) if you haven't already done so
2. Run `npm install` in your project's root folder to install the ESLint and Prettier modules (Note: Mac users should verify that Xcode command line tools are installed before running this command.)

Prettier and ESLint will now run automatically every time you commit changes. The commit will fail if linting errors are detected. You can also run the formatting and linting from the command line using the following commands (check out <package.json> for the full list):

```
npm run lint:lwc
npm run prettier
```
