const {expect} = require('@playwright/test');
import {login} from './login';

async function newPage(page, context) {
  // Login.
  await page.goto('./');
  await login(context);

  // Create and navigate to new page.
  await page.goto('./wp-admin/post-new.php?post_type=page');

  // Need to close modal so test can continue.
  await page.waitForSelector('.components-modal__header');
  await page.locator('.components-modal__header button').click();
  expect(page.locator('.components-modal__header')).toBeHidden();

  // Fill in page title.
  await page.locator('.editor-post-title__input').click();
  await page.locator('h1.editor-post-title').fill('Test Page');
}

export {newPage};
