/**
 * computeUnifiedScale
 * 共通Y軸スケール計算ロジック (cloud / pattern など棒グラフで再利用)
 * 可視出力に影響を与えない移設 (Stage5: ロジック抽出)
 *
 * 入力: values 数値配列
 * 出力: { yMax, step, ticks[] }
 * エッジケース: 空配列 / 全0 の場合は 0..5 の固定スケール
 */
export interface UnifiedScale {
  yMax: number;
  step: number;
  ticks: number[];
}

export function computeUnifiedScale(values: number[]): UnifiedScale {
  const maxVal = Math.max(...values, 0);
  if (!values.length || maxVal === 0) {
    return { yMax: 5, step: 1, ticks: [0, 1, 2, 3, 4, 5] };
  }
  const segments = 5; // tick は 0 含め 6 本
  const rawStep = maxVal / segments;
  const magnitude = 10 ** Math.floor(Math.log10(rawStep));
  const norm = rawStep / magnitude;
  let base: number;
  if (norm <= 1) base = 1;
  else if (norm <= 2) base = 2;
  else if (norm <= 2.5) base = 2.5;
  else if (norm <= 5) base = 5;
  else base = 10;
  let step = base * magnitude;
  if (step < 1) step = 1;
  const yMax = step * segments;
  const ticks: number[] = [];
  for (let v = 0; v <= yMax + 0.0001; v += step) ticks.push(Number(v.toFixed(8)));
  return { yMax, step, ticks };
}
