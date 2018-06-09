import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {DataTables} from "material-ui-datatables";
import _ from "lodash";
import generateData from "./TableData";
import getColumns from "./TableColumns";
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import * as link from "../../constants/links";
import * as appActions from '../../actions';

const styles = {
    container: {
        textAlign: 'center',
    },
    component: {
        margin: '30px 20px',
    },
    titleStyle: {
        fontSize: 16,
        color: deepOrange500,
    },
    footerToolbarStyle: {
        padding: '0 100px',
    },
    tableStyle: {
        tableLayout: 'auto',
    },
    tableBodyStyle: {
        overflowX: 'auto',
    },
    tableWrapperStyle: {
        padding: 5,
    },
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


const TABLE_COLUMNS = getColumns();
let TABLE_DATA = generateData(100);


class AutomobileGrid extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
        this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handlePersonAddClick = this.handlePersonAddClick.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.getPageData = this.getPageData.bind(this);

        this.state = {
            data: TABLE_DATA,
            filteredData: TABLE_DATA,
            page: 1
        };
    }

    componentDidMount() {
        console.log("&&&&&&&&&&&&&", this.props);
        const {actions} = this.props,
            {requestAutomobilesList} = actions;

        requestAutomobilesList({"page": this.state.page, "rowsCount": "10", "filter": "", "orderBy": "VIN Desc"});
    }

    static getDerivedStateFromProps(props, state) {

    }

    handleSortOrderChange(key, order) {
        console.log('key:' + key + ' order: ' + order);
        let component = this;
        component.setState({
            filteredData: _.orderBy(component.state.filteredData, [function (o) {
                return o[key];
            }], [order])
        })
    }

    handleFilterValueChange(filterStr) {
        console.log('filter value: ' + filterStr);
        let component = this;
        this.setState({
            page: 1,
            filteredData: _.filter(component.state.data, function (item) {
                if (["", undefined].indexOf(filterStr) > -1) return true;
                let rg = new RegExp(filterStr, "gi");
                let res = false;
                _.each(TABLE_COLUMNS, function (col) {
                    if ((item[col.key] + '').search(rg) > -1) {
                        res = true;
                        return false;
                    }
                });
                return res;
            })
        })
    }

    handleRowSelection(selectedRows) {
        this.props.changePage(link.AUTOMOBILE_LINK.replace(/\:VIN/, this.getPageData()[selectedRows].VIN));
        console.log('selectedRows: ' + selectedRows);
    }

    handlePreviousPageClick() {
        console.log('handlePreviousPageClick');
        this.setState({
            page: this.state.page - 1
        });
    }

    handleNextPageClick() {
        console.log('handleNextPageClick');
        this.setState({
            page: this.state.page + 1,
        });
    }

    getPageData() {
        return _.chunk(this.state.filteredData, 10)[this.state.page - 1] || []
    }


    handlePersonAddClick() {
        console.log('handlePersonAddClick');
    }

    handleInfoClick() {
        console.log('handleInfoClick');
    }


    render() {

        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>

                    <div style={styles.component}>
                        <Card style={{margin: 12, textAlign: 'left'}}>
                            <CardHeader
                                title='Список автомобилей'
                                titleStyle={{fontSize: 20}}
                            />
                            <DataTables
                                height={'100%'}
                                tableBodyStyle={{overflowX: 'auto'}}
                                tableStyle={{width: 'inherit'}}
                                selectable={true}
                                showRowHover={true}
                                columns={TABLE_COLUMNS}
                                data={this.getPageData()}
                                page={this.state.page}
                                multiSelectable={false}
                                showCheckboxes={false}
                                enableSelectAll={false}
                                showHeaderToolbar={true}
                                onNextPageClick={this.handleNextPageClick}
                                onPreviousPageClick={this.handlePreviousPageClick}
                                onRowSelection={this.handleRowSelection}
                                onSortOrderChange={this.handleSortOrderChange}
                                onFilterValueChange={this.handleFilterValueChange}
                                count={this.state.filteredData && this.state.filteredData.length}
                            />
                        </Card>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

/*const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (page) => push(page),

}, dispatch);*/

function mapDispatchToProps(dispatch) {
    return {
        "actions": bindActionCreators(appActions.actions, dispatch),
        "changePage": (page) => push(page)
    };
}


export default connect(
    null,
    mapDispatchToProps
)(AutomobileGrid)

