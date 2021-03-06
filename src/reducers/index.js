/**
 * Created by qtj929 on 21/12/2016.
 */

import { combineReducers } from 'redux';
import {initialFormState as rsvpInitialState, default as rsvp} from './rsvpReducer';
import segment from './segmentReducer';
import {combineForms} from 'react-redux-form';


const rootReducer = combineReducers({
    form: combineForms({
        rsvp: rsvpInitialState
    }),
    rsvp: rsvp,
    segment: segment
});

export default rootReducer;
