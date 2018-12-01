import React from "react";

//Iterating arrays using map function and returning Images
const ImageList=(props)=>{
    const imgs=props.Images.map((image)=>{
        return<img src={image.urls.regular} alt={image.description} height="800px" width="500px"/>

    })
    
    return(
        <div>{imgs}</div>
    )

}



export default ImageList;