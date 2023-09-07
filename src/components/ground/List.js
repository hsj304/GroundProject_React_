import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {fetchGroundList} from "../../actions/GroundAction";
import {useDispatch, useSelector} from "react-redux";

function List(){
    const dispatch=useDispatch()
    const [fd,setFd]=useState('')
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [startpage,setStartpage]=useState(0)
    const [endpage,setEndpage]=useState(0)

    useEffect(() => {
        print()
    }, [curpage]);
    const groundList=useSelector((state)=>state.grounds.groundList)
    const print=()=>{
        dispatch(fetchGroundList(fd,curpage))

        axios.get("http://localhost/ground/ground_total",{
            params:{
                fd:fd,
                curpage:curpage
            }
        }).then(res=>{
            console.log(res.data)
            setTotalpage(res.data.totalpage)
            setStartpage(res.data.startpage)
            setEndpage(res.data.endpage)
        })
    }

    const fdBtn=()=>{
        setCurpage(1)
        print()
    }

    const fdChange=(e)=>{
        setFd(e.target.value)
    }

    const pageClick=(num)=>{
        setCurpage(num)
        print()
    }

    const gList_html=groundList.map((vo,key)=>
        <div className="col-md-6 col-lg-4 col-xl-4" key={vo.gno}>
            <div className="blog-box">
                <div className="blog-img">
                    <img className="img-fluid" src={vo.gimage} style={{"height":"250px","width":"100%"}} alt="" />
                </div>
                <div className="blog-content">
                    <div className="title-blog">
                        <NavLink to={"/ground/detail/"+vo.gno}><h3>{vo.gname}</h3></NavLink>
                        <p>{vo.gaddr}</p>
                    </div>

                </div>
            </div>
        </div>
    )

    let arr=[]
    let len=endpage-startpage
    let temp=startpage
    for(let i=0;i<=len;i++){
        arr[i]=temp++
    }

    const page_html=arr.map((num,key)=>
        <li key={num}><a href="#" className={curpage==num?'active':''} onClick={()=>pageClick(num)}>{num}</a></li>
    )

    return (
        <Fragment>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>구장 목록</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item" style={{color:"white"}}>Ground / List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-all text-center">
                                <h1>구장 리스트</h1>
                                <p>다양한 풋살장을 만나보세요</p>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-12"} style={{"textAlign":"right", "marginBottom":"10px"}}>
                            <input type={"text"} value={fd} onChange={fdChange}/>
                            <input type={"button"} value={"검색"} onClick={fdBtn}
                                   style={{"backgroundColor":"#b0b435", "color":"white", "borderColor":"#b0b435","marginLeft":"2px"}}
                            />
                        </div>

                    </div>
                    <div className={"row"}>
                        {gList_html}
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-12 text-center"}>
                            <div className="footer-top-box">
                                <ul>
                                    {startpage>1?<li><a href={"#"} onClick={()=>pageClick(startpage-1)}>&lt;</a></li>:''}
                                    {page_html}
                                    {endpage<totalpage?<li><a href={"#"} onClick={()=>pageClick(endpage+1)}>&gt;</a></li>:''}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default List