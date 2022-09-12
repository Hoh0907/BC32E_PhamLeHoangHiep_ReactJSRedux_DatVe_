import React, { Component } from 'react'
import './style.css'
import TTinGhe from './TTinGhe'
import data from './danhSachGhe.json'
import Ghe from './Ghe'
export default class BTDatVe extends Component {
    renderHangGhe = () =>{
        return data.map((hangGhe,index) =>{
            return <div key={{index}}>
                <Ghe hangGhe={hangGhe} soHangGhe = {index}/>
            </div>
        } )
    }
  render() {
    return (
        <div className='bookingMovie' style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: "url('./img/bgmovie.jpg')", backgroundSize: '100%' }}>
            <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: 'fixed', width: '100%', height: '100%' }}></div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'>
                        <h1 className='text-warning text-center'>
                            ĐẶT VÉ XEM PHIM TẠI CYBERLEARN.VN
                        </h1>
                        <h3 className='text-light text-center mt-4'>Màn hình</h3>
                        <div className='d-flex flex-column justify-content-center mt-2'>
                            <div className='screen'></div>
                            {this.renderHangGhe()}
                        </div>
                        
                    </div>
                    <div className='col-4'>
                        <h2 className='text-light mt-1'>DANH SÁCH GHẾ BẠN CHỌN</h2>
                        <TTinGhe />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
