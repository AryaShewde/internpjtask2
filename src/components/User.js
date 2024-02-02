import React, { useState } from 'react'
import avatar from "../avatar/avatar.jpg"
// import More from './More';

const User = ({ sendDataToParent, user }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const [aavatar, setAavatar] = useState(null);
    const [bio, setBio] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);
    const [username, setUsername] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const handleImageError = () => {
        setImageLoaded(false);
    };
    const handlepushdet = () => {
        setAavatar(user.avatar)
        setBio(user.Bio)
        setJobTitle(user.jobTitle)
        setUsername(user.profile.username)
        setFirstName(user.profile.firstName)
        setLastName(user.profile.lastName)
        setEmail(user.profile.email)
        sendDataToParent(aavatar, bio, jobTitle, username, firstName, lastName, email)
    }
    return (
        <div>
            <div className='d-flex w-100'>
                <div className='d-flex my-2'>
                    {imageLoaded ? (
                        <img className='imglist rounded-circle' src={user.avatar} alt="" onError={handleImageError} />
                    ) : (
                        <img className='imglist rounded-circle' src={avatar} alt="Default" />
                    )}
                    <div className='d-flex flex-column align-items-start justify-content-center'>
                        <h1 className='namelist fw-bold'>{user.profile.firstName} {user.profile.lastName}</h1>
                        <button className='fw-bold border border-0 bg-transparent text-primary btn' id='myButton' onClick={handlepushdet}>Know More...</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default User
