import { test, expect } from "@playwright/test";


test.describe("Home page", () => {
test.beforeEach(async ({page}) => {
  await page.goto("http://localhost:3000/");
})


  test("tests the main page", async ({ page }) => {
    await expect(page).toHaveTitle("Bahu");
    await expect(page.getByRole("link", { name: 'About', exact: true })).toBeVisible();
  });
  
test("Navbar links should work and have right metadata", async ({page}) => {
    await page.getByRole("link", {name: 'About', exact:true }).click(); 
    await expect(page).toHaveTitle("About Us")
    await page.getByRole("link", {name: 'Contact', exact:true }).click();
    await expect(page).toHaveTitle("Contact")
 

})

});

