import React from "react"
import axios from "axios"
import { useState,useEffect } from "react"


export default function Reservation() {
    const [user,setUser] = useState([])

    
    useEffect(()=>{
        
            axios.get("http://localhost:8000/get")
            .then((response)=>{
                console.log(response)
                setUser(response)
            }).catch((e)=>{
                console.log(" error is "+ e)
            })
        
    },[])
    return(
        <>
        {user.map((value) =>{
            return(
                <>
                <h1>
                {value.date}
                </h1>
                {/* <section>
                <img src={value.media_url} width="100%" />
                </section> */}

                </>
            )
        })
        }
        </>
    )
}