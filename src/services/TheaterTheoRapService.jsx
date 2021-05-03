import { mainService } from "./mainService";
import Axios from 'axios';

export class TheaterTheoRapService extends mainService {
    constructor(){
        super();
    }

    getTaskAPITheaterTheoRap = () => { return this.get('QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03')};
}

export const theaterTheoRapService = new TheaterTheoRapService();