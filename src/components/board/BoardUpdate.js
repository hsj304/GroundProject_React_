import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";
import {fetchBoardDetail} from "../../actions/GroundAction";
import {useDispatch} from "react-redux";

function BoardUpdate(){
    const {no} = useParams()
    const [name,setName]=useState('')
    const [pwd,setPwd]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const dispatch=useDispatch()

    useEffect(() => {
        axios.get("http://localhost/board/detail",{
            params:{
                no:no
            }
        }).then(res=>{
            console.log(res.data)
            setName(res.data.name)
            setSubject(res.data.subject)
            setContent(res.data.content)
        })
    },[]);
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
        if(pwd.trim()===""){
            document.querySelector('#pwd').focus()
            return

        }

        axios.get("http://localhost/board/update",{
            params:{
                no:no,
                name:name,
                pwd:pwd,
                subject:subject,
                content:content
            }
        }).then(res=>{
            if(res.data==="YES"){
                alert("수정되었습니다")
                window.location.href="/board/list"
            } else {
                alert("비밀번호가 틀립니다")
                document.querySelector('#pwd').value=""
                document.querySelector('#pwd').focus()

            }
        })
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
                            <h2>수정하기</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Board / Update</li>
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
                            <input type="text" className="form-control" id="pwd" placeholder="" value={pwd} onChange={pwdChange} required/>
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
                    <input type={"button"} value={"수정하기"} onClick={insertBtn} style={{"color":"white","backgroundColor":"#b0b435", "borderColor":"#b0b435"}}/>&nbsp;
                    <input type={"button"} value={"취소"} onClick={cancelBtn} style={{"color":"white","backgroundColor":"#b0b435", "borderColor":"#b0b435"}}/>
                </div>
            </div>


        </Fragment>
    )
}
export default BoardUpdate