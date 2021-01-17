import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const DisplayProfile = (props: any) => {

    function newBlob(photo: any) {
        const photoURL = String.fromCharCode.apply(null, new Uint8Array(photo) as any)
        return photoURL
    }

        console.log(props.profile.profilePic)
        console.log(`${newBlob(props.profile.profilePic)}`)
    return (
        <div>
            
            <Avatar alt="Remy Sharp"
                variant='square'
                src={`${newBlob(props.profile.profilePic.data)}`}
                className={props.classes.large} />
            <p>{props.profile.bio}</p>
           
        </div>
    )
}

export default DisplayProfile;