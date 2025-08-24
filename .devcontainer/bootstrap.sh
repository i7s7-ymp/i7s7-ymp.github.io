
#!/bin/bash

# Node.jsの最新LTS版がインストールされていることを確認
echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# npmを最新版にアップデート
echo "Updating npm to latest version..."
npm install -g npm@latest

# アップデート後のnpmバージョンを確認
echo "Updated npm version: $(npm --version)"

# プロジェクトの依存関係をインストール
echo "Installing project dependencies..."
npm install

# Astroプロジェクトの初期化チェック
if [ -f "astro.config.mjs" ] || [ -f "astro.config.js" ] || [ -f "astro.config.ts" ]; then
    echo "Astro project detected!"
    echo "Available scripts:"
    npm run --silent | grep -E "dev|build|preview"
else
    echo "Warning: This doesn't appear to be an Astro project"
fi

echo "Development environment setup complete!"
echo "Run 'npm run dev' to start the development server"