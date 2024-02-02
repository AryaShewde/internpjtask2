import React, { useState } from 'react'
import User from './User';
import avatar from "../avatar/avatar.jpg"

const Users = ({ users, errormess }) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const [usernameee, setUsernameee] = useState();
    const [aavataree, setAavataree] = useState();
    const [bioee, setBioee] = useState();
    const [jobTitleee, setJobTitleee] = useState();
    const [firstNameee, setFirstNameee] = useState();
    const [lastNameee, setLastNameee] = useState();
    const [emailee, setEmailee] = useState();
    const [existdata, setExistdata] = useState(false);
    const ReceiveDataFromChild = (aavatar, bio, jobTitle, username, firstName, lastName, email) => {
        if (username !== null && aavatar !== null && bio !== null && jobTitle !== null && firstName !== null && lastName !== null && email !== null) {
            setUsernameee(username)
            setAavataree(aavatar)
            setBioee(bio)
            setJobTitleee(jobTitle)
            setFirstNameee(firstName)
            setLastNameee(lastName)
            setEmailee(email)
            setExistdata(true)
            setImageLoaded(true);
        }
    };
    const handleImageError = () => {
        setImageLoaded(false);
    };
    return (
        <div className='d-flex w-100 holeapp gap-4'>
            <div className='first bg-white p-3 w-100 rounded shadow'>
                <h2>Users</h2>
                <hr />
                {users && users.map((user) => (
                    <User key={user.createdAt} user={user} sendDataToParent={ReceiveDataFromChild} />
                ))}
                {errormess ? <h1>No data to show</h1> : ""}
            </div>
            <div className=' shadow second bg-primary-subtle p-3 border-start border-white border-5 rounded flex-column'>
                <div>
                    <p className='fs-4'>Details</p>
                    <hr />
                </div>
                {existdata ? <div className='overflow-y-auto'>
                    {imageLoaded ? (
                        <img className='imglist rounded-circle' src={aavataree} alt="" onError={handleImageError} />
                    ) : (
                        <img className='imglist rounded-circle' src={avatar} alt="Default" />
                    )}
                    <p className='fw-bolder fs-5'>User Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{usernameee}</span></p>
                    <p className='fw-bolder fs-5'>Bio : <span className='fw-bold fs-6 text-dark text-opacity-75'>{bioee}</span></p>
                    <p className='fw-bolder fs-5'>JobTitle : <span className='fw-bold fs-6 text-dark text-opacity-75'>{jobTitleee}</span></p>
                    <p className='fw-bolder fs-5'>First Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{firstNameee}</span></p>
                    <p className='fw-bolder fs-5'>Last Name : <span className='fw-bold fs-6 text-dark text-opacity-75'>{lastNameee}</span></p>
                    <p className='fw-bolder fs-5'>Email Id : <span className='fw-bold fs-6 text-dark text-opacity-75'>{emailee}</span></p>
                </div> :
                    <div className='text-center w-100'>
                        <h2 className='text-black-50'>No Data</h2>
                    </div>}

            </div>
        </div>
    )
}

export default Users
