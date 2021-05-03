import { mainService } from "./mainService";
import Axios from 'axios';

export class TheaterService extends mainService {
    constructor(){
        super();
    }

    getTaskAPITheater = () => { return this.get('QuanLyRap/LayThongTinHeThongRap')};
}

export const theaterService = new TheaterService();