import {Fragment, useState} from "react";
import axios from "axios";
import {fetchBoardInsert} from "../../actions/GroundAction";
import {useDispatch} from "react-redux";

function BoardInsert(){
    const [name,setName]=useState('')
    const [pwd,setPwd]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const dispatch=useDispatch()

    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }

    const insertBtn=()=>{
        dispatch(fetchBoardInsert(name,pwd,subject,content))
        window.location.href="/board/list"
    }

    const cancelBtn=()=>{
        window.location.href="/board/list"
    }

    return(
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>글쓰기</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Board / Insert</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-lg-12"} style={{"padding":"40px 400px 5px 400px"}}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">이름</label>
                            <input type="text" className="form-control" id="firstName" placeholder="" value={name} onChange={nameChange} required/>

                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">비밀번호</label>
                            <input type="text" className="form-control" id="lastName" placeholder="" value={pwd} onChange={pwdChange} required/>

                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username">제목</label>
                        <div className="input-group">
                            <input type="text" className="form-control" id="username" placeholder="" value={subject} onChange={subjectChange} required/>

                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">내용</label>
                        <textarea style={{"width":"100%", "height":"200px"}} value={content} onChange={contentChange}></textarea>

                    </div>

                </div>
                <div className={"col-lg-12 text-center mb-4"}>
                    <input type={"button"} value={"글쓰기"} onClick={insertBtn} style={{"color":"white","backgroundColor":"#b0b435", "borderColor":"#b0b435"}}/>&nbsp;
                    <input type={"button"} value={"취소"} onClick={cancelBtn} style={{"color":"white","backgroundColor":"#b0b435", "borderColor":"#b0b435"}}/>
                </div>
            </div>


        </Fragment>
    )
}
export default BoardInsert