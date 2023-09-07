
import {FETCH_BOARD_LIST,FETCH_BOARD_UPDATE,FETCH_GROUND_DETAIL,FETCH_BOARD_DELETE,FETCH_BOARD_DETAIL,FETCH_BOARD_INSERT,FETCH_GROUND_HIT,FETCH_GROUND_LIST,FETCH_GROUND_RAND} from "./types";
import axios from "axios";

//구장 인기 3
export const fetchGroundHit=()=>dispatch=>{
    axios.get("http://localhost/ground/ground_hit").then((res)=>dispatch({
        type:FETCH_GROUND_HIT,
        payload:res.data
    }))
}

//구장 랜덤 3
export const fetchGroundRand=()=>dispatch=>{
    axios.get("http://localhost/ground/ground_rand").then((res)=>dispatch({
        type:FETCH_GROUND_RAND,
        payload:res.data
    }))
}

//구장 리스트
export const fetchGroundList=(fd,curpage)=>dispatch=>{
    axios.get("http://localhost/ground/ground_list",{
        params:{
            fd:fd,
            curpage:curpage
        }
    }).then((res)=>dispatch({
        type:FETCH_GROUND_LIST,
        payload:res.data
    }))
}
//구장 상세
export const fetchGroundDetail=(gno)=>dispatch=>{
    axios.get("http://localhost/ground/ground_detail",{
        params:{
            gno:gno
        }
    }).then((res)=>dispatch({
        type:FETCH_GROUND_DETAIL,
        payload:res.data
    }))
}

//게시판 리스트
export const fetchBoardList=(curpage)=>dispatch=>{
    axios.get("http://localhost/board/list",{
        params:{
            curpage:curpage
        }
    }).then((res)=>dispatch({
        type:FETCH_BOARD_LIST,
        payload:res.data
    }))
}

//게시판 등록
export const fetchBoardInsert=(name,pwd,subject,content)=>dispatch=>{
    axios.get("http://localhost/board/insert",{
        params:{
            name:name,
            pwd:pwd,
            subject:subject,
            content:content
        }
    }).then((res)=>dispatch({
        type:FETCH_BOARD_INSERT
    }))
}

//게시판 상세
export const fetchBoardDetail=(no)=>dispatch=>{
    axios.get("http://localhost/board/detail",{
        params:{
            no:no
        }
    }).then((res)=>dispatch({
        type:FETCH_BOARD_DETAIL,
        payload:res.data
    }))
}

//게시판 삭제
export const fetchBoardDelete=(no)=>dispatch=>{
    axios.get("http://localhost/board/delete",{
        params:{
            no:no
        }
    }).then((res)=>dispatch({
        type:FETCH_BOARD_DELETE
    }))
}