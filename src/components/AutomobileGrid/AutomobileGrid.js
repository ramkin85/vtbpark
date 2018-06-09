import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardHeader} from 'material-ui/Card';
import {DataTables} from "material-ui-datatables";
import _ from "lodash";
import generateData from "./TableData";
import getColumns from "./TableColumns";

const styles = {
    container: {
        textAlign: 'center',
    },
    component: {
        margin: '60px 20px',
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
let TABLE_DATA=generateData(100);


class AutomobileGrid extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
        this.handleFilterValueChange = this.handleFilterValueChange.bind(this);
        this.handleCellClick = this.handleCellClick.bind(this);
        this.handleCellDoubleClick = this.handleCellDoubleClick.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this);
        this.handleNextPageClick = this.handleNextPageClick.bind(this);
        this.handlePersonAddClick = this.handlePersonAddClick.bind(this);
        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.getPageData = this.getPageData.bind(this);

        this.state = {
            data: TABLE_DATA,
            filteredData:TABLE_DATA,
            page: 1
        };
    }

    handleSortOrderChange(key, order) {
        console.log('key:' + key + ' order: ' + order);
        let component = this;
        component.setState({
            filteredData: _.orderBy(component.state.filteredData, [function(o) { return o[key]; }],[order])
        })
    }

    handleFilterValueChange(filterStr) {
        console.log('filter value: ' + filterStr);
        let component = this;
        this.setState({
            page:1,
            filteredData: _.filter(component.state.data,function(item){
                if (["",undefined].indexOf(filterStr)>-1) return true;
                let rg=new RegExp(filterStr,"gi");
                let res=false;
                _.each(TABLE_COLUMNS,function(col){
                    if ((item[col.key]+'').search(rg)>-1){
                        res=true;
                        return false;
                    }
                });
                return res;
            })
        })
    }

    handleCellClick(rowIndex, columnIndex, row, column) {
        console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
    }

    handleCellDoubleClick(rowIndex, columnIndex, row, column) {
        console.log('rowIndex: ' + rowIndex + ' columnIndex: ' + columnIndex);
    }

    handleRowSelection(selectedRows) {
        console.log('selectedRows: ' + selectedRows);
    }

    handlePreviousPageClick() {
        console.log('handlePreviousPageClick');
        this.setState({
            page: this.state.page-1
        });
    }

    handleNextPageClick() {
        console.log('handleNextPageClick');
        this.setState({
            page: this.state.page+1,
        });
    }
    getPageData(){
        return _.chunk(this.state.filteredData,10 )[this.state.page-1]||[]
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
                                tableStyle={{width:'inherit'}}
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
                    {/*<div style={styles.component}>*/}
                        {/*<h2>DataTables (Filter & Column Sort & Styled Column)</h2>*/}
                        {/*<Card style={{margin: 12}}>*/}
                            {/*<DataTables*/}
                                {/*title={'Nutrition'}*/}
                                {/*height={'auto'}*/}
                                {/*selectable={false}*/}
                                {/*showRowHover={true}*/}
                                {/*columns={TABLE_COLUMNS_SORT_STYLE}*/}
                                {/*data={TABLE_DATA}*/}
                                {/*showCheckboxes={false}*/}
                                {/*showHeaderToolbar={true}*/}
                                {/*onCellClick={this.handleCellClick}*/}
                                {/*onCellDoubleClick={this.handleCellDoubleClick}*/}
                                {/*onFilterValueChange={this.handleFilterValueChange}*/}
                                {/*onSortOrderChange={this.handleSortOrderChange}*/}
                                {/*count={100}*/}
                            {/*/>*/}
                        {/*</Card>*/}
                    {/*</div>*/}


                    {/*<div style={styles.component}>*/}
                        {/*<h2>DataTables (onRowSelection handler & onCellDoubleClick handler)</h2>*/}
                        {/*<Card style={{margin: 12, textAlign: 'left'}}>*/}
                            {/*<CardHeader*/}
                                {/*title='Nutrition'*/}
                                {/*titleStyle={{fontSize: 20}}*/}
                            {/*/>*/}
                            {/*<DataTables*/}
                                {/*height={'auto'}*/}
                                {/*selectable={true}*/}
                                {/*showRowHover={true}*/}
                                {/*columns={TABLE_COLUMNS_TOOLTIP}*/}
                                {/*data={this.state.data}*/}
                                {/*page={this.state.page}*/}
                                {/*multiSelectable={false}*/}
                                {/*onRowSelection={this.handleRowSelection}*/}
                                {/*onCellDoubleClick={this.handleCellDoubleClick}*/}
                                {/*showCheckboxes={false}*/}
                                {/*enableSelectAll={false}*/}
                                {/*count={11}*/}
                            {/*/>*/}
                        {/*</Card>*/}
                    {/*</div>*/}



                </div>
            </MuiThemeProvider>
        );
    }
}

export default AutomobileGrid;