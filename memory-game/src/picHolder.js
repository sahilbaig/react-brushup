
import React from "react";
import { useState,useEffect } from "react";


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const ImageHolder = (props) =>{

    let [images,setImages]=useState([])
    // 3. Create out useEffect function
    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=2&limit=10')
        .then((result)=>{
            return result.json()
            
        })
        .then((res)=>{
            res.forEach(element => {
               element.status=false 
            });
            
            setImages(res)
        })

    }, [])

    const changeStatus = (index) =>{
        props.setScore(images[index].status)
        images[index].status=!images[index].status
        shuffleArray(images)
    }
    return (
        <div>
            {images.map((item , index)=>{
                return (
                    
                    <img key={item.id} src={item.download_url}  alt="" width={"200 px"} height={"200px"} onClick={()=>{
                        changeStatus(index)
                        }
                        }
                    ></img>
                )
            })}
        </div>
    )

}

export default ImageHolder