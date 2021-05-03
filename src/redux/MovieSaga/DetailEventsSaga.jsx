import {detailEventsService} from '../../services/DetailEventsService';
import { call, delay, put, takeLatest } from '@redux-saga/core/effects';

function* getAPIDetailEvents(action) {
    // console.log(action.params.id);
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data, status} = yield call(() => detailEventsService.getTaskAPIDetailEvents(action.params.id));
        yield put({
            type: 'detailEventReducer/GET_API',
            data
        })
    }
    catch(err){
        console.log(err)
    }
    yield put({
        type: 'HIDDEN_LOADING'
    })
}

export function * theoDoiGetAPIDetailEvents(){
    yield takeLatest('GET_EVENT_API', getAPIDetailEvents);
}