import React, { useState } from 'react'
import searchImg from './icons8-search-64.png'
import Loader from './Loader';
export default function Application() {
    const [applications, setApplications] = useState([]);
    const [loader, setLoader] = useState(false);
    const fetchApplications = async () => {
        setLoader(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                method: "GET"
            });
            const result = await response.json();
            if (!response.ok) {
                console.log("problem in fetch");
            }
            else {
                setLoader(false);
                console.log(result)
                setApplications(result);
            }
        }
        catch (error) {
            setLoader(false);
            console.log(error);
        }
    }
    return (
        <>
            <div className="loader-screen">

            </div>
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
            <div className="loader-screen">

            {loader&&<Loader/>}
            </div>
            {!loader && (

            <div className="show-statuses">
                {
                    applications?.map((e) => (
                        <div key={e.id} className="application-bunch">
                            <div className="application-date application-text">13/05/2024</div>
                            <div className="application-name application-text">{e.name}</div>
                            <div className="application-status application-text">{`Status: Done`}</div>
                        </div>
                    ))
                }
            </div>
            )}
        </>
    )
}
