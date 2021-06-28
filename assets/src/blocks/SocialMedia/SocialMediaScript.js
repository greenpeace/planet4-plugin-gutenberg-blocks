import { SocialMediaFrontend } from './SocialMediaFrontend';

document.addEventListener('DOMContentLoaded', () => {
  const socialMediaBlocks = [...document.querySelectorAll('[data-render="planet4-blocks/social-media"]')];

  socialMediaBlocks.forEach(blockNode => {
    const attributes = JSON.parse(blockNode.dataset.attributes);
    wp.element.render(<SocialMediaFrontend {...attributes.attributes} />, blockNode);
  });
});
