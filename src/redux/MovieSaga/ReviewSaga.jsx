import {reviewService} from '../../services/ReviewService';
import { call, delay, put, takeLatest } from '@redux-saga/core/effects';

function * getAPIReview() {
    try{
        yield put({
            type: 'SHOW_LOADING'
        })
        const {data, status} = yield call(reviewService.getTaskAPIReview);
        yield put({
            type: 'reviewReducer/GET_API',
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

export function* theoDoiGetAPIReview(){
    yield takeLatest('GET_REVIEW_API', getAPIReview)
}