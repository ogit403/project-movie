import { mainService } from "./mainService";

class ListMovieService extends mainService {
    constructor(){
        super();
    }

    getTaskAPIListMovie = () => {return this.get('QuanLyPhim/LayDanhSachPhim?maNhom=GP15')}
}

export const listMovieService = new ListMovieService();