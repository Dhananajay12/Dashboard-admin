import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Users = () => {

    const [record, setRecord] = useState([])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resposne => resposne.json())
            .then(res => setRecord(res))
    }

    useEffect(() => {
        getData();
    },)

    return (
        <div>
            <h2 className=" font-style-hed  ">Users Details Who take Course <span className="text-danger">  (click on more Details button to see single user info)   </span></h2>
            <hr></hr>
            <div className="table-responsive">
                <table className="table ">
                    <thead className="" style={{ background: "rgb(39, 9, 206)" }}>
                        <tr className='text-white'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Operation</th>

                        </tr>
                    </thead>
                    <tbody>
                        {record.map((output) =>
                            <tr>
                                <td><p> </p> {output.id}</td>
                                <td>{output.name}</td>
                                <td>{output.email}</td>
                                <td>{output.username}</td>
                                <td><NavLink className=' btn btn-dark text-white' to='/singleuser' style={{ background: "rgb(39, 9, 206)" }}>More Details</NavLink> </td>


                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;