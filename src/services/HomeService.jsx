import { mainService } from "./mainService";
import Axios from 'axios';

export class HomeService extends mainService {
    constructor(){
        super();
    }

    getTaskAPI = () => { return this.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP07')};
}

export const homeService = new HomeService();