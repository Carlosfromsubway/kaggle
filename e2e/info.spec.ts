import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000/info";


test.describe('Checking for P tag', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('p')).toContainText('Stars represent a Monsters level');
    })


    test('Seeing if a link is in the main area', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('div > a')).toHaveCount(1);
    })
})
