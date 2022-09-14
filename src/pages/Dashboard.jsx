import React from 'react';
import { useEffect, useState } from 'react';
import PieChart from './PieChart';
import { FaCommentAlt, FaUserAlt } from 'react-icons/fa'



const Dashboard = () => {

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
        <div className="col main  ">


            <h2 className=" font-style-hed  ">DASHBOARD</h2>
            <hr></hr>

            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                </button>
                <strong>Data and Records</strong> Learn more about employee
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card bg-success text-white h-100">
                        <div className="card-body  color" style={{ backgroundColor: "/57b960" }}>
                            <div className="rotate">

                                <FaUserAlt className="size-logo " />
                            </div>
                            <h6 className="text-uppercase">Users</h6>
                            <h1 className="display-4">134</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white  h-100">
                        <div className="card-body color">
                            <div className="rotate">
                                <i className="fa fa-list fa-4x"></i>
                            </div>
                            <h6 className="text-uppercase">COURSE</h6>
                            <h1 className="display-4">87</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white color h-100">
                        <div className="card-body color">
                            <div className="rotate">
                                <FaCommentAlt className='size-logo' />
                            </div>
                            <h6 className="text-uppercase">COMMENTS</h6>
                            <h1 className="display-4">125</h1>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 py-2">
                    <div className="card text-white color h-100">
                        <div className="card-body">
                            <div className="rotate">
                                <i className="fa fa-share fa-4x"></i>

                            </div>
                            <h6 className="text-uppercase">Shares</h6>
                            <h1 className="display-4">36</h1>
                        </div>
                    </div>
                </div>
            </div>

            <hr />


            <div className="row card-5 ">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h5 className="font-style-hed mt-3 mb-3 text-secondary">
                        Check More Records of instructors
                    </h5>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead className="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>

                                </tr>
                            </thead>
                            <tbody>
                                {record.slice(0, 10).map((output) =>
                                    <tr>
                                        <td>{output.id}</td>
                                        <td>{output.name}</td>
                                        <td>{output.email}</td>
                                        <td>{output.username}</td>

                                        <td></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5">
                    <h4 className='font-style-hed mt-3 mb-3 text-center text-secondary'>Data in Chart</h4>
                    <div className="mx-5" > <center> <PieChart></PieChart>  </center>  </div>      </div>
            </div>


  <div className='row card-5 mt-2'>

  <h1 className=" font-style-hed mt-3 mx-3 ">NEW NEWS</h1>
  <br></br>

  
  <p className='mt-4 mx-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extreme</p>

  </div>
 





        </div>
    );
};

export default Dashboard;