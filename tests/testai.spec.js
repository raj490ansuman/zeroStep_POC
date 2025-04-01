const { test } = require('@playwright/test');
const { ai } = require('@zerostep/playwright');

//using blueCosmos Test Site for this test
const userId= "bluecosmos_admin"
const password= "testtest1"

test('Login Manually with ZeroStep AI', async ({ page }) => {
  await page.goto('https://bluecosmos.test-kakeru.com');
  
  await page.waitForLoadState('networkidle');

  await page.waitForSelector('input[type="text"]');
  await page.waitForSelector('button:has-text("ログイン")');

  // Manual element identification
  await page.getByRole('textbox', { name: 'ユーザー名' }).fill(userId);
  await page.getByRole('textbox', { name: 'パスワード' }).fill(password);
  await page.getByRole('button', { name: 'ログイン', exact: true }).click();
  
  await page.waitForURL("https://bluecosmos.test-kakeru.com/home");
});

test('Login Test with ZeroStep AI', async ({ page }) => {
    await page.goto('https://bluecosmos.test-kakeru.com');
  
    await page.waitForLoadState('networkidle');

    await page.waitForSelector('input[type="text"]');
    await page.waitForSelector('button:has-text("ログイン")'); 
    
  // AI element identification
    await ai(`Type ${userId} in the username field`, { page, test });
  
    await ai(`Type ${password} in the password field`, { page, test });
  
    await ai('Click on the login button', { page, test });
  
    await page.waitForURL("https://bluecosmos.test-kakeru.com/home");
  });
