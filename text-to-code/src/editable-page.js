import React from 'react'

function editablePage() {
    return (
        <div className='px-3 py-4 w-100' style={{ fontFamily: 'verdana' }}>
            <nav className='d-flex align-items-center justify-content-between p-2'>
                <div>
                    <a href="/#" contentEditable className='text-decoration-none text-dark'>Home</a>

                </div>
                <div className='col-md-2 d-flex align-items-center justify-content-between'>
                    <a href="/#" contentEditable className='text-decoration-none text-dark'>About</a>
                    <a href="/#" contentEditable className='text-decoration-none text-dark'>ContactUs</a>
                </div>

            </nav>
            <div className='mt-5 d-flex align-items-center justify-content-center'>
                <div className='d-flex flex-column align-items-center'>
                    <h2 contentEditable>Lorem Ipsum</h2>
                    <p contentEditable>Loreku iouyh kuglij yaTFYGk ughhg kuiuy;oj htiuh</p>

                </div>
            </div>
            <div className='mt-5 d-flex align-items-center justify-content-center'>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' contentEditable alt='image' width={180} />
                </div>
            </div>
        </div>
    )
}

export default editablePage