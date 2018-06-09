import _ from "lodash";

function getColumns(){
    let TABLE_COLUMNS = [
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
            tooltip:'Дата последнего технического обслуживания',
            type:'date'
        },{
            key: 'PlanMaintenanceDate',
            label: 'Плановое ТО',
            tooltip:'Дата очередного технического обслуживания',
            type:'date'
        },{
            key: 'State',
            label: 'Статус'
        },{
            key: 'TransferDate',
            label: 'Переход',
            type:'date'
        },{
            key: 'PlanState',
            label: 'Плановый статус'
        },{
            key: 'PlanTransferDate',
            label: 'Плановый  переход',
            type:'date'
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
    return TABLE_COLUMNS;
}


export default getColumns;