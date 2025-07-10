
# Hugo extended 最新版をインストール（アーキテクチャ自動判別）
HUGO_VERSION=$(curl -s https://api.github.com/repos/gohugoio/hugo/releases/latest | grep 'tag_name' | cut -d '"' -f4 | sed 's/^v//')
ARCH=$(uname -m)
if [ "$ARCH" = "x86_64" ]; then
  HUGO_TAR=hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz
elif [ "$ARCH" = "aarch64" ]; then
  HUGO_TAR=hugo_extended_${HUGO_VERSION}_linux-arm64.tar.gz
else
  echo "Unsupported architecture: $ARCH" >&2
  exit 1
fi
curl -LO https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_TAR}
tar -xzf $HUGO_TAR hugo
sudo mv hugo /usr/local/bin/
sudo chmod +x /usr/local/bin/hugo
rm -f $HUGO_TAR
