import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
})

test.describe('CV', () => {
    test('has title', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Roy Voorbach' })).toBeVisible();
    })
    
    test('details can be opened', async ( {page }) => {
        await page.goto('http://localhost:5173')
    
        await page.getByRole('row', { name: 'Werkervaring Details' }).getByRole('button', { name: 'Details '}).click();
        await expect(page.getByText('NCCW & Bright Answers')).toBeVisible()
    })
})


