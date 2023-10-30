import React, { useState } from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from 'react-bootstrap/Button';
const TopButton = () => {


    const [showButton, setShowButton] = useState(false);

    // show button when user scrolls down 20px
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // scroll to top of page when button is clicked
    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className='flex items-center justify-center'>
            <a onClick={scrollToTop}>
                <Button style={{ margin: "1rem 0", padding: "1rem", borderRadius: "50%" }} variant="primary"><ArrowCircleUpIcon style={{ color: "black" }} /></Button>
            </a>
            <span style={{ color: "red", marginRight: "1rem", fontSize: "20px" }}>بازگشت به بالا
            </span>
        </div>
    )
}

export default TopButton