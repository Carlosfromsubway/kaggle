import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlInfo = "http://localhost:3000/Info";

test.describe('Main area', () => {
    test('Header Tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('h1')).toContainText('An investment in knowledge pays the best interest.');
    })

    test('Paragraph Tag', async({ page }) => { 
        await page.goto(urlHome)

        const paragraphText = page.getByRole('paragraph');
        await expect(paragraphText).toContainText('Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.')
    })

    test('More About Us Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'More About Us' }).click();
    })

    test('Contact Us Button', async({ page }) => { 
        await page.goto(urlHome)

        await page.getByRole('button', { name: 'Contact Us' }).click();
    })

    test('Checking to see if an Image is in the main area', async({ page }) => { 
        await page.goto(urlHome)
        await expect(page.locator('div > Image')).toHaveCount(1);
    })
})
