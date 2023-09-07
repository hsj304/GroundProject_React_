
import {FETCH_BOARD_LIST,FETCH_BOARD_UPDATE,FETCH_GROUND_DETAIL,FETCH_BOARD_DELETE,FETCH_BOARD_DETAIL,FETCH_BOARD_INSERT,FETCH_GROUND_HIT,FETCH_GROUND_LIST,FETCH_GROUND_RAND} from "../actions/types";

const initialState={
    groundHit:[],
    groundRand:[],
    groundList:[],
    groundDetail:{},
    boardList:[],
    boardData:{},
}

export default function(state=initialState,action){
    console.log("reducer function call..action")
    switch (action.type){
        case FETCH_GROUND_HIT:
            return {
                ...state,
                groundHit: action.payload
            }
        case FETCH_GROUND_RAND:
            return {
                ...state,
                groundRand: action.payload
            }
        case FETCH_GROUND_LIST:
            return {
                ...state,
                groundList: action.payload
            }
        case FETCH_GROUND_DETAIL:
            return {
                ...state,
                groundDetail: action.payload
            }
        case FETCH_BOARD_LIST:
            return {
                ...state,
                boardList: action.payload
            }
        case FETCH_BOARD_DETAIL:
            return {
                ...state,
                boardData: action.payload
            }
        default:
            return state

    }
}