import { test, expect } from '@playwright/test'

let urlInfo = "http://localhost:3000/info";


test.describe('Checking div amounts', () => {
    test('P Tag', async({ page }) => {
        await page.goto(urlInfo)

        await expect(page.locator('div')).toHaveCount(15);
    })


    test('img on the info page', async({ page }) => { 
        await page.goto(urlInfo)
        await expect(page.locator('div > img')).toHaveCount(2);
    })
})
