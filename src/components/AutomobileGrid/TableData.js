import _ from "lodash";
import moment from "moment";

function generateVIN(){
    let vinTpl="0 1 2 3 4 5 6 7 8 9 A B C D E F G H J K L M N P R S T U V W X Y Z".split(" ");
    let res=[];
    for (let i=0;i<17;i++){
        res.push(_.sample(vinTpl));
    }

    return res.join("");
}

let modelSample=("Aston Martin,Audi,Bentley,BMW,Brilliance,Cadillac,Changan,Chery,Chevrolet,Chrysler" +
    "Citroen,Datsun,DongFeng,Ford,Honda,Hyundai,Infiniti,Jaguar,Lamborghini,Lexus,Porsche,Suzuki,Volkswagen,Volvo").split(",");
let yearSample="1999 2000 2001 2002 2003 2004 2005 2006 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017 2018".split(" ");
let stateSample="Статус1 Статус2 Статус3".split(" ");
let officeTpl = "Офис1 Офис2".split(" ");

function generateData(count){
    let res=[];
    for (let i=0;i<count;i++){
        res.push({
            VIN: generateVIN(),
            Brand: _.sample(modelSample),
            Year: parseInt(_.sample(yearSample)),
            Mileage: _.random(100,100000),
            LastMaintenanceDate: moment().format(),
            PlanMaintenanceDate: moment().format(),
            State:_.sample(stateSample),
            TransferDate:moment().format(),
            PlanState: _.sample(stateSample),
            PlanTransferDate:moment().format(),
            OfficeName: _.sample(officeTpl),
            CurrentOfficeName:_.sample(officeTpl)
        })
    }
    return res;
}

export default generateData;