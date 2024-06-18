import { test, expect } from '@playwright/test';
import { toast } from 'sonner';

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' }); // o que quer esperar depois de carregar

  await page.getByRole('button', { name: 'Raissa Pizza'}).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja'}).click()

  await page.getByLabel('Nome').fill('Raissa Pizza')
  await page.getByLabel('Descrição').fill('Another Description')

  await page.getByRole('button', { name: 'Salvar'}).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close'}).click()
  
  expect(page.getByRole('button', { name: 'raissa'})).toBeVisible()



});

