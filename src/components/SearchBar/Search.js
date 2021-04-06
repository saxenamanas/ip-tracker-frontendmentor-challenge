import React,{useState} from 'react';
import {setData} from '../../redux/locationData';
import './Search.scss';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Search() {
    let [ip,setip] = useState('');
    let dispatch = useDispatch();
    let getDetails = async ()=>{
        dispatch(setData(null))
        try{
            let rep = await axios.get(`
            https://geo.ipify.org/api/v1?apiKey=${process.env.ip_api}&ipAddress=${ip}`);
            let newState = {
                ip:rep.data.ip,
                location:`${rep.data.location.city}, ${rep.data.location.region}, ${rep.data.location.country}`,
                timezone: rep.data.location.timezone,
                isp:rep.data.isp,
                lat: rep.data.location.lat,
                lng : rep.data.location.lng
            }
            console.log(newState)
            dispatch(setData(newState));
            // setData(newState);
            console.log(rep);
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className="search-container flex">
            <input value={ip} onKeyDown={e => e.key === 'Enter' && getDetails()} onChange={(event)=>{setip(event.target.value)}} type="text"/>
            
            <div onClick={getDetails} className="search-btn flex">
                >
            </div>
        </div>
    )
}

export default Search
