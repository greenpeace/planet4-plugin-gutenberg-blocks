async function publishPost({page, editor}) {
  await editor.publishPost();

  const urlString = await page
    .getByRole('region', {name: 'Editor publish'})
    .getByRole('textbox', {name: 'address'})
    .inputValue();

  return urlString;
}

async function publishPostAndVisit({page, editor}) {
  const urlString = await publishPost({page, editor});

  await page.goto(urlString);
}

async function updatePost({page}) {
  const updateButton = await page.locator('.editor-header__settings').getByRole('button', {name: 'Save'});
  await updateButton.click();

  return page.waitForSelector('.components-snackbar');
}

async function createPostWithFeaturedImage({admin, editor}, params) {
  await admin.createNewPost({...params, legacyCanvas: true});
  const editorSettings = await editor.canvas.getByRole('region', {name: 'Editor settings'});
  await editorSettings.getByRole('button', {name: 'Set featured image'}).click();
  const imageModal = await editor.canvas.getByRole('dialog', {name: 'Featured image'});
  const mediaLibTab = await imageModal.getByRole('tab', {name: 'Media Library'});
  await mediaLibTab.click();
  await imageModal.getByRole('tabpanel', {name: 'Media Library'});
  await imageModal.getByRole('checkbox', {name: 'OCEANS-GP0STOM6C'}).click();
  await imageModal.getByRole('button', {name: 'Set featured image'}).click();
}

export {publishPost, publishPostAndVisit, updatePost, createPostWithFeaturedImage};
