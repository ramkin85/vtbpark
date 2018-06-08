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


const TABLE_COLUMNS = [
    {
        key: 'VIN',
        label: 'VIN',
        className: 'important-column'
    }, {
        key: 'Brand',
        label: 'Марка'
    }, {
        key: 'Year',
        label: 'Год выпуска'
    },{
        key: 'Mileage',
        label: 'Пробег, км'
    },{
        key: 'LastMaintenanceDate',
        label: 'Последнее ТО',
        tooltip:'Дата последнего технического обслуживания'

    },{
        key: 'PlanMaintenanceDate',
        label: 'Плановое ТО',
        tooltip:'Дата очередного технического обслуживания'
    },{
        key: 'State',
        label: 'Статус'
    },{
        key: 'TransferDate',
        label: 'Переход'
    },{
        key: 'PlanState',
        label: 'Плановый статус'
    },{
        key: 'PlanTransferDate',
        label: 'Плановый  переход'
    },{
        key: 'OfficeName',
        label: 'Офис приписки'
    },{
        key: 'CurrentOfficeName',
        label: 'Текущий офис'
    }
];
_.each(TABLE_COLUMNS,function(col){
    _.defaults(col,{
        sortable:true,
        tooltip:col.label
    });
});


const TABLE_DATA = [
    {
        name: 'Frozen yogurt',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Ice cream sandwich',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Eclair',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Cupcake',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Gingerbread',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Jelly bean',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Lollipop',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Honeycomb',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'Donut',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    }, {
        name: 'KitKat',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    },
];

function generateVIN(){
    let tpl="0 1 2 3 4 5 6 7 8 9 A B C D E F G H J K L M N P R S T U V W X Y Z".split(" ");
    let res=[];
    for (var i=0;i<17;i++){
        res.push(_.sample(tpl));
    }

    return res.join("");
}

_.each(TABLE_DATA,function(data){
    data.VIN=generateVIN();
});

const TABLE_DATA_NEXT = [
    {
        name: 'Marshmallow',
        calories: '159',
        fat: '6.0',
        carbs: '24',
        protein: '4.0',
        sodium: '87',
        calcium: '14%',
        iron: '1%',
    },
];

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

        this.state = {
            data: TABLE_DATA,
            page: 1,
        };
    }

    handleSortOrderChange(key, order) {
        console.log('key:' + key + ' order: ' + order);
    }

    handleFilterValueChange(value) {
        console.log('filter value: ' + value);
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
            data: TABLE_DATA,
            page: 1,
        });
    }

    handleNextPageClick() {
        console.log('handleNextPageClick');
        this.setState({
            data: TABLE_DATA_NEXT,
            page: 2,
        });
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
                                title='Автомобили'
                                titleStyle={{fontSize: 20}}
                            />
                            <DataTables
                                height={'100%'}
                                tableBodyStyle={{overflowX: 'auto'}}
                                tableStyle={{width:'inherit'}}
                                selectable={true}
                                showRowHover={true}
                                columns={TABLE_COLUMNS}
                                data={this.state.data}
                                page={this.state.page}
                                multiSelectable={false}
                                showCheckboxes={false}
                                enableSelectAll={false}
                                onNextPageClick={this.handleNextPageClick}
                                onPreviousPageClick={this.handlePreviousPageClick}
                                onRowSelection={this.handleRowSelection}
                                count={11}
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