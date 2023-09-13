import { url } from "./url"
import axios from "axios"

export function getTodayRemedio(data){
    return resp = axios.get(`${url}/apiv1/get-remedio/?data=${data}`)

}

export function tomarRemedio(id, data){
    return resp = axios.put(`${url}/apiv1/remedio/${id}/`, {'tomado': true, 'data': data})
}


export function getAllRemedios(){
    return resp = axios.get(`${url}/apiv1/remedio`)

}