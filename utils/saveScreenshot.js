import { test } from '@playwright/test';
import path from 'path';

/**
 * @param {import('@playwright/test').Page} page
 * @param {string} fileName
 */
const saveScreenshot = async (page, fileName) => {
  const trimmedFileName = fileName.split(' ').join('_');
  const screenshotFilePath = `${path.dirname(
    __filename,
  )}/../screenshots/${trimmedFileName}.png`;
  await test.step(`Saving screenshot to 'screenshots/${trimmedFileName}.png'`, async () => {
    const screenshot = await page.screenshot({
      path: screenshotFilePath,
      fullPage: true,
    });
    await test.info().attach(`screenshots/${trimmedFileName}.png`, {
      body: screenshot,
      contentType: 'image/png',
    });
  });
};
export { saveScreenshot };
