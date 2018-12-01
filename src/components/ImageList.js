import React from "react";

//Iterating arrays using map function and returning Images
const ImageList=(props)=>{
    const imgs=props.Images.map((image)=>{
        return(
        <div key={image.id} style={{marginLeft: "100px"}}>
            <abbr title={image.description}><img src={image.urls.regular} alt={image.description} height="500px" width="500px"/></abbr>
            <p>Posted by:{image.user.instagram_username}</p>
            <br></br>
        </div>
            
        )

    })
    
    return(
        <div>{imgs}</div>
    )

}



export default ImageList;