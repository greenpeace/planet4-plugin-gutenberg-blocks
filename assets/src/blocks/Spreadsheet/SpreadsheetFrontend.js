import { Component, Fragment } from '@wordpress/element';
import { ArrowIcon } from './ArrowIcon';

const {apiFetch} = wp;
const {addQueryArgs} = wp.url;
const {__} = wp.i18n;

const placeholderData = {
  header: [ 'Lorem', 'Ipsum', 'Dolor' ],
  rows: [
    [ 'Lorem', 'Ipsum', 'Dolor' ],
    [ 'Sit', 'Amet', 'Lorem' ],
    [ 'Amet', 'Ipsum', 'Sit' ],
  ]
};

export class SpreadsheetFrontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: null,
      sheet_data: null,
      invalidSheetId: false,
      searchText: '',
      sortDirection: 'asc',
      sortColumnIndex: 0,
      noURL: !!props.url,
    };

    this.onHeaderClick = this.onHeaderClick.bind(this);
    // this.getRows = this.getRows.bind(this);
  }

  onHeaderClick( index ) {
    if ( index == this.state.sortColumnIndex ) {
      const newDirection = this.state.sortDirection == 'asc' ? 'desc' : 'asc';
      this.setState({
        sortDirection: newDirection
      });
    } else {
      this.setState({
        sortColumnIndex: index,
        sortDirection: 'asc',
      });
    }
  }

  fetchSheetData() {
    const sheetID = this.extractSheetID( this.props.url );

    if (sheetID) {
      const queryArgs = {
        path: addQueryArgs('/planet4/v1/get-spreadsheet-data', {
          sheet_id: sheetID,
        })
      };

      apiFetch( queryArgs )
        .then( sheet_data => {
          this.setState( {
            loading: false,
            noURL: false,
            sheet_data
          } );
      } );
    }
  }

  componentDidMount() {
    if ( this.props.url !== '' ) {
      this.setState({ loading: true });
      this.fetchSheetData();
    } else {
      this.setState({ noURL: true });
    }
  }

  extractSheetID( url ) {
    const googleSheetsPattern = /docs\.google\.com\/spreadsheets\/d\/e\/([\w-]+)/;
    const matches = url.match(googleSheetsPattern);
    if (matches !== null) {
      return matches[1];
    } else {
      this.setState( { invalidSheetId: true } );
    }
  }

  sortRows( rows, columnIndex ) {
    const sortedRows = rows.sort( ( rowA, rowB ) => {
      const textCompare = rowA[columnIndex].localeCompare( rowB[columnIndex] );
      if ( textCompare !== 0 ) {
        return textCompare;
      }
    } );
    if (this.state.sortDirection == 'desc') {
      return sortedRows.reverse();
    } else {
      return sortedRows;
    }
  };

  filterMatchingRows( rows ) {
    const filteredRows = rows.filter( row => {
      return !!row.find( cell => cell.toLowerCase().includes( this.state.searchText.toLowerCase() ) );
    })
    return filteredRows;
  }

  boldText( text ) {
    return <b>{ text }</b>;
  }

  highlightMatches( cellValue, searchText ) {
    let reg = new RegExp('(' + searchText + ')', 'gi')
    let parts = cellValue.split(reg)

    // Skips the first empty value and the intermediate parts
    for (let i = 1; i < parts.length; i += 2) {
      parts[i] = (
        <b key={ i }>
          { parts[i] }
        </b>
      )
    }

    return <Fragment>{ parts }</Fragment>
  }

  getRows() {
    if ( this.state.noURL === true ) {
      return placeholderData.rows;
    } else if ( this.state.loading === true || this.state.loading === null ) {
      return [];
    } else {
      return this.state.sheet_data.rows;
    }
  }

  renderRows() {
    const rows = this.sortRows( this.filterMatchingRows( this.getRows() ), this.state.sortColumnIndex );

    return this.state.searchText.length > 1 && rows.length === 0
      ? <tr>
          <td colSpan="99999">
            <div className='spreadsheet-empty-message'>
              { __('No data matching your search.', 'planet4-blocks') }
            </div>
          </td>
        </tr>
      : rows.map((row, rowNumber) => (
          <tr key={ rowNumber } data-order={ rowNumber }>
            {
              row.map((cell, cellIndex) => (
                <td key={ cellIndex }>
                  {
                    this.state.searchText.length > 0
                    ? this.highlightMatches( cell, this.state.searchText )
                    : cell
                  }
                </td>
              ))
            }
          </tr>
        ));
  }

  render() {
    const cssVariablesText = this.props.css_variables
      ? Object.entries(this.props.css_variables)
          .map( cssVariable => `--${cssVariable[0]}: ${cssVariable[1]}` )
          .join(';') // React does not like an ending semicolon
      : '';

    const headers = this.state.sheet_data
      ? this.state.sheet_data.header
      : placeholderData.header;

    return (
      <Fragment>
        <div className="block-spreadsheet" style={{ cssText: cssVariablesText }}>
          <div className="form-inline">
            <input className="spreadsheet-search form-control"
              type="text"
              value={ this.state.searchText }
              onChange={ event => this.setState({ searchText: event.target.value }) }
              placeholder={ __('Search data', 'planet4-blocks') } />
          </div>
          <div className="table-wrapper">
            <table className="spreadsheet-table">
              <thead>
                <tr>
                  {
                    headers.map( (cell, index) => (
                      <th
                        className={
                          (
                            index == this.state.sortColumnIndex
                              ? `spreadsheet-sorted-by sort-${this.state.sortDirection}`
                              : ''
                          )
                        }
                        onClick={ () => { this.onHeaderClick( index ) } }
                        key={ index } title={ __('Sort by', 'planet4-blocks') }>
                        { cell }
                        <ArrowIcon />
                      </th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {
                  this.state.loading === true
                  ? <tr>
                      <td colSpan="99999">
                        <div className="spreadsheet-loading">{ __('Loading spreadsheet data...', 'planet4-blocks') }</div>
                      </td>
                    </tr>
                  : this.renderRows()
                }
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    )
  }
}