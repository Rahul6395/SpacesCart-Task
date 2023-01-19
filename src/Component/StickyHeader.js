import React from 'react'
import "../Style/StickyHeader.css"

function StickyHeader() {
    return (
        <div className='container-fluid  border-purple ptop'>
            <div className='container'>
                <div class="row">
                    <div class="col-md-4 px-0">
                        <div className='d-flex align-items-end'>
                            <a className='mb-0 fs-14 color-purple'>Free Returns</a>
                            <span className='px-3 color-purple'>|</span>
                            <a className='mb-0 fs-14 color-purple'>Try At Home</a>
                            <span className='px-3 color-purple'>|</span>
                            <a className='mb-0 fs-14 color-purple'>24 Hr Dispatch</a>
                        </div>
                    </div>

                    <div class="col-md-4 offset-md-4  px-0">
                        <div className='d-flex justify-content-end align-items-end'>
                            <a className='mb-0 fs-14 color-purple'>+441613125767
                            </a>
                            <span className='px-3 color-purple'>|</span>
                            <a className='mb-0 fs-14 color-purple'>Help</a>
                            <span className='px-3 color-purple'>|</span>
                            <a className='mb-0 fs-14 color-purple'>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader