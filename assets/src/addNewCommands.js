const {dispatch} = wp.data;
const {__} = wp.i18n;

const isNewIAEnabled = window.p4ge_vars.planet4_options.new_ia ?? false;

const plusIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
    <path d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"></path>
  </svg>
);

// Add our custom commands to WordPress command palette introduced in version 6.3.
export const addNewCommands = () => {
  if (!isNewIAEnabled) {
    return;
  }
  // Add new Action.
  dispatch(wp.commands.store).registerCommand({
    name: 'planet4-blocks/add-new-action',
    label: __('Add new Action', 'planet4-blocks-backend'),
    icon: plusIcon,
    callback: ({close}) => {
      document.location.href = 'post-new.php?post_type=p4_action';
      close();
    },
  });
};
