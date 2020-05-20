import { Component, Fragment } from '@wordpress/element';
import { ArrowIcon } from './ArrowIcon';

const {apiFetch} = wp;
const {addQueryArgs} = wp.url;
const {__} = wp.i18n;

export class SpreadsheetFrontend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sheet_data: null,
      invalidSheetId: false,
      searchText: '',
      sortDirection: 'asc',
      sortColumnIndex: 0,
    };

    this.onHeaderClick = this.onHeaderClick.bind(this);
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

  componentDidMount() {
    const sheetID = this.extractSheetID( this.props.url );

    if (sheetID) {
      const queryArgs = {
        path: addQueryArgs('/planet4/v1/get-spreadsheet-data', {
          sheet_id: sheetID,
        })
      };

      apiFetch( queryArgs )
        .then( sheet_data => {
          this.setState( { loading: false, sheet_data } );
      } );
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

  renderRows() {
    const rows = this.filterMatchingRows( this.sortRows( this.state.sheet_data.rows, this.state.sortColumnIndex ) );

    return rows.length < 1
      ? <tr>
          <td colSpan="99999">
            <div>
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
            {
              this.state.loading
              ? <div className="spreadsheet-loading">{ __('Loading spreadsheet data...', 'planet4-blocks') }</div>
              : <table className="spreadsheet-table">
                  <thead>
                    <tr>
                      {
                        this.state.sheet_data.header.map( (cell, index) => (
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
                    { this.renderRows() }
                  </tbody>
                </table>
            }
          </div>
        </div>
      </Fragment>
    )
  }
}