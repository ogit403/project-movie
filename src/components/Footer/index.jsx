import React from 'react'
import '../../assets/scss/sass/Layouts/_footer.scss';
import cgv from '../../assets/img/footer/cgv.png';
import bhd from '../../assets/img/footer/bhd.png';
import galaxy from '../../assets/img/footer/galaxycine.png';
import cinestar from '../../assets/img/footer/cinestar.png';
import lotte from '../../assets/img/footer/404b8c4b80d77732e7426cdb7e24be20.png';
import mega from "../../assets/img/footer/megags.png";
import bt from "../../assets/img/footer/bt.jpg"
import dongda from "../../assets/img/footer/dongdacinema.png"
import touch from "../../assets/img/footer/TOUCH.png"
import cnx from "../../assets/img/footer/cnx.jpg"
import starlight from "../../assets/img/footer/STARLIGHT.png"
import dcine from "../../assets/img/footer/dcine.png"
import zalopay from "../../assets/img/footer/zalopay_icon.png"
import payoo from "../../assets/img/footer/payoo.jpg"
import vcb from "../../assets/img/footer/VCB.png"
import agribank from "../../assets/img/footer/AGRIBANK.png"
import viettinbank from "../../assets/img/footer/VIETTINBANK.png"
import ivb from "../../assets/img/footer/IVB.png"
import go from "../../assets/img/footer/123go.png"
import laban from "../../assets/img/footer/laban.png"
import apple from "../../assets/img/footer/apple-logo.png"
import android from "../../assets/img/footer/android-logo.png"
import fb from "../../assets/img/footer/facebook-logo.png"
import zalo from "../../assets/img/footer/zalo-logo.png"
import zion from "../../assets/img/footer/zion-logo.jpg"
import congthuong from "../../assets/img/footer/d1e6bd560daa9e20131ea8a0f62e87f8.png"
export default function Footer() {
    return (
        <footer>
            <div className="wrapper-footer container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-4 first">
                        <p className="title">TIX</p>
                        <div className="row">
                            <div className="col-6 info1">
                                <div className="">
                                    <a href="#" style={{ paddingRight: 10 }}>FAQ</a>
                                </div>
                                <div className="">
                                    <a href="#">Brand Guidelines</a>
                                </div>
                            </div>
                            <div className="col-6 info1">
                                <div className="">
                                    <a href="#">Th???a thu???n s??? d???ng</a>
                                </div>
                                <div className="">
                                    <a href="#">Ch??nh s??ch b???o m???t</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 second">
                        <p className="title">?????I T??C</p>
                        <div className="row">
                            <div className="col-12 lineBottom">
                                <a href="#">
                                    <img className="iconConnect" src={cgv} style={{ backgroundColor: 'white' }} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={bhd} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={galaxy} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={cinestar} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={lotte} alt />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 lineBottom">
                                <a href="#">
                                    <img className="iconConnect" src={mega} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={bt} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={dongda} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={touch} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={cnx} alt />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 lineBottom">
                                <a href="#">
                                    <img className="iconConnect" src={starlight} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={dcine} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={zalopay} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={payoo} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={vcb} alt />
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 lineBottom">
                                <a href="#">
                                    <img className="iconConnect" src={agribank} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={viettinbank} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={ivb} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={go} alt />
                                </a>
                                <a href="#">
                                    <img className="iconConnect" src={laban} alt />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 third">
                        {/* <p class="title">TIX</p> */}
                        <div className="row">
                            <div className="col-6 textCenter">
                                <p className="title">MOBILE APP</p>
                                <a href="#">
                                    <img className="iconApp" src={apple} alt />
                                </a>
                                <a href="#">
                                    <img className="iconApp" src={android} alt />
                                </a>
                            </div>
                            <div className="col-6 textCenter">
                                <p className="title ">SOCIAL</p>
                                <a href="#">
                                    <img className="iconApp" src={fb} alt />
                                </a>
                                <a href="#">
                                    <img className="iconApp" src={zalo} alt />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 four">
                        <a style={{marginRight: 25}}>Th???a thu???n s??? d???ng</a>
                        <a>Ch??nh s??ch b???o m???t</a>
                        <div className="iconFooter" style={{marginTop: 15}}>
                            <a href="#" style={{marginRight: 10}}>
                                <img className="iconApp" src={fb} alt />
                            </a>
                            <a href="#">
                                <img className="iconApp" src={zalo} alt />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="hrFooter" />
                <div className="row infoFooter">
                    <div className="col-12 col-md-1 col-lg-1 col-xl-1 imgFooter">
                        <img className="zion" src={zion} alt />
                    </div>
                    <div className="col-12 col-md-9 col-lg-9 col-xl-9 infoFooter">
                        <span className="title">TIX ??? S???N PH???M C???A C??NG TY C??? PH???N ZION</span>
                        <span>?????a ch???: Z06 ???????ng s??? 13, Ph?????ng T??n Thu???n ????ng, Qu???n 7, Tp. H??? Ch?? Minh, Vi???t Nam.</span>
                        <span>Gi???y ch???ng nh???n ????ng k?? kinh doanh s???: 0101659783,<br />????ng k?? thay ?????i l???n th??? 30, ng??y 22 th??ng 01 n??m 2020  do S??? k??? ho???ch v?? ?????u t?? Th??nh ph??? H??? Ch?? Minh c???p.</span>
                        <span>S??? ??i???n Tho???i (Hotline): 1900 545 436<br />Email:
          <a href="#" style={{ color: '#fb4226' }}>support@tix.vn</a>
                        </span>
                    </div>
                    <div className="col-12 col-md-2 col-lg-2 col-xl-2 imgFooter">
                        <img className="congThuong" src={congthuong} alt />
                    </div>
                </div>
            </div>
        </footer>

    )
}
