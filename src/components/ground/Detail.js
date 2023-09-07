import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import {fetchGroundDetail} from "../../actions/GroundAction";
import {useDispatch, useSelector} from "react-redux";


function Detail(){
    const {gno} = useParams()
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(fetchGroundDetail(gno))
    }, []);
    const groundDetail=useSelector((state)=>state.grounds.groundDetail)

    return(
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>구장 상세</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Ground / detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-frame"> <img className="img-fluid" src={groundDetail.gimage} style={{"height":"400px","width":"100%"}} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="noo-sh-title-top">{groundDetail.gname}</h2><br/>
                            <h3>주소 : {groundDetail.gaddr}</h3>
                            <h3>가격 : {groundDetail.gprice}</h3><br/>
                            <span style={{"fontSize":"20px","fontWeight":"bold"}}>구장 설명</span>
                            <pre style={{"whiteSpace":"pre-wrap"}}>{groundDetail.gnotice}</pre>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
export default Detail