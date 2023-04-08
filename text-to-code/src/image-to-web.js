
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function textToVideo() {
    return (
        <>

            <div className='main-body d-flex flex-row align-items-center justify-content-center' style={{ backgroundColor: "#dec98c", height: "100vh", fontFamily: "verdana" }}>
                <div className='' style={{ height: "95vh", width: "50vw", }}>
                    <div className='w-100 pt-4 pb-5 ps-5 pe-5' style={{ backgroundColor: "#fac666", height: "100%", border: "2px solid white", borderRadius: "25px", boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)" }}>
                        <div className='w-100 p-3' style={{ backgroundColor: "#32553a", height: "100%", borderRadius: "15px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.5)", borderBottom: "6px solid black" }}>
                            <div className='w-100 d-flex align-items-center justify-content-between' style={{ height: "20%" }}>
                                <label htmlFor='choose-file' className='form-control w-50' style={{ color: "black", fontSize: "20px", fontWeight: "bold", backgroundColor: "#d6d7c0", borderRadius: "10px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)" }}>Choose your file</label>
                                <input type={'file'} id='choose-file' className='form-control p-2' hidden />
                                <button className='py-2 btn' style={{ backgroundColor: "#426d4a", color: "white", width: "100px", borderRadius: "10px", boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.25)" }}>
                                    Convert
                                </button>

                            </div>
                            <div className=' d-flex align-items-center justify-content-center' style={{ backgroundColor: "#d6d7c0", height: "80%", width: "100%", borderRadius: "15px", borderBottom: "4px solid black" }}>
                                <img src='https://i2-prod.cheshire-live.co.uk/incoming/article12584503.ece/ALTERNATES/s1227b/JS111314411.jpg' alt='image' width={180} />
                                <img src='https://i2-prod.cheshire-live.co.uk/incoming/article12584503.ece/ALTERNATES/s1227b/JS111314411.jpg' alt='image' width={180} />
                                <img src='https://i2-prod.cheshire-live.co.uk/incoming/article12584503.ece/ALTERNATES/s1227b/JS111314411.jpg' alt='image' width={180} />

                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default textToVideo