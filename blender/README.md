# Blender source assets

Portfolio v2のBlender制作元を管理するディレクトリです。Webサイトが実行時に読み込む最適化済みアセットは`public/models/`へ書き出し、制作元の`.blend`とは分離します。

学習順序とMain Rider再開条件は[`docs/blender-learning-plan.md`](../docs/blender-learning-plan.md)を正本とします。

## Directory policy

```text
blender/
  learning/      小さな学習課題のマイルストーン
  production/    本番キャラクター、プロップ、背景の制作元
  shared/        Blender制作で共有する参照画像や素材
  work/          細かい連番保存。Git管理外
  cache/         Bake、simulation cache。Git管理外
  render-output/ 連番レンダー。Git管理外
```

`.blend`はGit LFSで管理します。GitHub上では内部差分を確認できないため、採用するマイルストーンには小さなプレビュー画像と作業メモを添付してください。

## Current production checkpoints

### Main Rider

```text
production/characters/main-rider/main-rider-manual-anatomy.blend
```

人物の大形状を手動で学び直すためのチェックポイントです。リトポロジー、UV、ウェイト、補助ボーン、Corrective Shape Keyは、デザインスカルプトが承認できるまで再開しません。

### Night Carrier

```text
production/characters/night-carrier/night-carrier-reference.blend
```

三面図を配置した基準ファイルです。Main Riderの学習工程が人物制作まで到達するまで、本格的なモデリングは保留します。

## Saving and committing

作業中の細かい保存は、無視対象の`work/`へ置きます。

```text
blender/work/future-can-v001.blend
blender/work/future-can-v002.blend
```

学習課題の合格条件を満たした時点で、`.blend`、プレビュー、READMEを`learning/`へコピーしてコミットします。

```text
learning/01-fundamentals/future-can/
  future-can-stage01.blend
  preview.webp
  README.md
```

## External data

- 外部ファイルは相対パスで参照します。
- 配布用の自己完結スナップショット以外では、不要な高解像度素材をPackしません。
- 現在移行した2つのキャラクター`.blend`には、使用中の三面図がPackされています。
- 元画像と整列済み画像は`shared/references/characters/`にも保持します。

## Web export

Web向けには制作元を直接配信せず、軽量化したGLBを書き出します。

```text
blender/production/.../*.blend  ->  public/models/*.glb
```

公開前にポリゴン数、テクスチャ容量、ジョイント数、アニメーション、実機フレームレートを検証します。
