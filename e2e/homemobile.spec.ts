
import {test, devices, expect} from '@playwright/test';

test.use ({
    browserName: 'chromium',
    ...devices['iphone XR'],
    viewport: {width:414, height:896}

})


test.describe("mobile viewport", () => {
    test("testing for colour on ihpone XR", async ({page}) => {
        await page.goto('http://localhost:3000')
        const mainContainer = page.locator('#PageColour');

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })

        console.log(checkingBackgroundColour);
        expect((checkingBackgroundColour)).toBe("rgb(247, 236, 74)");
    })
})

