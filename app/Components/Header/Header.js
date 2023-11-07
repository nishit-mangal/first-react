import React from "react";
import style from './Header.css'
import Link from "next/link";

const Header = ({
    // setUser
}) =>{
    return (
        <>
            <div className="Header">
                <h1>Logo</h1>
                <div className="SideOptions">
                    <Link href='/About'>About</Link>
                    <Link href='/Careers'>Careers</Link>
                    <h4 >Contact</h4>
                    <h4 >Account</h4>
                </div>
            </div>
        </>
    )
}

export default Header