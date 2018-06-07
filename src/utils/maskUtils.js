import { createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({
    pattern: '+7 (999) 999-9999',
});


export default {
    phoneMask
}