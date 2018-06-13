import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardHeader} from 'material-ui/Card';
import {DataTables} from "material-ui-datatables";
import _ from "lodash";
import getColumns from "./TableColumns";
import {bindActionCreators} from "redux";
import {push} from "react-router-redux";
import {connect} from "react-redux";
import * as link from "../../constants/links";
import * as appActions from '../../actions';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
    container: {
        textAlign: 'center',
        position:'relative'
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
        minHeight: 200
    },
    tableWrapperStyle: {
        padding: 5,
    },
    progress:{
        position:'absolute',
        top:'50%'
    }
};

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500,
    },
});


const TABLE_COLUMNS = getColumns();


class AutomobileGrid extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
        this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.getPageData = this.getPageData.bind(this);

        this.state = {
            orderBy: "VIN,Desc",
            filteredData: [],
            page: 1
        };
    }

    getList() {
        const {page = 1, orderBy = "VIN,Desc", filterStr = ""} = this.state,
            {actions} = this.props;
        actions.requestAutomobilesList({page, "rowsCount": "10", "filterStr": filterStr, "orderBy": orderBy});
    }

    componentDidMount() {
        this.getList();
    }

    static getDerivedStateFromProps(props, state) {

        return {
            "filteredData": props.automobiles.list
        }
    }

    handleSortOrderChange(key, order) { debugger;
        console.log('key:' + key + ' order: ' + order);
        this.setState({"orderBy": `${key},${order}`}, () => this.getList())
    }

    handleFilterValueChange(filterStr) {
        console.log('filter value: ' + filterStr);
        let component = this;
        this.setState({
            page: 1,
            filterStr
        }, () => this.getList());
    }

    handleRowSelection(selectedRows) {
        //console.log("this.getPageData()", this.props);
        const {automobiles} = this.props;
        this.props.actions.changePage(link.AUTOMOBILE_LINK.replace(/\:VIN/, automobiles.list.data[selectedRows].VIN));
        console.log('selectedRows: ' + selectedRows);
    }

    handlePreviousPageClick() {
        console.log('handlePreviousPageClick');
        this.setState({
            page: this.state.page - 1
        }, () => this.getList());
    }

    handleNextPageClick() {
        console.log('handleNextPageClick');
        this.setState({
            page: this.state.page + 1,
        }, () => this.getList());
    }

    getPageData() {
        return this.state.filteredData;
        //return _.chunk(this.state.filteredData, 10)[this.state.page - 1] || []
    }





    render() {

        const {automobiles} = this.props;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.container}>
                    {automobiles.progress && <CircularProgress style={styles.progress}/>}

                    <div style={styles.component}>
                        <Card style={{margin: 12, textAlign: 'left'}}>
                            <CardHeader
                                title='Список автомобилей'
                                titleStyle={{fontSize: 20}}
                            />
                            <DataTables
                                height={'100%'}
                                tableBodyStyle={styles.tableBodyStyle}
                                tableStyle={styles.tableStyle}
                                selectable={true}
                                showRowHover={true}
                                columns={TABLE_COLUMNS}
                                data={automobiles.list.data||[]}
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
                                count={automobiles.list.totalCount}
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
        "actions": bindActionCreators({
                ...appActions.actions,
                changePage: (page) => push(page)
            }
            , dispatch),
    };
}

function mapStateToProps(state) {
    return {
        "automobiles": state.automobiles,
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AutomobileGrid)