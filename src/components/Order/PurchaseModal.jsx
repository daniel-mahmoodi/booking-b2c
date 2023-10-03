import React from "react";

function PurchaseModal() {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
        display: "flex",
      }}
      id="modal-next"
    >
      <div
        style={{
          backgroundColor: "white",
          width: "60%",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f44153",
            color: "white",
            padding: "5px 10px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <p style={{ margin: 0, fontSize: 14 }}>نهایی کردن خرید</p>
          <p style={{ margin: 0, fontSize: 12 }}>ادامه مرحله خرید</p>
          <span
            className="fa fa-times close"
            style={{
              cursor: "pointer",
              left: 10,
              top: 10,
              position: "absolute",
            }}
          ></span>
        </div>
        <style>
          {`
            .next-basket-btn {
              width: 48%;
            }

            @media screen and (max-width: 1000px) {
              .next-basket-btn {
                width: 100%;
              }
            }
          `}
        </style>
        <div>
          <div className="next-basket-contaienr">
            <div
              className="next-basket"
              style={{ padding: "10px 20px", fontSize: 14 }}
            >
              <p style={{ marginBottom: 0 }}>
                مشخصات فردی که بلیط به نام او (به عنوان سرگروه) و همراهانش صادر
                می‌شود
              </p>
              <div>
                <div
                  style={{
                    paddingTop: 5,
                    fontSize: 14,
                    color: "#686e71",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="fa fa-user"
                      style={{
                        marginLeft: 7,
                        color: "#686e7192",
                        fontSize: 12,
                      }}
                    ></span>
                    <span>نام و نام خانوادگی سرگروه</span>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="first_name"
                      style={{ height: 38 }}
                    />
                    <p
                      className="invalid-msg"
                      style={{ fontSize: 12, marginBottom: 5 }}
                    >
                      مقدار معتبر وارد نمائید
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    paddingTop: 5,
                    fontSize: 14,
                    color: "#686e71",
                    width: "100%",
                  }}
                >
                  <div>
                    <span
                      className="fa fa-phone"
                      style={{
                        marginLeft: 7,
                        color: "#686e7192",
                        fontSize: 12,
                      }}
                    ></span>
                    <span>شماره موبایل</span>
                  </div>
                  <div>
                    <input
                      className="uk-input"
                      type="text"
                      name="first_name"
                      style={{ height: 38 }}
                    />
                    <p
                      className="invalid-msg"
                      style={{ fontSize: 12, marginBottom: 5 }}
                    >
                      مقدار معتبر وارد نمائید
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="uk-width-1-1 uk-first-column"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                    type="submit"
                  >
                    اتمام خرید و پرداخت
                  </button>
                  <button
                    className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                    type="submit"
                  >
                    ادامه خرید و موارد دیگر
                  </button>
                </div>
                <div
                  className="uk-width-1-1 uk-first-column"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <button
                    className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                    type="submit"
                  >
                    انصراف از خرید
                  </button>
                  <button
                    className="uk-button uk-button-danger uk-button-large shine next-basket-btn mb-1"
                    type="submit"
                  >
                    مشاهده سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
