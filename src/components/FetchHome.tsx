import React, {useState, useEffect, Component} from 'react'


const FetchHome = (props: any) => {
    
    const [photos,setPhotos] = useState([] as any)
  










    const fetchPhotos = () => {
        fetch('http://localhost:3002/redbadge/multer/photos', {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
                'Authorization': props.token,
            }
        })
            .then(photos => photos.json())
            .then(photos => {
                console.log(photos)
                setPhotos(photos)

            })
    }


    useEffect(() => fetchPhotos(), [])

     






    return(
        <div>

        </div>
    )

}

 export default FetchHome;