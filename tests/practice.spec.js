import { test,expect } from "@playwright/test";
import autodata from "../testdata/autodata.json"
import { Loginpage } from "../pom/login.page";
import { Cartpage } from "../pom/cart.page";
test('login page',async({page})=>{
    await page.goto(autodata.url)
    let Lpage = new Loginpage(page)
    await Lpage.login(autodata.username,autodata.password)
    let Cpage = new Cartpage(page)
    await page.waitForTimeout(2000)
    await Cpage.cart()
    await page.waitForTimeout(2000)
    
})