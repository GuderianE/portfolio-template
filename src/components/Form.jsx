import { useState } from "react";
import React from "react";

export default function Form() {

    const [userData, setUserData] = useState({ name: '', email: '', message: '' })

    const changeHandler = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(userData);
    }

    const enterPress = (e) => {
        e.preventDefault();
        e.keyCode === '13' && submitHandler(e);
    }

    return (
        <div className='form-container'>
            <form autoComplete="off">
                <div className='input-fields'>

                    <div className='input-field'>
                        <label htmlFor="username">Full Name</label>
                        <input
                            type="text"
                            value={userData.name}
                            name='name'
                            id="username"
                            onChange={changeHandler}
                            placeholder='John Smith' />
                    </div>

                    <div className='input-field'>
                        <label htmlFor="useremail">Your Email</label>
                        <input
                            type="email"
                            value={userData.email}
                            name='email'
                            id="useremail"
                            onChange={changeHandler}
                            placeholder='john-smith@example.com' />
                    </div>

                    <div className='input-field'>
                        <label htmlFor="usermessage">Message</label>
                        <textarea
                            value={userData.message}
                            name="message"
                            id="usermessage"
                            onChange={changeHandler} >
                        </textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    onClick={submitHandler}
                    onKeyPress={enterPress}>
                    Send
                </button>
            </form>
        </div>
    )
}