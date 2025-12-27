# VitePress Web公開ガイド

## 🌐 ローカル & Web両方で使う設定

現在、VitePressはローカル (`npm run docs:dev`) で動作しています。
これをWebでも公開する手順を説明します。

---

## 📋 準備（5分）

### 1. Gitリポジトリを初期化

```bash
cd /Users/kaitakumi/Documents/99_life
git init
git add .
git commit -m "Initial commit: VitePress setup"
```

### 2. GitHubリポジトリを作成

1. https://github.com/new にアクセス
2. リポジトリ名: `99-life` (または好きな名前)
3. **Private** を選択（個人情報があるため）
4. Create repository

### 3. GitHubにプッシュ

```bash
git remote add origin https://github.com/YOUR_USERNAME/99-life.git
git branch -M main
git push -u origin main
```

---

## 🚀 デプロイ方法（3つの選択肢）

### Option 1: Vercel（おすすめ・最も簡単）

#### メリット
- ✅ 自動デプロイ（GitHubにpushするだけ）
- ✅ 無料プラン十分
- ✅ カスタムドメイン可能
- ✅ プレビュー環境自動生成

#### 手順
1. https://vercel.com/ にアクセス
2. GitHubでログイン
3. "Import Project" → GitHubリポジトリ選択
4. Build設定:
   - Build Command: `npm run docs:build`
   - Output Directory: `.vitepress/dist`
5. Deploy

**完了！** 数分で公開されます。

---

### Option 2: Netlify

#### 手順
1. https://netlify.com/ にアクセス
2. GitHubでログイン
3. "New site from Git" → リポジトリ選択
4. Build設定:
   - Build command: `npm run docs:build`
   - Publish directory: `.vitepress/dist`
5. Deploy

---

### Option 3: GitHub Pages

#### 手順
1. `.github/workflows/deploy.yml` を作成:

```yaml
name: Deploy VitePress

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: .vitepress/dist
```

2. GitHubリポジトリの Settings → Pages → Source: `gh-pages` ブランチ

---

## 🔒 プライバシー設定（重要）

個人情報を含むファイルは公開しないように注意！

### `.gitignore` を作成

```
# 個人情報を含むファイル
00相談したい_topics/
mythought.md

# ビルド出力
.vitepress/dist
.vitepress/cache
node_modules/

# システムファイル
.DS_Store
```

### または、特定のフォルダだけ公開する方法

VitePress設定で、公開したいページだけを指定できます。

---

## 📝 推奨: Vercelで公開

最も簡単なので、Vercelをおすすめします。

### 今すぐ試す手順

1. **Gitリポジトリ初期化**
   ```bash
   cd /Users/kaitakumi/Documents/99_life
   git init
   ```

2. **個人情報を除外**
   - `.gitignore` 作成（上記参照）

3. **GitHubにプッシュ**
   - GitHubリポジトリ作成
   - コードをプッシュ

4. **Vercelでデプロイ**
   - Vercel.comでインポート
   - 自動デプロイ完了

---

## 🎯 完了後の運用

### ローカル開発
```bash
npm run docs:dev
```
→ http://localhost:5173/

### Web公開
GitHubにpushするだけで自動デプロイ！

```bash
git add .
git commit -m "Update content"
git push
```

---

## 💡 次のステップ

1. `.gitignore` を作成して個人情報を保護
2. Vercelでデプロイ
3. 公開URLを取得

やってみますか？
