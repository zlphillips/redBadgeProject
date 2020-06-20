import React, { Component, useState} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import StockPic from '../assets/stockphoto1.jpg';
import { SSL_OP_SINGLE_DH_USE } from 'constants';

const Home = () => {

    const toastStyles = {
        margin: '1%'
    }

    const singleToast = {
        minWidth: '90vw'
    }

    const photoStyle = {
        borderStyle: 'solid',
        width: '7vh',
        height: '7vh',
        overflow: 'hidden',
        borderRadius: '50%',
        }
     
    const userStyles = {
        display: 'flex',
    }


    // fetch('localhost:3002/')

        const user = 'susansickomode'
        const number = '4'
        const postContent = 'I need a <br/>'


    return(
        <div>
            <div className="p-3 bg-dark my-2 rounded" style={toastStyles}>
                <Toast style={singleToast}>
                <ToastHeader>
                    <div style={userStyles}>
                        <img src={StockPic} style={photoStyle} />
                        <h1 style={{fontSize: '3vh'}}>{user}</h1>
                        <div>
                       {/* <p>{`posted ${number} minutes ago`}</p> */}
                       </div>
                    </div>
                </ToastHeader>
                <ToastBody>
                    <h3 style={{fontSize: '3vh'}}>{postContent}</h3>
                </ToastBody>
                </Toast>
            </div>
        </div>
    )
}

export default Home