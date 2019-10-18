import {Component, Fragment} from '@wordpress/element';

import {
  SelectControl,
  ServerSideRender,
  TextControl,
  TextareaControl
} from '@wordpress/components';

const { InspectorControls, RichText } = wp.editor;
const { __ } = wp.i18n;

const counterLayoutOptions = [
  {
    label: __('Progress Bar', 'p4ge'),
    value: 'bar',
  },
  {
    label: __('Progress Dial', 'p4ge'),
    value: 'arc',
  },
  {
    label: __('Progress bar inside EN Form', 'p4ge'),
    value: 'en-forms-bar',
  },
];

export class Counter extends Component {
  constructor(props) {
    super(props);
  }

  renderEdit() {
    const { __ } = wp.i18n;
		const percentComplete = this.props.target > 0 ? Math.round( this.props.completed / this.props.target * 100 ) : 0;
    const compiledText = this.props.text
      .replace(/%completed%/g, this.props.completed)
      .replace(/%remaining%/g, this.props.target - this.props.completed)
      .replace(/%target%/g, this.props.target);
    const arcLength = 31.5;

    return (
      <div>
        <section className={ `block container counter-block counter-style-${ this.props.style }` }>
          <div className="container">
            <header>
              <RichText
                tagName="h2"
                className="page-section-header"
                placeholder={ __('Enter title', 'p4ge') }
                value={ this.props.title }
                onChange={ this.props.onTitleChange }
                keepPlaceholderOnFocus={ true }
                withoutInteractiveFormatting
                characterLimit={60}
              />
            </header>
            <RichText
              tagName="div"
              className="page-section-description"
              placeholder={ __('Enter description', 'p4ge') }
              value={ this.props.description }
              onChange={ this.props.onDescriptionChange }
              keepPlaceholderOnFocus={ true }
              multiline={ true }
              withoutInteractiveFormatting
              characterLimit={400}
            />
          </div>
          <div className="content-counter">
            {
              (this.props.style == 'bar' || this.props.style == 'en-forms-bar')
              ? <div className="progress-container">
                  <div
                    className={ `progress-bar ${ 'en-forms-bar' == this.props.style ? 'enform-progress-bar' : '' }` }
                    style={{ width: percentComplete + '%', paddingRight: '20px' }}>
                  </div>
                </div>
              : null
            }

            {
              (this.props.style == 'arc')
              ? <svg className="progress-arc" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 14">
                <path className="background" d="M 2 12 A 1 1 0 1 1 22 12"/>
                <path className="foreground" d="M 2 12 A 1 1 0 1 1 22 12"
                    stroke-dasharray={ arcLength }
                    stroke-dashoffset={ `${ (1 - percentComplete / 100 ) * arcLength }` } />
                </svg>
              : null
            }

            <p className={ `counter-text ${ 100 <= percentComplete ? 'counter-text-goal_reached' : '' }` }>
              {/* <div className="counter-target">{ this.props.completed }</div> */}
              { compiledText }
            </p>
          </div>
        </section>

        <InspectorControls>
          <SelectControl
            label={ __('What style of counter do you need?', 'p4ge') }
            value={ this.props.style }
            options={ counterLayoutOptions }
            onChange={ this.props.onSelectedLayoutChange }
          />
          <TextControl
            label= { __('Completed', 'p4ge') }
            placeholder= { __('e.g. number of signatures', 'p4ge') }
            type="number"
            value={ this.props.completed }
            onChange={ this.props.onCompletedChange }
          />
          <TextControl
            label= { __('Completed API URL', 'p4ge') }
            placeholder= { __('API URL of completed number. If filled in will overide the \'Completed\' field', 'p4ge') }
            value={ this.props.completed_api }
            onChange={ this.props.onCompletedAPIChange }
          />
          <TextControl
            label= { __('Target', 'p4ge') }
            placeholder= { __('e.g. target no. of signatures', 'p4ge') }
            type="number"
            value={ this.props.target }
            onChange={ this.props.onTargetChange }
          />
          <TextareaControl
            label= { __('Text', 'p4ge') }
            placeholder= { __('e.g. "signatures collected of %target%"', 'p4ge') }
            value={ this.props.text }
            onChange={ this.props.onTextChange }
          />
          <p className='FieldHelp'>These placeholders can be used: <code>%completed%</code>, <code>%target%</code>, <code>%remaining%</code> </p>
        </InspectorControls>
      </div>
    );
  }

  renderView() {
    // TODO: Possibly remove ServerSideRender,
    // as not having it gives pretty much the same result
    return (
      <ServerSideRender
        block={ 'planet4-blocks/counter' }
        attributes={{
          title: this.props.title,
          description: this.props.description,
          style: this.props.style,
          completed: this.props.completed,
          completed_api: this.props.completed_api,
          target: this.props.target,
          text: this.props.text,
        }}>
      </ServerSideRender>
    )
  }

  render() {
    return (
      <div>
        {
          this.props.isSelected
            ? this.renderEdit()
            : this.renderView()
        }
      </div>
    );
  }
};
