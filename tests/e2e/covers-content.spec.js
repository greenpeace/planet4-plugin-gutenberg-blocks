import {test} from './tools/lib/test-utils.js';
import {addCoversBlock, checkCoversBlock} from './tools/lib/covers.js';
import {publishPostAndVisit, createPostWithFeaturedImage} from './tools/lib/post.js';

test.useAdminLoggedIn();

test('Test Covers block with Content covers style', async ({page, admin, editor}) => {
  await createPostWithFeaturedImage({admin, editor}, {title: 'Test Covers block', postType: 'page'});

  // Add Covers block.
  await addCoversBlock(page, editor, 'Content');

  // Publish page.
  await publishPostAndVisit({page, editor});

  // Make sure block shows as expected in the frontend.
  await checkCoversBlock(page, 'Content');
});
