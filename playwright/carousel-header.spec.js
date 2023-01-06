const { test, expect } = require('@playwright/test');

test('Carousel Header block', async ({ page }) => {
  await page.goto('/');

  // Make sure the block is present.
  const carouselHeader = page.locator('.carousel-header');
  await expect(carouselHeader).toBeVisible();

  // Check the first slide (title, description and button).
  await expect(carouselHeader.locator('h2', { hasText: 'Stand against Amazon destruction' })).toBeVisible();
  await expect(carouselHeader.locator('p', { hasText: 'Tell fast food companies to stand against President Bolsonaro’s destructive agenda in Brazil.' })).toBeVisible();
  await expect(carouselHeader.locator('a.btn', { hasText: 'Add your name' })).toBeVisible();

  // Check the next slide button.
  await carouselHeader.locator('.carousel-control-next').click();
  await expect(carouselHeader.locator('h2', { hasText: 'Our oceans are under threat' })).toBeVisible();

  // Check the first indicator.
  await carouselHeader.locator('.carousel-indicators > li:first-child').click();
  await expect(carouselHeader.locator('h2', { hasText: 'Stand against Amazon destruction' })).toBeVisible();
});
