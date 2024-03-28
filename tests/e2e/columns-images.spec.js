import {test} from './tools/lib/test-utils.js';
import {addColumnsBlock, checkColumnsBlock} from './tools/lib/columns.js';
import {publishPostAndVisit} from './tools/lib/post.js';
import {addFeaturedImage} from './tools/lib/editor.js';

test.useAdminLoggedIn();

test('Test Columns block with Images style', async ({page, editor, admin}) => {
  await admin.createNewPost({postType: 'page', title: 'Test Columns block', legacyCanvas: true});
  await addFeaturedImage({editor});

  // Add Columns block.
  await addColumnsBlock(page, editor, 'Images');

  // Publish page.
  await publishPostAndVisit({page, editor});

  // Make sure block shows as expected in the frontend.
  await checkColumnsBlock(page, 'Images');
});
