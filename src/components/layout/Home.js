import {Fragment, useEffect, useState} from "react";

import {fetchGroundHit,fetchGroundRand} from "../../actions/GroundAction";
import {useDispatch, useSelector} from "react-redux";

function Home(){
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchGroundRand())
        dispatch(fetchGroundHit())
    }, []);

    const groundHit=useSelector((state)=>state.grounds.groundHit)
    const groundRand=useSelector((state)=>state.grounds.groundRand)

    const gRand=groundRand.map((vo)=>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="shop-cat-box">
                <img className="img-fluid" src={vo.gimage} style={{"height":"300px","width":"100%"}} alt="" />
                <a className="btn hvr-hover" href={"/ground/detail/"+vo.gno}>{vo.gname}</a>
            </div>
        </div>
    )

    const gHit=groundHit.map((vo)=>
        <div className="col-md-6 col-lg-4 col-xl-4">
            <div className="blog-box">
                <div className="blog-img">
                    <a href={"/ground/detail/"+vo.gno}>
                        <img className="img-fluid" src={vo.gimage} style={{"height":"250px","width":"100%"}} alt="" />
                    </a>
                </div>
                <div className="blog-content">
                    <div className="title-blog">
                        <h3>{vo.gname}</h3>
                        <p>{vo.gaddr}</p>
                    </div>

                </div>
            </div>
        </div>
    )

    return(
        <Fragment>
            <div id="slides-shop" className="cover-slides" style={{"height":"650px"}}>
                <ul className="slides-container">
                    <li className="text-center">
                        <img src="images/123.png" alt="" style={{"width":"100%", "height":"100%"}}/>
                        <div className="container">

                        </div>
                    </li>
                </ul>
            </div>

            <div className="categories-shop">
                <div className="container">
                    <div className="row">

                        {gRand}

                    </div>
                </div>
            </div>

            <div className="latest-blog">
                <div className={"container"}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>이번주 인기 구장</h1>
                                <p>이번주 가장 인기많은 구장을 구경해 보세요</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {gHit}

                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default Home