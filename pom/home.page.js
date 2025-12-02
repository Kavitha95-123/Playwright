import { test,expect } from "@playwright/test";
export class Homepage{
    /**
     * @param{import('playwright').Page}page
     */
constructor(page){
    this.page = page
    this.search = page.getByPlaceholder("Search Amazon.in")
}
async home(product){
    await expect(this.search).toBeEditable()
    await this.search.fill(product)
    await expect(this.search).toContainText('applewatch')
    await this.page.keyboard.press('Enter')
}
}