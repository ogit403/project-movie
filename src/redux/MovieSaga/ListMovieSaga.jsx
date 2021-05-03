import { call, put, delay, takeLatest } from '@redux-saga/core/effects';
import {listMovieService} from '../../services/ListMovieService';

function* getAPIListMovie(){
    try{
        yield put({
            type: 'SHOW_LOADING'
        })

        let {data, status} = yield call(listMovieService.getTaskAPIListMovie);

        yield put({
            type: 'listMovieReducer/GET_API',
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

export function* theoDoiGetAPIListMovie(){
    yield takeLatest('GET_API_LISTMOVIE_SAGA', getAPIListMovie)
}