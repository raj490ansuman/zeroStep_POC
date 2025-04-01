const { test } = require('@playwright/test');
const { ai } = require('@zerostep/playwright');

test('Google Search Test', async ({ page }) => {
  await page.goto('https://bluecosmos.test-kakeru.com');
  
  // Use AI to perform actions
//   await ai('Type "ZeroStep AI" in the search box', { page, test });
//   await ai('Press enter', { page, test });
  // Manual element identification
  await page.getByRole('textbox', { name: 'ユーザー名' }).fill('bluecosmos_admin');
  await page.getByRole('textbox', { name: 'パスワード' }).fill('testtest1');
  await page.getByRole('button', { name: 'ログイン', exact: true }).click();
  
//   // AI for dynamic interactions
//   await ai('Click the primary submit button', { page, test });
  await page.waitForURL("https://bluecosmos.test-kakeru.com/home");
});

// test('Login Test with ZeroStep AI', async ({ page }) => {
//     await page.goto('https://bluecosmos.test-kakeru.com');
  
//     // Wait for the page to fully load
//     await page.waitForLoadState('networkidle');

//     await page.waitForSelector('input[type="text"]'); // Wait for username field
//     await page.waitForSelector('button:has-text("ログイン")'); // Wait for login button
    
//     // Use AI to fill in the username field
//     await ai('Type "bluecosmos_admin" in the username field', { page, test });
  
//     // Use AI to fill in the password field
//     await ai('Type "testtest1" in the password field', { page, test });
  
//     // Use AI to click the login button
//     await ai('Click on the login button', { page, test });
  
//     // Verify successful navigation after login
//     await page.waitForURL("https://bluecosmos.test-kakeru.com/home");
//   });
