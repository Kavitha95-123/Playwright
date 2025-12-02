import {test,expect} from "@playwright/test";
export class Addcartpage{
    /**
     * @param{import('playwright').Page}page
     */
    constructor(page)
    {
      this.page = page
      this.cartbtn = page.locator('//input[@value="Add to Cart"]').last()
    }
    async addcart(){
        await expect(this.cartbtn).toBeEnabled()
        await this.cartbtn.click()
    }
}