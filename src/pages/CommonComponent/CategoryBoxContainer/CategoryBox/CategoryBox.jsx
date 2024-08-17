import React from 'react';
import { IoMdPhonePortrait } from "react-icons/io";

const CategoryBox = () => {
    return (
        <div
            style={{ width: "150px", height: "150px" }}
            className=' rounded-2 border border-black border-opacity-50 m-2 d-inline-block  position-relative py-3 '>
            <IoMdPhonePortrait className='display-1 position-absolute' style={{ top: "25%", left: "25%" }} />
        </div>
    );
};

export default CategoryBox;