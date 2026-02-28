# Tom Figma → Storybook

Figma 設計轉成元件並在 Storybook 展示。

## 本機開發

```bash
npm install
npm run storybook   # 開 http://localhost:6006
```

## 部署到 GitHub Pages

1. 把程式推到 GitHub（branch `main` 或 `master`）。
2. 在 repo **Settings → Pages**：
   - **Build and deployment → Source** 選 **GitHub Actions**。
3. 之後每次 push 到 `main`/`master` 會自動建置並部署；也可在 **Actions** 頁手動執行 workflow「Deploy Storybook to GitHub Pages」。

部署完成後，Storybook 網址為：

**https://\<你的 GitHub 帳號>.github.io/\<repo 名稱>/**
