import { test,expect } from "@playwright/test";
export class Cartpage{
    /**
     * @param(import{'playwright'}.Page)page
     */
    constructor(page){
        this.page = page
        this.cbtn = page.locator("#add-to-cart-sauce-labs-backpack")
    }
    async cart(){
        await this.cbtn.click()
    }
}