
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
        expect((checkingBackgroundColour)).toBe("rgb(109, 74, 247)");
    })
    test("testing flex on iphone XR", async ({page}) => {
        await page.goto('http://localhost:3000/info')
        const mainCont = page.locator('.burger-menu');

        const checkingFlex = await mainCont.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("display")
        })

        console.log(checkingFlex);
        expect((checkingFlex)).toBe("flex");
    })

    test("testing position on left side div on iphone XR", async ({page}) => {
        await page.goto('http://localhost:3000/info')
        const mainNav = page.locator('nav');

        const checkingNav = await mainNav.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("padding")
        })

        console.log(checkingNav);
        expect((checkingNav)).toBe("15px");
    })

    test("testing margin on mobile", async ({page}) => {
        await page.goto('http://localhost:3000')
        const mainTitle = page.locator('.burger-menu');

        const checkingTitle = await mainTitle.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("cursor")
        })

        console.log(checkingTitle);
        expect((checkingTitle)).toBe("pointer");
    })


})

