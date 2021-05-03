import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './../../../assets/scss/sass/Layouts/_book.scss';

export default function Book(props) {

    const [items, setItems] = useState({maPhim: '', rap: '', ngay: '', suat: ''})
    const dispatch = useDispatch();
    const movie = useSelector(state => state.DetailReducer.detail);

    useEffect(() => {
        let params = {id: items.maPhim}
        dispatch({
            type: 'GET_API_DETAIL_SAGA',
            params
        })
    },[items.maPhim])
    
    const handlePhim = (e) => {
        let newItem = {...items, maPhim: e.target.value}
        renderRap();
        setItems(newItem);
    }

    const handleRap = (e) => {
        let newItem = {...items, rap: e.target.value}
        renderNgay(e.target.value)
        setItems(newItem);
    }

    const handleNgay = (e) => {
        let newItem = {...items, ngay: e.target.value}
        renderSuat(e.target.value);
        setItems(newItem);
    }

    const handleSuat = (e) => {
        let newItem = {...items, suat: e.target.value}
        setItems(newItem);
    }

    const renderRap = (id) => {
        if(Object.keys(movie).length){
            return movie.heThongRapChieu.map((items, index) => {
                return (
                    <>
                        {items.cumRapChieu.map((movie, indexMovie) => {
                            return (
                                <option key={indexMovie} value={movie.maCumRap}>{movie.tenCumRap}</option>
                            ) 
                        })}
                    </>
                )
            })
        }
    }

    const renderNgay = (name) => {
        console.log('name', name)
        if(Object.keys(movie).length && name){
            return movie.heThongRapChieu.map((items, index) => {
                return (
                    <>
                        {items.cumRapChieu.map((movie, indexMovie) => {
                            if(movie.maCumRap === name){
                                let arrNgay = [];
                                movie.lichChieuPhim.forEach(temp1 => {
                                    let isLog = false;
                                    arrNgay.forEach(temp2 => {
                                        if(new Date(temp1.ngayChieuGioChieu).toLocaleDateString() === new Date(temp2.ngayChieuGioChieu).toLocaleDateString()) isLog = true;
                                    })
                                    if(!isLog) arrNgay.push(temp1);
                                })
                                console.log(arrNgay);
                                return (
                                    <>
                                        {arrNgay.map((ngay, indexNgay) => {
                                            return (
                                                <option key={indexNgay} value={new Date(ngay.ngayChieuGioChieu).toLocaleDateString()}>{new Date(ngay.ngayChieuGioChieu).toLocaleDateString()}</option>
                                            )
                                        })}
                                    </>
                                )
                            }
                            
                        })}
                    </>
                )
            })
        }
        
    }

    const renderSuat = (name) => {
        console.log('ngay', name);
        if(Object.keys(movie).length && name){
            return movie.heThongRapChieu.map((items, index) => {
                return (
                    <>
                        {items.cumRapChieu.map((movie, indexMovie) => {
                            return (
                                <>
                                    {movie.lichChieuPhim.map((ngay, indexNgay) => {
                                        
                                        if(new Date(ngay.ngayChieuGioChieu).toLocaleDateString() === name){
                                            return (
                                                <option key={indexNgay} value={ngay.maLichChieu}>{new Date(ngay.ngayChieuGioChieu).toLocaleTimeString()}</option>
                                            )
                                            
                                        }
                                        
                                    })}
                                </>
                            )
                        })}
                    </>
                )
            })
        }
    }
    

    const renderPhim = () => {
        if(Object.keys(props.list).length){
            return props.list.map((items, index) => {
                return (
                    <option key={index} value={items.maPhim}>{items.tenPhim}</option>
                )
            })
        }
    }

    

  return (
    <section className="list-book">
      <div className="warpper-list-book">
        <div className="wrapper-book">
            <div className="btn-group select-width book-movie" role="group">
                <select onChange={handlePhim} class="form-select selectMenu scroll-bar" id="style-2" aria-label="Default select example">
                    <option selected>Phim</option>
                    {renderPhim()}
                </select>
            </div>
          <div className="btn-group select-width book-theater" role="group">
            <select disabled={!items.maPhim} onChange={handleRap} class="form-select selectMenu scroll-bar" id="style-2" aria-label="Default select example">
                    <option selected>Rạp</option>
                    {renderRap()}
                </select>
          </div>
          <div className="btn-group select-width book-date" role="group">
                <select disabled={!items.rap} onChange={handleNgay} class="form-select selectMenu scroll-bar" id="style-2" aria-label="Default select example">
                    <option selected>Ngày Chiếu</option>
                    {items.rap ? renderNgay(items.rap) : ''}
                </select>
          </div>
          <div className="btn-group select-width book-screen" role="group">
                <select disabled={!items.ngay} onChange={handleSuat} class="form-select selectMenu scroll-bar" id="style-2" aria-label="Default select example">
                    <option selected>Suất chiếu</option>
                    {items.ngay ? renderSuat(items.ngay) : ''}
                </select>
          </div>
          <div className="btn-group select-width book-button" role="group">
              
            <button disabled={!items.suat} id="book-movie" type="button" className="btn btn-primary">
              <Link style={{color:'#fff', textDecoration:'none'}} to={`/buy/${items.suat}`}>

              MUA VÉ NGAY
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
