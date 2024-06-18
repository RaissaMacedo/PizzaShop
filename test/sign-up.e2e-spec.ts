import { test, expect } from '@playwright/test';
import { toast } from 'sonner';

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar


  await page.getByLabel('Nome do estabalecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Raissa')
  await page.getByLabel('Seu e-mail').fill('raissamacedo7@gmail.com')
  await page.getByLabel('Seu celular').fill('4598882182')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')

  expect(toast).toBeVisible()
});

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar
  await page.getByLabel('Nome do estabalecimento').fill('Pizza lala')
  await page.getByLabel('Seu nome').fill('lucas')
  await page.getByLabel('Seu e-mail').fill('raissamacedo7@gmail.com')
  await page.getByLabel('Seu celular').fill('4598882182')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  expect(toast).toBeVisible()
});

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar

  await page.getByRole('link', { name: 'Fazer login'}).click()

  expect(page.url()).toContain('/sign-in')
});


