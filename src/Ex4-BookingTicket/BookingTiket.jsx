

import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./style.css"
import { TYPE_PAYTICKET, TYPE_REMOVECHAIR, TYPE_SELECTED } from './action/type';
import Swal from 'sweetalert2';

class BookingTiket extends Component {
  render() {
    const { list, bookingList, onSelected, removeChair, payTicket } = this.props;
    return (
      <div className=' text-center'>
        <h2 className='mt-5'>Booking Vé Xem Phim</h2>
        <div className="row mt-5">
          <div className="col-7">
            <h3>Màn hình</h3>
            <div className="chair-container mt-4">
              {list.map((item, index) => {

                const first = index === 0;
                const danhSachGhe = item.danhSachGhe;

                return (
                  <div className='chair-row justify-content-center' key={`list-danh-sach-ghe=${index}`} style={{ display: "flex" }}>

                    < div className="mr-3" style={{ width: "20px", color: "red" }} > {first ? "" : item.hang}</div>

                    {danhSachGhe.map((ghe, index) => {
                      return (
                        <div onClick={() => {
                          if (ghe.daDat || ghe.dangChon) {
                            return
                          }
                          const data = { hang: item.hang, ...ghe }
                          onSelected(data)
                        }}
                          key={`danh-sach-ghe=${index}`}

                          className={` ${!ghe.gia ? 'disabled-button' : 'btn'} btnGhe ml-2 ghe ${ghe.daDat ? 'gheDuocChon' : ''} ${ghe.dangChon ? 'gheDangChon' : ''}`}

                          style={{ border: `${!ghe.gia ? 'none' : ''}` }}

                        >{ghe.soGhe}

                        </div>

                      )
                    })}

                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-5">
            <h3>Số ghế đặt</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop:"25px" }}>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="gheDuocChon"></div>
                <p>Ghế đã đặt</p>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="gheDangChon"></div>
                <p>Ghế đang đặt</p>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="ghe"></div>
                <p>Ghế chưa đặt</p>
              </div>
            </div>
            <table className='table'>

              <thead>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </thead>

              <tbody>
                {bookingList.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.soGhe}</td>
                      <td>{item.gia}</td>
                      <td>
                        <button onClick={() => { removeChair(item) }} className='btn btn-dark'>X</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {!bookingList.length ? (
              <div>
                Hãy chọn ghế muốn đặt
              </div>
            ) : (
              <div>
                <button onClick={() => { payTicket() }} className='btn btn-success col-3'>
                  Thanh toán
                </button>
              </div>
            )}

          </div>
        </div>

      </div >
    )
  };
};

const mapStateToProps = (state) => {
  return {
    list: state.movieReducer.list,
    bookingList: state.movieReducer.bookingList,
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    onSelected: (data) => {
      dispatch({ type: TYPE_SELECTED, payload: data })
    },

    removeChair: (item) => {
      console.log('item: ', item);
      dispatch({ type: TYPE_REMOVECHAIR, payload: item })
    },

    payTicket: (item) => {
      Swal.fire({
        title: 'Thông báo !',
        text: 'Thanh toán thành công',
        icon: 'success',
        confirmButtonText: 'Done'
      });

      dispatch({ type: TYPE_PAYTICKET, payload: item })
    }

  };
};

export default connect(mapStateToProps, mapDispatchTopProps)(BookingTiket)