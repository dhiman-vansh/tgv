// import dog from "./Assests/dog.JPG"
// import cpvid from "./Assests/vid.mp4"
import React from "react"
import axios from "axios"
import { useState,useEffect } from "react"
import "./app.css"

export default function Gall() {

    const [user,setUser] = useState([])

    
    useEffect(()=>{
        axios('https://v1.nocodeapi.com/vansh_dhiman/instagram/tUkHyBGGZKbQuwxW')
        .then((response)=>{
            console.log(response.data.data)
            setUser(response.data.data)
        })
            // axios.get("https://tgvnewapi.herokuapp.com/dataget", {
            //     mode: 'no-cors',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*'
            //     }
            // })
            // .then((response)=>{
            //     console.log(response.data.data)
            //     setUser(response.data.data)
            // })
        
    },[])

    return(
        <>
        <div className="gal">
        <h1 style={{textAlign:"center",marginTop:"2%"}}>Our Instagram : </h1>

        <div className="ig" data-aos="fade-up"
            data-aos-duration="1000"
            >

        {user.map((value) =>{
            return(
                <>
                <section>
                <img src={value.media_url} width="100%" />
                </section>

                </>
            )
        })
        }
        </div>
        </div>
        </>
    )
}