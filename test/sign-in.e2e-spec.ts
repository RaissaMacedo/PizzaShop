import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar


  await page.getByLabel('Seu e-mail').fill('raissamacedo7@gmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Enviamos um link de autenticação para seu e-mail.')

  expect(toast).toBeVisible()
});

test('sign in with credentials', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar

  await page.getByLabel('Seu e-mail').fill('rai@gmail.com')
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas.')

  expect(toast).toBeVisible()
});

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar

  await page.getByRole('link', { name: 'Novo estabelecimento'}).click()

  expect(page.url()).toContain('/sign-up')
});


