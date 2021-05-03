import axios from "axios";
import { mainService } from "./mainService";

class DetailUserService {
    constructor(){}

    getTaskAPIDetailUser = (data) => {
        return axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            method: 'POST',
            data
        })
    }
}

export const detailUserService = new DetailUserService();