import React from 'react';

const SectionTag = ({ second, minute, hour, day, tag, heading, countdown }) => {
    return (
        <div className=' mb-3'>
            <div className=' d-flex justify-content-start align-items-center'>
                <div style={{ width: "10px" }} className='h-auto bg-black'>.</div>
                <p className='mb-1 ms-2 fw-medium'>{tag}</p>
            </div>
            <div className='d-flex justify-content-start align-items-center'>
                <h1 className='fw-bolder me-3 h2'>{heading}</h1>
                <h1 style={{ display: countdown ? "block" : "none" }} className=' h2'>{`${day < 10 ? "0" + day : day}:${hour}:${minute}:${second}`}</h1>
            </div>
        </div>
    );
};

export default SectionTag;