import React from 'react';

const SequencesModal = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        position: 'fixed',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        direction: 'rtl',
     //    display: 'none',
      }}
      id="modal"
    >
      <div style={{ backgroundColor: 'white', width: '60%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
        <div
          style={{
            backgroundColor: '#f44153',
            color: 'white',
            padding: '5px 10px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <p style={{ margin: 0, fontSize: '14px' }}>همین حالا خرید کنید</p>
          <p style={{ margin: 0, fontSize: '12px' }}>
            آیتم دلخواه خود را جهت سفارش به سبد خرید اضافه کنید
          </p>
          <span
            className="fa fa-times close"
            style={{ cursor: 'pointer', left: '10px', top: '10px', position: 'absolute' }}
          ></span>
        </div>
        <style>
          {`
            .basket-contaienr {
              font-size: 14px;
            }
            .basket-contaienr > div:first-child {
              box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
              font-weight: 500;
            }
            .basket-title {
              padding: 10px;
              border-bottom: 1px solid lightgray;
            }
            .basket {
              font-weight: 100;
            }
            .basket > ul:first-child {
              font-weight: 500;
            }
            .basket > ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-wrap: wrap;
              text-align: center;
            }
            .basket .data-row {
              border-top: 1px solid lightgray;
              font-size: 12px;
              border-bottom: 1px solid lightgray;
            }
            .basket > ul > li {
              width: 20%;
              padding: 10px 15px;
            }
            .basket > ul > li + li {
              border-right: 1px solid lightgray;
            }
            .basket .detail-btn {
              color: '#686e71';
              text-decoration: 'none';
              border: '1px solid rgb(235, 234, 234)';
              padding: '3px 8px';
              border-radius: '4px';
              transition: '0.5s';
            }
            .basket .data-block {
              border-top: '1px solid lightgray';
              padding: '10px 15px';
              font-size: '12px';
            }
            .basket .data-block p {
              margin: 0 0 10px;
            }
            .basket .detail-btn:hover {
              color: '#f44153';
              border-color: '#f44153';
            }
            .basket .data-detail {
              padding: '10px 20px';
              font-weight: 300;
              background-color: '#f4415309';
              border-top: '1px solid lightgray';
              display: 'none';
              font-size: '12px';
            }
            .basket .data-detail p {
              margin: 0;
            }
            .basket .text-green {
              color: 'green';
            }
            .basket .text-red {
              color: 'red';
            }
            .basket .data-block {
              display: 'none';
            }
            @media screen and (max-width: 1000px) {
              .basket .data-row {
                display: 'none !important';
              }
              .basket .data-block {
                display: 'block';
              }
              .basket .data-header {
                display: 'none';
              }
            }
          `}
        </style>
        <div>
          <div className="basket-contaienr">
            <div className="basket">
              <div className="data-block">
                <div>
                  <div
                    style={{
                      width: '100px',
                      height: '80px',
                      backgroundImage: 'url(assets/img/bg-banner-blog-grid.jpg)',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      borderRadius: '5px',
                      margin: '0 auto',
                    }}
                  ></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href="#"
                      style={{
                        color: '#686e71',
                        paddingTop: '10px',
                        display: 'inline-block',
                        textDecoration: 'none',
                      }}
                    >
                      لورم ایپسوم متن ساختگی با
                    </a>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ padding: '0 5px' }}>قیمت واحد :</div>
                    <div>
                      <span style={{ textDecoration: 'line-through solid red', color: 'red' }}>۱۵,۰۰۰</span>
                      <br />
                      <span style={{ color: 'green' }}>۱۴,۰۰۰</span>
                    </div>
                  </div>
                </div>
                <div style={{ position: 'relative', height: '50px', width: '110px', margin: '0 auto' }}>
                  <div
                    style={{
                      position: 'absolute',
                      left: '5px',
                      bottom: '5px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: '#f44153',
                        display: 'inline-block',
                        borderRadius: '5px',
                        width: '33px',
                        height: '33px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '30px',
                          display: 'inline-block',
                          color: 'white',
                          position: 'relative',
                          top: '-3px',
                        }}
                        onclick="updateCart(event,9,'minus')"
                      >
                        -
                      </span>
                    </span>
                    <span style={{ backgroundColor: 'white', display: 'inline-block' }}>
                      <span
                        style={{
                          fontSize: '14px',
                          padding: '0 10px',
                          display: 'inline-block',
                          color: 'black',
                        }}
                        data-id="9"
                        data-cart-count=""
                      >
                        ۰
                      </span>
                    </span>
                    <span
                      style={{
                        backgroundColor: '#f44153',
                        display: 'inline-block',
                        borderRadius: '5px',
                        width: '33px',
                        height: '33px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '25px',
                          padding: '0 10px',
                          display: 'inline-block',
                          color: 'white',
                        }}
                        onclick="updateCart(event,9,'plus')"
                      >
                        +
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input type="text" className="date input-date" readOnly />
                </div>
                <div
                  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '5px' }}
                >
                  <button
                    className="uk-button uk-button-danger uk-button-large shine"
                    style={{ fontSize: '12px' }}
                    data-btn-next-basket
                  >
                    <span>پرداخت</span>
                  </button>
                </div>
              </div>
              <ul className="data-row">
                <li>
                  <div
                    style={{
                      width: '100px',
                      height: '80px',
                      backgroundImage: 'url(assets/img/bg-banner-blog-grid.jpg)',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      borderRadius: '5px',
                      margin: '0 auto',
                    }}
                  ></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a
                      href="#"
                      style={{
                        color: '#686e71',
                        paddingTop: '10px',
                        display: 'inline-block',
                        textDecoration: 'none',
                      }}
                    >
                      لورم ایپسوم متن ساختگی با
                    </a>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{ padding: '0 5px' }}>قیمت واحد :</div>
                    <div>
                      <span style={{ textDecoration: 'line-through solid red', color: 'red' }}>۱۵,۰۰۰</span> تومان
                      <br />
                      <span style={{ color: 'green' }}>۱۴,۰۰۰</span> تومان
                    </div>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                    <input type="text" className="date input-date" readOnly />
                  </div>
                </li>
                <li>
                  <div style={{ position: 'relative', height: '40px', width: '110px', margin: '0 auto' }}>
                    <div
                      style={{
                        position: 'absolute',
                        left: '5px',
                        bottom: '5px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: '#f44153',
                          display: 'inline-block',
                          borderRadius: '5px',
                          width: '33px',
                          height: '33px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '30px',
                            display: 'inline-block',
                            color: 'white',
                            position: 'relative',
                            top: '-3px',
                          }}
                          onclick="updateCart(event,9,'minus')"
                        >
                          -
                        </span>
                      </span>
                      <span style={{ backgroundColor: 'white', display: 'inline-block' }}>
                        <span
                          style={{
                            fontSize: '14px',
                            padding: '0 10px',
                            display: 'inline-block',
                            color: 'black',
                          }}
                          data-id="9"
                          data-cart-count=""
                        >
                          ۰
                        </span>
                      </span>
                      <span
                        style={{
                          backgroundColor: '#f44153',
                          display: 'inline-block',
                          borderRadius: '5px',
                          width: '33px',
                          height: '33px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '25px',
                            padding: '0 10px',
                            display: 'inline-block',
                            color: 'white',
                          }}
                          onclick="updateCart(event,9,'plus')"
                        >
                          +
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
                <div style={{ width: '100%', borderTop: '1px solid lightgray', padding: '10px 15px' }}>
                  <button
                    className="uk-button uk-button-danger uk-button-large shine"
                    style={{ fontSize: '12px' }}
                    data-btn-next-basket
                  >
                    <span>پرداخت</span>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SequencesModal;
