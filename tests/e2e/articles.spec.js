const {test, expect} = require('@playwright/test');
import {newPage, publishPage} from './tools/lib/new-page';

const TEST_TITLE = 'All Articles';
const TEST_DESCRIPTION = 'All articles in date order';
const TEST_BUTTON_TEXT = 'Load';

test('Test Articles block', async ({page, context}) => {
  // Login and create new page.
  await newPage(page, context);

  // Add Articles block.
  await page.locator('.block-editor-block-list__layout').click();
  await page.locator('p.is-selected.wp-block-paragraph').type('/articles');
  await page.keyboard.press('Enter');

  // Check that the default texts for the title and button are applied.
  const editorTitle = page.locator('h2.page-section-header');
  const editorButton = page.locator('.article-load-more > div[aria-label="Enter text"]');
  await expect(editorTitle).toHaveText('Related Articles');
  await expect(editorButton).toHaveText('Load more');

  // Change title, description and button text.
  await editorTitle.fill(TEST_TITLE);
  await page.locator('p.page-section-description').fill(TEST_DESCRIPTION);
  await editorButton.fill(TEST_BUTTON_TEXT);

  // Change amount of articles from 3 to 4.
  await page.getByLabel('Articles count').fill('4');

  // Publish page.
  await publishPage(page);

  // Test that the block is displayed as expected in the frontend.
  await expect(page.locator('.page-section-header')).toHaveText(TEST_TITLE);
  await expect(page.locator('.page-section-description')).toHaveText(TEST_DESCRIPTION);
  await expect(page.locator('.article-load-more')).toHaveText(TEST_BUTTON_TEXT);
  await expect(page.locator('.article-list-item')).toHaveCount(4);
});

