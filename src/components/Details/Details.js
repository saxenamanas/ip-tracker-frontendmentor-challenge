import axios from 'axios';
import React,{useEffect} from 'react'
import './Details.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setData} from '../../redux/locationData';


function Details() {
    let data = useSelector((state) => state.data.data);
    let dispatch = useDispatch();
    // let [data,setData] = useState(null);

    useEffect(()=>{

        const getCurrent = async ()=>{
            try{
                let rep = await axios.get('https://geo.ipify.org/api/v1?apiKey=at_x0qrefVHi5uS9LjyWMsHKnCJL2NmD');
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
            }catch(e){
                console.log(e);
            }
        }


        getCurrent();
    },[dispatch]);
    return (
        <div className="details">
            <div className="items border">
                <span className="sub">IP Address
                </span>
                {data==null?<span className="data">-</span>:<span className="data">{data.ip}</span>}
                {/* <span className="data">192.168.1.1</span> */}
            </div>

            <div className="items border">
            <span className="sub">Location</span>
            {data==null?<span className="data">-</span>:<span className="data">{data.location}</span>}
            </div>

            <div className="items border">
            <span className="sub">Timezone</span>
            {data==null?<span className="data">-</span>:<span className="data">{data.timezone}</span>}
            </div>

            <div className="items">
                <span className="sub">ISP</span>
                {data==null?<span className="data">-</span>:<span className="data">{data.isp}</span>}
            </div>
            
        </div>
    )
}

export default Details
