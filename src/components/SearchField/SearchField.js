import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {Select} from 'redux-form-material-ui';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class SimpleSelect extends React.Component {

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };



    render() {
        const {classes, name, label,  items} = this.props;

        function MenuItemList(props) {
            const items = props.items;
            const listItems = items.map((item) =>
                <MenuItem key={item.value.toString()} value={item.value}>
                    {item.text}
                </MenuItem>
            );
            return (
                listItems
            );
        }
        return (




            <FormControl className={classes.formControl}>
                <InputLabel>{label}</InputLabel>
                <Select name={name} placeholder="Select a plan">
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly</MenuItem>
                    <MenuItem value="lifetime">Lifetime</MenuItem>
                </Select>

                {/*<Select*/}
                    {/*value={value}*/}
                    {/*onChange={this.handleChange}*/}
                    {/*input={<Input name={name}/>}*/}
                {/*>*/}
                    {/*<MenuItem value=""><em>None</em></MenuItem>*/}
                    {/*<MenuItemList items={items}/>*/}
                {/*</Select>*/}
                <FormHelperText>The current value is .</FormHelperText>
            </FormControl>


        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);