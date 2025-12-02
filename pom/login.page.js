import { test,expect} from "@playwright/test";
export class Loginpage{
    /**
     * @param(import{'playwright'}.Page)page
     */
    constructor(page){
        this.page = page 
        this.uname = page.getByPlaceholder("Username")
        this.pwd = page.getByPlaceholder("Password")
        this.btn = page.locator("#login-button")
    }
   async login(username,password){
    await this.uname.fill(username)
    await this.pwd.fill(password)
    await this.btn.click()

   }

}