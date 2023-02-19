
import {test, devices, expect} from '@playwright/test';

test.use ({
    browserName: 'chromium',
    ...devices['ipad Air'],
    viewport: {width:820, height:1180}

})


test.describe("testing for home tablet index page", () => {
    test("testing for colour on tablet", async ({page}) => {
        await page.goto('http://localhost:3000')
        const mainContainer = page.locator('#PageColour');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect((checkingBackgroundColour)).toBe("rgb(247, 236, 74)");
    })
    test("testing height on home tablet index page", async ({page}) => {
        await page.goto('http://localhost:3000')
        const mainContainer = page.locator('#PageColour');

        const checkingheight = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("height")
        })

        console.log(checkingheight);
        expect((checkingheight)).toBe("5483px");
    })

        test("testing hidden", async ({page}) => {
        await page.goto('http://localhost:3000/info')
        const mainHide = page.locator('.hidden');

        const checkingHide = await mainHide.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })

        console.log(checkingHide);
        expect((checkingHide)).toBe("none");
    })
    test('Checking number of returns', async({ page }) => { 
        await page.goto('http://localhost:3000/info')
        await expect(page.locator('img')).toHaveCount(3);
    })
})
    