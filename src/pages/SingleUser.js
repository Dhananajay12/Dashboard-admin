import React from 'react'
import image from '../Images/Jason.png'
import { FaUserEdit } from "react-icons/fa"
import './SingleUser.css';
import { RiNotification2Fill } from "react-icons/ri"
import { TiMessages } from "react-icons/ti"
import { AiOutlineHome } from "react-icons/ai"
import PieChart from './PieChart';
import PieBar from './PieBar';

const SingleUser = () => {
    return (
        <div className='container-fluid'>
            <div className='row' >

                <div className='col-md-4  ' >
                    <div className="card-5" style={{ marginTop: "-3rem" }}>


                        <div className="text-center mt-5"><img src={image} alt="error" className='card-round-image' />
                            <br></br>
                            <br></br>

                            <h2> Jason Doe</h2>
                            <h5 className='text-secondary'> I'am Computer student</h5></div>
                        <br></br>


                        <div className='row w-100'>

                            <div className="col-md-4">

                                <div className='logo-rounded text-center'>
                                    <FaUserEdit className=' h1 center2' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='logo-rounded'>
                                    <RiNotification2Fill className=' h1 center2' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='logo-rounded'>

                                    <TiMessages className=' h1 center2' />
                                </div>
                            </div>

                        </div>



                        <br></br>
                        <hr ></hr>
                        <br></br>

                        <div className="row">
                            <div className='col-md-6'>
                                <h5 className="mx-2"> Email</h5>
                                <p className="text-secondary mx-2">dhananjay876@gmail.com</p>
                            </div>
                            <div className='col-md-6'>
                                <h5 className="mx-2"> Phone</h5>
                                <p className="text-secondary mx-2">+9184585894</p>

                            </div>

                        </div>
                        <div className="row">
                            <div className='col-md-6'>
                                <h5 className="mx-2"> Gender</h5>
                                <p className="text-secondary mx-2">Male</p>
                            </div>
                            <div className='col-md-6'>
                                <h5 className="mx-2"> ID</h5>
                                <p className="text-secondary mx-2">83485993478</p>

                            </div>

                        </div>


                    </div>

                    <div className="card-5" >





                        <div className='row w-100'>
                        <h2 className=" font-style-hed mt-4 mx-5 ">USER ACTIVITY</h2>

                       <PieBar></PieBar>
                        </div>



                        <br></br>
                        <hr ></hr>
                        <br></br>




                    </div>



                </div>

                <div className='col-md-8'>
                    <div className='row card-5 mx-2'>
                        <div className='col-md-3'>
                            <div className="text-center mt-3">
                                <h5>100</h5>
                                <p className='text-secondary'>Watching HR</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="text-center mt-3">
                                <h5>4</h5>
                                <p className='text-secondary'>course Taken</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="text-center mt-3">
                                <h5>4</h5>
                                <p className='text-secondary'>course Taken</p>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="text-center mt-3">
                                <h5>4</h5>
                                <p className='text-secondary'>course Taken</p>
                            </div>
                        </div>


                    </div>
                    <div className='row mx-2 mt-3 card-5'>

                        <h2 className=" font-style-hed mt-4 mx-5 ">USER REVIEW</h2>



                        <PieBar></PieBar>

                    </div>



                </div>



            </div>


        </div>
    )
}

export default SingleUser