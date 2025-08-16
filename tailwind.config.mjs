/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // カスタム背景グラデーション / 未来の動的生成用
    'bg-neon-gradient',
    'bg-pop-gradient',
    'bg-cyber-gradient',
    'bg-purple-gradient',
    // アニメーション（JSで付け替える可能性）
    'animate-glow',
    'animate-float',
    'animate-ping',
    // 状態クラス / Active highlight (JS付与)
    'active',
    // ユーティリティコンポーネント（Astro slot外で生成される可能性）
    'section-card',
    'panel-title',
    'badge-pill',
    'stat-card',
    'stat-grid',
    'gradient-heading-sm',
    // パターン: text-accent-* / bg-accent-* の将来的な動的組み立てをパターンで確保
    { pattern: /(text|bg|border)-accent-(pink|cyan|neon|gold|coral|blue|indigo|purple)/ },
    { pattern: /from-accent-(pink|cyan|neon|gold|coral|blue|indigo|purple)/ },
    { pattern: /to-accent-(pink|cyan|neon|gold|coral|blue|indigo|purple)/ },
    // support.astro 内で `text-${color}-400` 形式などで動的生成しているためパターンで確保
    { pattern: /(text|bg|border)-(green|blue|orange|purple|yellow|cyan|red)-400/ },
    // 不透明度付きユーティリティ (bg-*-400/10,20 / border-*-400/30)
    'bg-green-400/10',
    'bg-blue-400/10',
    'bg-orange-400/10',
    'bg-purple-400/10',
    'bg-yellow-400/10',
    'bg-cyan-400/10',
    'bg-red-400/10',
    'bg-green-400/20',
    'bg-blue-400/20',
    'bg-orange-400/20',
    'bg-purple-400/20',
    'bg-yellow-400/20',
    'bg-cyan-400/20',
    'bg-red-400/20',
    'border-green-400/30',
    'border-blue-400/30',
    'border-orange-400/30',
    'border-purple-400/30',
    'border-yellow-400/30',
    'border-cyan-400/30',
    'border-red-400/30',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // よりバランスの取れたカラーパレット
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // モダンなアクセントカラー
        accent: {
          pink: '#ff6b9d',
          cyan: '#22d3ee',
          neon: '#10b981',
          gold: '#f59e0b',
          coral: '#f97316',
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
        },
        // 現代的なグレー
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      backgroundImage: {
        // より抑えめのグラデーション
        'city-gradient': 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
        'neon-gradient': 'linear-gradient(45deg, #22d3ee 0%, #3b82f6 50%, #10b981 100%)',
        'purple-gradient': 'linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)',
        'cyber-gradient': 'linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'pop-gradient': 'linear-gradient(45deg, #3b82f6 0%, #22d3ee 50%, #10b981 100%)',
      },
      animation: {
        'pulse-neon': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6' },
          '100%': { boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
