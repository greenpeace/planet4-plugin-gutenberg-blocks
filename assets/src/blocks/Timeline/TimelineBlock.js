import {Timeline} from './Timeline.js';

const {__} = wp.i18n;

export class TimelineBlock {
  constructor() {
    const {registerBlockType} = wp.blocks;

    registerBlockType(timelineConfig.gutenbergTag, {
      title: __('Timeline', 'p4ge'),
      icon: 'clock',
      category: 'planet4-blocks',

      // Transform the shortcode into a Gutenberg block
      // this is used when a user clicks "Convert to blocks"
      // on the "Classic Editor" block
      transforms: {
        from: [
          {
            type: 'shortcode',
            // Shortcode tag can also be an array of shortcode aliases
            tag: timelineConfig.shortCodeTag,
            attributes: timelineConfig.shortCodeAttributes
          },
        ]
      },
      attributes: timelineConfig.gutenbergAttributes,
      edit: ({ isSelected, attributes, setAttributes }) => {
        function onTimelineTitleChange(value) {
          setAttributes({timeline_title: value});
        }

        function onDescriptionChange(value) {
          setAttributes({description: value});
        }

        function onGoogleSheetsUrlChange(value) {
          setAttributes({google_sheets_url: value});
        }

        function onLanguageChange(value) {
          setAttributes({language: value});
        }

        function onTimenavPositionChange(value) {
          setAttributes({timenav_position: value});
        }

        function onStartAtEndChange(value) {
          setAttributes({start_at_end: value});
        }

        return <Timeline
          {...attributes}
          isSelected={isSelected}
          onTimelineTitleChange={onTimelineTitleChange}
          onDescriptionChange={onDescriptionChange}
          onGoogleSheetsUrlChange={onGoogleSheetsUrlChange}
          onLanguageChange={onLanguageChange}
          onTimenavPositionChange={onTimenavPositionChange}
          onStartAtEndChange={onStartAtEndChange}
        />
      },
      save() {
        return null;
      }
    });
  };
}
