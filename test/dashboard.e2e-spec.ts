import { test, expect } from '@playwright/test';

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar

  expect(page.getByText('20', { exact: true})).toBeVisible()

});