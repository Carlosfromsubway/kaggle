import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlInfo = "http://localhost:3000/Info";

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('Yu-gi-oh Api');
    })


    test('Seeing if a link is in the main area', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('div > a')).toHaveCount(1);
    })
})
