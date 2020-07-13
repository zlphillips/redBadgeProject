import React, {useState, useEffect, Component} from 'react'


const FetchHome = (props: any) => {
    const [description, setDescription] = useState([] as any)
    const [photos,setPhotos] = useState([] as any)
    const [users, setUsers] = useState([] as any)






    const fetchAll = () => {
        fetch('http://localhost:3002/redBadge/post/all-posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token,
            }
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                console.log("Owner:", (data[0].userId))
                setDescription(data)
    })
            .catch(err => console.warn(err))

    }



    useEffect(() => fetchAll(), [])


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

     function fetchUsers (id: '')  {
        console.log('hello')
             fetch(`http://localhost:3002/user/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                }
            }).then((data) => data.json())
                .then((id) => {
                    console.log(id)
                  setUsers(id)
                })
                .catch((err) => {
                    console.log(err);
                });

            }
            useEffect(() => fetchUsers(''), [])







    return(
        <div>

        </div>
    )

}

 export default FetchHome;