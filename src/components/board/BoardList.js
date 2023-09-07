import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {fetchBoardList} from "../../actions/GroundAction";
import {useDispatch, useSelector} from "react-redux";

function BoardList(){
    const [curpage,setCurpage]=useState(1)
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(fetchBoardList(curpage))
    }, []);
    const boardList=useSelector((state)=>state.grounds.boardList)

    let list_html=boardList.map((vo)=>
        <tr>
            <td className="thumbnail-img">
                {vo.no}
            </td>
            <td className="name-pr">
                <NavLink to={"/board/detail/"+vo.no}>{vo.subject}</NavLink>
            </td>
            <td className="thumbnail-img">
                {vo.name}
            </td>
            <td className="thumbnail-img">
                {vo.regdate}
            </td>
            <td className="thumbnail-img">
                {vo.hit}
            </td>
        </tr>
    )

    const insertBtn=()=>{
        window.location.href="/board/insert"
    }

    return(
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>공지사항</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Board / List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-box-main">
                <div className="container">
                    <div className="row">
                        <div className={"col-lg-12 mb-1"}>
                            <input type={"button"} onClick={insertBtn} value={"글쓰기"} style={{"color":"white","backgroundColor":"#b0b435", "borderColor":"#b0b435"}}/>
                        </div>
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>조회수</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {list_html}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </Fragment>
    )
}
export default BoardList