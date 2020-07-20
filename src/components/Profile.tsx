import React, { useEffect, useState, MouseEvent } from 'react';
import '../css/Profile.css'




interface Profile {
  profilePic: Blob,
  bio: string
}

function Profile(props: any) {
  const [profile, setProfile] = useState<any>([])
  window.onscroll = function () { Function() };

  const fetchProfile = () => {
    fetch('http://localhost:3002/redBadge/profile/my-profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.token,
      }
    }).then(results => results.json())
      .then(results => setProfile(results))
      .catch(err => console.log(err))
  }

  useEffect(() => fetchProfile(), [])

  return (
    <div className="mainDiv"
     style={{ margin: "auto", border: "1px solid red", padding: "0 5% 0 5%", display: "inline-block" }}>
      <div className="header-cont" id="myHeader"
        style={{ width: "100%", height: "10%", textAlign: "center", position: "sticky" }}>
         {profile.map((profile: Profile , index: number) => (
            <h1>{profile.bio}</h1>
            ))}
      </div>
    </div>
  )
}

export default Profile
