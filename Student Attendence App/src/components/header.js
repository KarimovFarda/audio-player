import React from 'react';
import { Attendance } from '../components/attendance'
const Header = () => {
    return (
        <div>
            <div style={{ marginLeft: "6.5rem" }} className="row ml-4 w-80 ml-5 ">
                <div className="col-2 w-20" style={{ marginRight: "5.4rem", marginLeft: '7.5rem' }}><h4>Student List</h4></div>
                {Attendance.map(item => {
                    return <div style={{ padding: '0.2rem', marginRight: "0.7rem", fontWeight: 'bold' }} className="col-1">{new Date(Number(item.date) * 1000).toLocaleDateString()}<h5></h5></div>
                })}
            </div>
        </div>
    );
}
export default Header;
