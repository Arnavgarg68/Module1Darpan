import React, { useState } from 'react'
import searchImg from './icons8-search-64.png'
export default function Application() {
    const [applications,setApplications] = useState([]);
    const fetchApplications = async ()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users",{
                method:"GET"
            });
            const result = await response.json();
            if(!response.ok){
                console.log("problem in fetch");
            }
            else{
                console.log(result)
                setApplications(result);
            }
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <>
            <div className="application-body">
                <div className="application-banner">
                    Check your Application Status
                </div>
                <div className="application-block">
                    <input type="number" placeholder='enter your roll number' />
                    <button type="button" onClick={fetchApplications}>
                        <span>Search</span>
                        <img src={searchImg} alt="" /></button>
                </div>
            </div>
            <div className="show-statuses">
                {
                    applications?.map((e)=>(
                <div key={e.id} className="application-bunch">
                    <div className="application-date">{e.id}</div>
                    <div className="application-name">{e.name}</div>
                    <div className="application-status">{e.username}</div>
                </div>
                    ))
                }
            </div>
        </>
    )
}
