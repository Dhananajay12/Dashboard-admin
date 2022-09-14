import React from 'react';
import PieBar from './PieBar';
import image from '../Images/Jason.png'

const Course = () => {
    return (
        <>


            <h2 className=" font-style-hed  ">COURSE </h2>

            <hr></hr>


            <div className='row'>

                <div className='col-md-6'>


                    <div className="text-center mt-5 card-5 " ><img src={image} alt="error" className='card-round-image' />
                        <h2 className=" font-style-hed mt-2 ">COURSE NAME </h2>
                        <div className="row mt-5">
                            <div className='col-md-6 '>
                                <h5 className="mx-2">THIS COR. USER</h5>
                                <p className="text-secondary mx-2">20</p>
                            </div>
                            <div className='col-md-6 '>
                                <h5 className="mx-2"> CODE NAME</h5>
                                <p className="text-secondary mx-2">84585894</p>

                            </div>

                        </div>
                        <div className="row mt-5">
                            <div className='col-md-6 '>
                                <h5 className="mx-2"> COMPLETE TIME</h5>
                                <p className="text-secondary mx-2">dhananjay876@gmail.com</p>
                            </div>
                          
                            <div className='col-md-6 '>
                                <h5 className="mx-2">INSTRUCTOR</h5>
                                <p className="text-secondary mx-2">Jhon Doe</p>

                            </div>

                        </div>


                    </div>
                    <hr></hr>

                    <div className='row  '>
                        <div className="mx-3 card-5">

                            <div className="mx-4">

                                <h4 className=" font-style-hed mt-4  ">DESCRIPTION </h4>
                                <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                    </div>


                </div>


                <div className='col-md-6 card-5'>
                    <h4 className=" font-style-hed mt-4  ">COURSE ANALYTICS </h4>
                    <PieBar></PieBar>
                </div>

            </div>
            <hr></hr>

        </>
    );
};
export default Course;