# Blender学習ロードマップ — Portfolio V2

最終更新: 2026-08-29

## 目的

このロードマップは、Blender初心者が小さな完成体験を積みながら、最終的にPortfolio V2用のスタイライズド人物、コンパニオンロボット、夜のコンビニシーンを自力で制作できるようになるための学習計画です。

フルボディ人物の制作は、モデリング、スカルプト、人体解剖、リトポロジー、リグ、ウェイト、ポーズ補正を同時に要求します。したがって、少年モデルの制作を一時停止し、次の順番で段階的に学習します。

1. 近未来コンビニの缶飲料
2. 屋外広告看板
3. ゴミ回収コンパニオンロボット
4. 陶器製マスコット
5. 顔のない上半身マネキン
6. デフォルメ全身キャラクター
7. Main Riderの人体制作再開

## 現在の判断

- `main-rider-retopo-04b-*` は削除しないが、旧検証ブランチとして保留する。
- 人体制作を再開するときは `main-rider-sculpt-step04-manual-anatomy.blend` を基準にする。
- Main Riderのリトポロジー、UV、ウェイト、補助ボーン、Shape Keyは、人体のデザインスカルプトが承認できるまで再開しない。
- 学習中の各課題は「モデリングした」「動画を見た」ではなく、下記の合格条件を満たした時点で完了とする。

## 学習条件

- 想定時間: 1日45〜60分、週4〜5日、約8週間
- 1回の配分:
  - 15分: 公式教材を見る
  - 25分: 教材と同じ操作を再現する
  - 15分: 教材を閉じ、自分の題材へ応用する
  - 5分: スクリーンショットと短いメモを残す
- Blenderのバージョン: プロジェクトファイルはBlender 5.2以降を前提とする。
- 学習ファイルは本番ファイルと分離し、`blender/learning/`以下へ保存する。

推奨命名例:

```text
blender/learning/week-01-navigation.blend
blender/learning/week-02-future-can-v01.blend
blender/learning/week-03-billboard-v01.blend
blender/learning/week-04-companion-robot-v01.blend
```

## 第1週: 基本操作

### 学ぶこと

- 3D Viewportの移動、回転、ズーム
- Object ModeとEdit Mode
- 選択、移動、回転、拡縮
- Primitiveの追加、複製、削除
- Collectionと命名
- 保存、別名保存、ファイル復旧

### 練習題材

Cube、Cylinder、Sphereだけで机、缶、トレー、小皿、ランプを作る。細部やマテリアルは作らない。

### 合格条件

- `G / R / S`と軸指定を迷わず使える。
- Object ModeとEdit Modeの違いを説明できる。
- オブジェクトを命名し、Collectionへ整理できる。
- 元ファイルを上書きせず、別名保存できる。

## 第2週: 課題01「2126年の缶飲料」

### 学ぶこと

- Cylinder
- Inset、Extrude、Loop Cut
- Bevelと法線
- Shade Smooth
- Modifierの非破壊編集
- Principled BSDFの基礎

### 制作物

未来のコンビニに並ぶ缶飲料を1本作る。ラベルは最初は画像ではなく単色マテリアルで表現する。

### 合格条件

- シルエットが缶として成立する。
- ハイライトが極端に途切れない。
- Bevelの役割を説明できる。
- Scaleを適用する理由を説明できる。
- 単純な照明とカメラで1枚レンダリングできる。

## 第3週: 課題02「屋外広告看板」

### 学ぶこと

- 複数オブジェクトの組み立て
- Mirror、Array、Solidify
- Emission Shader
- Text Object
- Parenting、Origin、命名規則
- 夜間照明とカメラ構図

### 制作物

Hero背景全体ではなく、支柱、外枠、表示面、上部照明、サブディスプレイ、電源ボックスからなる看板単体を作る。

### 合格条件

- 5〜10個のオブジェクトを役割別に整理できる。
- 通常素材と発光素材を使い分けられる。
- 正面だけでなく側面・背面にも成立する厚みを持たせられる。
- 夜のプロダクトショットを1枚レンダリングできる。

## 第4週: 課題03「ゴミ回収コンパニオンロボット」

### 学ぶこと

- Primitiveを組み合わせたデザイン
- Bevel、Mirror、簡単なBoolean
- オブジェクトごとの回転軸
- Transform適用
- Collectionと命名

### 制作物

本体、頭、目、車輪、蓋、アンテナからなる小型ロボットを作る。犬型や人型にはせず、箱と球を中心に構成する。

推奨構成:

```text
ROBOT_BODY
ROBOT_HEAD
ROBOT_LID
ROBOT_EYE
ROBOT_WHEEL.L
ROBOT_WHEEL.R
ROBOT_ANTENNA
```

### 合格条件

- 前後左右から見て構造が成立する。
- 各パーツの役割を説明できる。
- 蓋、頭、車輪のOriginが正しい回転位置にある。
- ModifierをすぐApplyせず、後から調整できる状態を保てる。

## 第5週: マテリアルとオブジェクトアニメーション

### 学ぶこと

- Metallic、Roughness、Emission
- UV展開の基礎
- Keyframe、Timeline、Graph Editor
- 補間とEase In/Out
- EEVEE、Camera、Render Output

### 制作物

コンパニオンロボットが画面外から入り、停止し、頭を振り、蓋を開き、目を点滅させて退出する5〜10秒の映像を作る。この段階ではリグを使わず、オブジェクトへ直接キーフレームを設定する。

### 合格条件

- LocationとRotationへキーフレームを設定できる。
- Graph Editorで加速・減速を調整できる。
- 短い動画を正しい形式で書き出せる。

## 第6週: 簡単なリグ

### 学ぶこと

- Armature、Bone Parent
- Edit ModeとPose Mode
- Rest PositionとPose Position
- Automatic WeightsとWeight Paint
- 簡単なConstraint

### 制作物

同じコンパニオンロボットへ、`root / body / head / lid / antenna / wheel.L / wheel.R`程度の単純なリグを設定する。剛体パーツは原則として1本のボーンへ100%追従させる。

### 合格条件

- ボーンの親子関係を作れる。
- 頭と蓋を意図した軸で動かせる。
- Poseをリセットできる。
- オブジェクトアニメーションとリグアニメーションの違いを説明できる。

## 第7週: 課題04「陶器製マスコット」

### 学ぶこと

- Grab、Clay Strips、Inflate、Smooth
- MaskとX Symmetry
- Voxel Remesh、Dyntopo
- 大きな塊から細部へ進む手順
- 正面、側面、斜めのシルエット

### 制作物

ペンギン、小鳥、猫型置物、未来コンビニの店内マスコットなど、3〜5個の大きな塊で読める生物を作る。

### 合格条件

- 細部がなくてもキャラクターとして読める。
- 正面・側面・斜めから形が成立する。
- RemeshとDyntopoの違いを説明できる。
- 高解像度化する前にシルエットを決められる。

## 第8週: 簡易人型

### 学ぶこと

- 頭身
- 胸郭と骨盤
- 関節位置
- 正面図と側面図の整合
- 単純な人型リグ

### 制作物

顔なし、5〜6頭身、ミトン型の手、靴型の足、筋肉・衣服なしの簡易マネキンを作る。最初は頭、胸郭、骨盤、上腕、前腕、手、大腿、下腿、足を別オブジェクトで構成してよい。

### 合格条件

- 黒いシルエットだけでも人型に見える。
- 肩、肘、股関節、膝の位置が自然である。
- 正面図と側面図が矛盾しない。
- 単純なリグで基本ポーズを付けられる。

## Main Rider再開条件

以下をすべて満たしたら `main-rider-sculpt-step04-manual-anatomy.blend` を再開する。

- 上記4作品を少なくとも1回ずつ完成させた。
- Primitiveから簡単なモデルを設計できる。
- Object/Edit/Sculpt/Pose Modeの役割を説明できる。
- シルエットを先に決め、細部を後回しにできる。
- 簡易人型の正面・側面・斜め形状を自力で整えられる。
- 簡単なリグ、ウェイト、キーフレームを設定できる。

Main Rider再開後の順序:

1. 頭身と全身比率
2. 胸郭、骨盤、背骨、肩帯
3. 腕と脚のテーパー
4. 首、手、足の大形状
5. 三面図と斜めビューによるデザイン承認
6. リトポロジー
7. UV、ウェイト、ポーズQA
8. 衣服、髪、顔、小物

## 当面保留する項目

- 本格的な人体解剖
- フルボディリトポロジー
- 顔の変形トポロジー
- Corrective Shape Key
- 補助ボーン
- クロス、髪のシミュレーション
- 複雑なGeometry Nodes
- フォトリアルレンダリング

## 公式教材

- [Blender Fundamentals 4.5 LTS](https://studio.blender.org/training/blender-fundamentals-45-lts/chapter/blender_4-5_lts_first-steps/)
- [Blender Fundamentals: Sculpting Introduction](https://studio.blender.org/training/blender-fundamentals-45-lts/sculpting_introduction/)
- [Blender Fundamentals: Basic Sculpting](https://studio.blender.org/training/blender-fundamentals-45-lts/basic-sculpting/)
- [Blender 5.2 LTS Manual](https://docs.blender.org/manual/en/latest/)
- [Blender 5.2 LTS Manual: Mesh Modeling](https://docs.blender.org/manual/en/latest/modeling/meshes/introduction.html)
- [Blender 5.2 LTS Manual: Sculpting](https://docs.blender.org/manual/en/latest/sculpt_paint/sculpting/index.html)
- [Blender 5.2 LTS Manual: Armatures](https://docs.blender.org/manual/en/latest/animation/armatures/index.html)
- [Blender Studio: Stylized Character Workflow](https://studio.blender.org/training/stylized-character-workflow/)
- [Blender Studio: Realistic Character Workflow](https://studio.blender.org/training/realistic-human-research/chapter/design-blocking-sculpting/)

公式教材から採用する重要原則:

- Primitiveで大形状を作ってから詳細を増やす。
- Sculptでは可能な限り低い解像度から始める。
- スカルプト前にScaleを適用し、ブラシ挙動を安定させる。
- 人物はデザインスカルプトを承認してからリトポロジーへ進む。
- 教材を見た直後に、自分の題材へ同じ操作を応用する。

## 学習ログのテンプレート

各セッションの終了時に以下を記録する。

```markdown
## YYYY-MM-DD / 課題名

- 作業時間:
- 今日覚えた操作:
- 理解できなかった点:
- 次回直す箇所:
- 完成条件の進捗:
- スクリーンショット:
```
