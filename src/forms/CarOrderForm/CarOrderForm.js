import React from 'react'
import { Field, reduxForm } from 'redux-form'
import maskUtils from "../../utils/maskUtils"
import {TextField, Select} from 'redux-form-material-ui'
import {Grid, FormControl, InputLabel,Button,MenuItem} from "@material-ui/core/es"

//import asyncValidate from './asyncValidate'


// const validate = values => {
//     const errors = {};
//     const requiredFields = [
//         'clientName',
//         'phoneNumber',
//         'email',
//         'startDate',
//         'endDate',
//         'issuePoint',
//         'returnPoint'
//     ];
//
//     requiredFields.forEach(field => {
//         if (!values[field]) {
//             errors[field] = 'Required'
//         }
//     });
//     if (
//         values.email &&
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address'
//     }
//     return errors
// };


function CarOrderForm (props){
    const { handleSubmit, pristine, reset, submitting } = props;

    const points=[{
        value:"1",
        text:"One"
    },{
        value:"2",
        text:"Two"
    }];


    return (

        <form onSubmit={handleSubmit}>


            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Field name="clientName"
                           required
                           component={TextField}
                           label="ФИО"
                           fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="phoneNumber"
                        autoComplete='tel-national'
                        required
                        component={TextField}
                        label="Номер телефона"
                        fullWidth
                        {...maskUtils.phoneMask}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field name="email"
                           autoComplete='email'
                           component={TextField}
                           label="Email"
                           fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <Field name="startDate"
                           type="date"
                           component={TextField}
                           label="Дата получения"
                           InputLabelProps={{
                               shrink: true,
                           }}
                           fullWidth
                    />
                </Grid>

                <Grid item xs={6}>
                    <Field name="endDate"
                           type="date"
                           component={TextField}
                           label="Дата возврата"
                           InputLabelProps={{
                               shrink: true,
                           }}
                           fullWidth
                    />
                </Grid>


                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Точка выдачи</InputLabel>
                        <Field name="issuePoint" component={Select} placeholder="Выберите точку выдачи">
                            <MenuItem value=""><em/></MenuItem>
                            {points.map(point => (
                                <MenuItem
                                    key={point.value}
                                    value={point.value}
                                >
                                    {point.text}
                                </MenuItem>))}
                        </Field>
                    </FormControl>
                </Grid>

                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Точка возврата</InputLabel>
                        <Field name="returnPoint" component={Select} placeholder="Выберите точку возврата">
                            <MenuItem value=""><em/></MenuItem>
                            {points.map(point => (
                                <MenuItem
                                    key={point.value}
                                    value={point.value}
                                >
                                    {point.text}
                                </MenuItem>))}
                        </Field>
                    </FormControl>
                </Grid>

                <Grid item xs={12} align="right">
                    <Button type="button" disabled={pristine || submitting} onClick={reset}>
                        Очистить
                    </Button>
                    <Button variant="contained" type="submit" color="primary" disabled={pristine || submitting}>
                        Отправить
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}


export default reduxForm({
    form: 'carOrderForm'//, // a unique identifier for this form
    //validate,
    //asyncValidate
})(CarOrderForm)