import {eventsService} from '../../services/EventsService';
import { call, delay, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIEvent() {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data, status} = yield call(eventsService.getTaskAPIEvent);
        
        yield put({
            type: 'eventReducer/GET_API',
            data
        })
    }
    catch(err){
        console.log(err);
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function* theoDoigetAPIEvent(){
    yield takeLatest('GET_EVENTS_API', getAPIEvent)
}