const { test, expect } = require('@playwright/test');
import { login } from './tools/lib/login';
import { rest } from './tools/lib/rest';
import { formFields, formFieldsAttributes } from './data/enformData';

test.describe('ENForm tests', () => {
  test.beforeEach(async ({ page, context }) => {
    // Login before each test.
    await page.goto('./');
    await login(context);
  });

  test('create a new page that contains an EN form with "Form on the side" style (default)', async ({ page, context }) => {
    const newPage = await rest(context, {
      path: './wp-json/wp/v2/pages',
      method: 'POST',
      data: {
        title: 'Page for EN form form on the side',
        content: '<!-- wp:planet4-blocks/enform {"enform_goal":"Petition Signup","title":"The form title","description":"The form description"} /-->',
        status: 'publish',
      }
    });
    await page.goto(`./${newPage.slug}`);
    const enform = page.locator('section.enform-side-style');
    await expect(enform).toBeVisible();
    await expect(enform.locator('.title-and-description h2')).toHaveText('The form title');
    await expect(enform.locator('.title-and-description .form-description')).toHaveText('The form description');
  });

  test('create a new page that contains an EN form with "Full width with background" style', async ({ page, context }) => {
    const newPage = await rest(context, {
      path: './wp-json/wp/v2/pages',
      method: 'POST',
      data: {
        title: 'Page for EN form full width with background',
        content: '<!-- wp:planet4-blocks/enform {"enform_goal":"Petition Signup","en_form_style":"full-width-bg","title":"The form title","description":"The form description"} /-->',
        status: 'publish',
      }
    });
    await page.goto(`./${newPage.slug}`);
    const enform = page.locator('section.enform-full-width-bg');
    await expect(enform).toBeVisible();
    await expect(enform.locator('.title-and-description h2')).toHaveText('The form title');
    await expect(enform.locator('.title-and-description .form-description')).toHaveText('The form description');
  });

  test('create a new page that contains an EN form with "Full width" style', async ({ page, context }) => {
    const newPage = await rest(context, {
      path: './wp-json/wp/v2/pages',
      method: 'POST',
      data: {
        title: 'Page for EN form full width',
        content: '<!-- wp:planet4-blocks/enform {"enform_goal":"Petition Signup","en_form_style":"full-width","title":"The form title","description":"The form description"} /-->',
        status: 'publish',
      }
    });
    await page.goto(`./${newPage.slug}`);
    const enform = page.locator('section.enform-full-width');
    await expect(enform).toBeVisible();
    await expect(enform.locator('.title-and-description h2')).toHaveText('The form title');
    await expect(enform.locator('.title-and-description .form-description')).toHaveText('The form description');
  });
});
