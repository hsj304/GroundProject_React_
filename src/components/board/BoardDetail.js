import {Fragment, useEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router";
import {fetchBoardDelete, fetchBoardDetail} from "../../actions/GroundAction";
import {useDispatch, useSelector} from "react-redux";

function BoardDetail(){
    const {no}=useParams()
    const nav=useNavigate()
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchBoardDetail(no))
    }, []);
    const boardData=useSelector((state)=>state.grounds.boardData)

    const updateBtn=()=>{
        window.location.href="/board/update/"+no
    }

    const deleteBtn=()=>{
        dispatch(fetchBoardDelete(no))
        window.location.href="/board/list"
    }

    return(
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>상세보기</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Board / Detail</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"row"} style={{"padding":"40px 400px 20px 400px"}}>
                <div className={"col-md-12 col-lg-12"}>
                    <div className="order-box">
                        <div className="title-left">
                        </div>
                        <div className="d-flex">
                            <div className="font-weight-bold">{boardData.subject}</div>
                            <div className="ml-auto font-weight-bold">hit : {boardData.hit}</div>
                        </div>
                        <hr className="my-1"/>
                        <div className="d-flex">
                            <div className="font-weight-bold "> name : {boardData.name} </div>
                            <div className="ml-auto font-weight-bold"> Date : {boardData.regdate} </div>
                        </div>
                        <hr className="my-1"/>
                        <div className="d-flex">
                            <div className="font-weight-bold" style={{"width":"100%"}}>
                                <pre className={"font-weight-bold"} style={{"width":"100%"}}>{boardData.content}</pre>
                            </div>
                        </div>
                        <hr className="my-1"/>
                        <div className={"text-right"}>
                            <input type={"button"} value={"수정"} onClick={updateBtn}/>&nbsp;
                            <input type={"button"} value={"삭제"} onClick={deleteBtn}/>&nbsp;
                            <input type={"button"} value={"목록"} onClick={()=>nav(-1)}/>
                        </div>
                        <hr className="my-1"/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default BoardDetail