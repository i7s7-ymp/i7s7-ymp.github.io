import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 45_000,
  retries: 0,
  webServer: {
    // Astro デフォルト4321を 3000 に合わせるため明示ポート指定
    command: 'npm run dev -- --port 3000',
    port: 3000,
    reuseExistingServer: true,
    stdout: 'ignore',
    stderr: 'ignore',
  },
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'off',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
