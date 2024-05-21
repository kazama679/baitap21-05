import React from 'react'

export default function Bai11() {
  return (
    <div>
      <h3 className='h3'>Danh sách công việc</h3>
      <div className='all-jobs'>
        <input className='input-job' type="text" placeholder='Nhập tên công việc'/>
        <button className='button-job'>Thêm</button>
        <div className='name-job name-job1' style={{display:'none'}}>Tên công việc không được để trống!</div>
        <div className='name-job name-job2' style={{display:'none'}}>Tên công việc không được trùng!</div>
        <div className='box-jobs'>
          <div className='div-jobs'>
            <div className='div-jobs div-jobs-child1'>
              <input type="checkbox"/>
              <div className='job'>Code</div>
            </div>
            <div className='div-jobs div-jobs-child2'>
              <div><i className="fa-solid fa-pen"></i></div>
              <div><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>
          <div className='div-jobs'>
            <div className='div-jobs div-jobs-child1'>
              <input type="checkbox"/>
              <div className='job'>Code</div>
            </div>
            <div className='div-jobs div-jobs-child2'>
              <div><i className="fa-solid fa-pen"></i></div>
              <div><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>
          <div className='div-jobs'>
            <div className='div-jobs div-jobs-child1'>
              <input type="checkbox"/>
              <div className='job'>Code</div>
            </div>
            <div className='div-jobs div-jobs-child2'>
              <div><i className="fa-solid fa-pen"></i></div>
              <div><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>
          <div className='div-jobs'>
            <div className='div-jobs div-jobs-child1'>
              <input type="checkbox"/>
              <div className='job'>Code</div>
            </div>
            <div className='div-jobs div-jobs-child2'>
              <div><i className="fa-solid fa-pen"></i></div>
              <div><i className="fa-solid fa-trash"></i></div>
            </div>
          </div>
        </div>
        <div className='jobs-done'>
          Công việc đã hoàn thành: 
          <span className='span-job'><span className='job-number'>0</span>/ 
          <span className='job-full'>4</span></span>
        </div>
      </div>
    </div>
  )
}