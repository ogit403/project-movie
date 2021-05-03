import { mainService } from "./mainService";

class DetailMovieService extends mainService { 
    constructor(){
        super();
    }

    getTaskAPIDetailMovie = (name) => {return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${name}&maNhom=GP01`)}
}

export const detailMovieService = new DetailMovieService();