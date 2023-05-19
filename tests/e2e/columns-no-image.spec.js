const {test, expect} = require('@playwright/test');
import {newPage} from './tools/lib/new-page';

const TEST_LINKS = ['/act', '/explore', '/'];

test('Test Columns block with No Image style', async ({page, context}) => {
  // Login and create new page.
  await newPage(page, context);

  // Add Columns block, no need to select a style since "No Image" is the default.
  await page.locator('.block-editor-block-list__layout').click();
  await page.locator('p.is-selected.wp-block-paragraph').fill('/planet-4-columns');
  await page.keyboard.press('Enter');

  // Fill in the Columns links.
  await page.locator('input[placeholder="Enter link for column 1"]').fill(TEST_LINKS[0]);
  await page.locator('input[placeholder="Enter link for column 2"]').fill(TEST_LINKS[1]);
  await page.locator('input[placeholder="Enter link for column 3"]').fill(TEST_LINKS[2]);

  // Fill in the other fields.
  const backendColumns = await page.locator('.column-wrap').all();
  for (const [index, column] of backendColumns.entries()) {
    await column.locator('h3').fill(`Column ${index + 1}`);
    await column.locator('p').fill(`Description ${index + 1}`);
    await column.locator('div[aria-label="Enter column button text"]').fill(`Button ${index + 1}`);
  }

  // Publish page.
  await page.getByRole('button', { name: 'Publish', exact: true }).click();
  await page.getByRole('region', { name: 'Editor publish' }).getByRole('button', { name: 'Publish', exact: true }).click();
  await page.getByRole('link', { name: 'View Page', exact: true }).first().click();

  // Make sure block shows as expected in the frontend.
  const frontendColums = await page.locator('.column-wrap').all();
  for (const [index, column] of frontendColums.entries()) {
    expect(await column.innerHTML('h3')).toBe(`Column ${index + 1}`);
    expect(await column.innerHTML('p')).fill(`Description ${index + 1}`);
    const button = column.locator('a.btn-secondary');
    expect(button).toHaveText(`Button ${index + 1}`);
    expect(button.getAttribute('href')).toBe(TEST_LINKS[index]);
  }
});
