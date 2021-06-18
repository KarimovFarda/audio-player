import React from 'react';
import { useParams} from 'react-router-dom'
import users from './info'
export default function Customer() {
    const params = useParams();
    const info = users;


    console.log(params.id);
    return (
        <div className="container d-flex justify-content-center">
            
            <table style={{border:"2px solid black"}} className="col-10 table-striped table-bordered table table-light table-hover">
            
              <thead style={{borderBottom:"2px solid black"}} className="bg-warning " >
                <tr className="font-weight-bold text-center">
                    <th colSpan="2" style={{fontSize:30 + "px"}}>Data's of {users["results"][params.id]["name"]["first"]}  {users["results"][params.id]["name"]["last"]}</th>
                </tr>
                </thead>
  
                <tbody>
                <tr className="font-weight-bold text-center">
                    <td>Customer's Image</td>
                    <td><img src={users["results"][params.id]["picture"]["thumbnail"]}></img></td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Gender</td>
                    <td>{users["results"][params.id]["gender"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>FirstName</td>
                    <td>{users["results"][params.id]["name"]["first"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>LastName</td>
                    <td>{users["results"][params.id]["name"]["last"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Title</td>
                    <td>{users["results"][params.id]["name"]["title"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Email</td>
                    <td>{users["results"][params.id]["email"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Phone Number</td>
                    <td>{users["results"][params.id]["phone"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Customer's Username</td>
                    <td>{users["results"][params.id]["login"]["username"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Customer's Password</td>
                    <td>{users["results"][params.id]["login"]["password"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Location</td>
                    <td>{users["results"][params.id]["location"]["street"]["number"]}  {users["results"][params.id]["location"]["street"]["name"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Country</td>
                    <td>{users["results"][params.id]["location"].country}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>State</td>
                    <td>{users["results"][params.id]["location"].state}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>City</td>
                    <td>{users["results"][params.id]["location"].city}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>PostCode</td>
                    <td>{users["results"][params.id]["location"]["postcode"]}</td>
                </tr>
                <tr className="font-weight-bold text-center">
                    <td>Registration Date</td>
                    <td>{users["results"][params.id]["registered"]["date"]}</td>
                </tr>
                </tbody>
            </table>
           
        </div>
    );
}


