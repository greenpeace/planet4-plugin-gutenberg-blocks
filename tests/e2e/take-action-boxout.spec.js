const {test, expect} = require('@playwright/test');
import {login} from './tools/lib/login';

test.describe('Test Take Action Boxout block', () => {
  test.beforeEach(async ({page, context}) => {
    // Login.
    await page.goto('./');
    await login(page, context);

    // Create and navigate to new post.
    await page.goto('./wp-admin/post-new.php');

    // On dev instance, need to close modal so test can continue
    const closeButton = page.locator('.components-modal__header button');
    if (await closeButton.isVisible()) {
      await closeButton.click();
    }

    // Fill in post title.
    await page.locator('.editor-post-title__input').click();
    await page.locator('h1.editor-post-title').fill('Test Post');

    // Add Take Action Boxout block.
    await page.locator('.block-editor-block-list__layout').click();
    await page.locator('p.is-selected.wp-block-paragraph').fill('/take-action-boxout');
    await page.keyboard.press('Enter');
  });

  test('Take Action Boxout with existing page', async ({page}) => {
    // Select the first page option.
    await page.waitForSelector('.block-editor-block-inspector');
    await page.selectOption('.components-select-control__input', { index: 1 });

    // Save boxout data to make sure it shows in the frontend.
    const boxoutTitle = await page.innerHTML('.boxout-heading');
    const boxoutExcerpt = await page.innerHTML('.boxout-excerpt');

    // Publish post.
    await page.getByRole('button', {name: 'Publish', exact: true}).click();
    await page.getByRole('region', {name: 'Editor publish'}).getByRole('button', {name: 'Publish', exact: true}).click();
    await page.getByRole('link', {name: 'View Post', exact: true}).first().click();

    // Make sure block shows as expected in the frontend.
    expect((await page.innerHTML('.boxout-heading')).trim()).toBe(boxoutTitle);
    expect(await page.innerHTML('.boxout-excerpt')).toBe(boxoutExcerpt);
  });

  test('Take Action Boxout with custom fields', async ({page}) => {
    // Fill in boxout fields.
    await page.locator('.boxout-heading').click();
    await page.locator('.boxout-heading').fill('The boxout title');
    await page.locator('.boxout-excerpt').click();
    await page.locator('.boxout-excerpt').fill('The boxout excerpt');

    // Publish post.
    await page.getByRole('button', {name: 'Publish', exact: true}).click();
    await page.getByRole('region', {name: 'Editor publish'}).getByRole('button', {name: 'Publish', exact: true}).click();
    await page.getByRole('link', {name: 'View Post', exact: true}).first().click();

    // Make sure block shows as expected in the frontend.
    const boxoutTitle = (await page.innerHTML('.boxout-heading')).trim();
    const boxoutExcerpt = await page.innerHTML('.boxout-excerpt');
    expect(boxoutTitle).toBe('The boxout title');
    expect(boxoutExcerpt).toBe('The boxout excerpt');
  });
});

