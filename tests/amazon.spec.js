import { test,expect } from "@playwright/test";
import {Homepage} from "../pom/home.page";
import data from "../testdata/data.json"
import { Addcartpage } from "../pom/addtocart.page";
test.repeat(5)('amazon',async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(data.url)
    let Hpage = new Homepage(page)
    await expect(page).toHaveURL('https://www.amazon.in/')
    //await page.waitForTimeout(3000)
    await Hpage.home(data.product)
    //await page.waitForTimeout(2000)

    const[newPage]=await Promise.all([
         let Apage = new Addcartpage(newPage)
        context.waitForEvent('page'),
        await 


    ])






    
})