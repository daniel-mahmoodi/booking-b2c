import React from "react";

function FactorTab() {
  return (
    <div className="profile-left" style={{ display: "none" }} id="factor">
      <div className="d-flex p-2 factor-top-container justify-start">
        <a className="factor-top-item active">
          <span>سفارش ها</span>
        </a>
        <a className="factor-top-item">
          <span>کیش برگ ها</span>
        </a>
        <a className="factor-top-item">
          <span>کالاهای خریداری شده</span>
        </a>
      </div>

      <div className="factor-contaienr">
        <div>
          <div className="factor-title">سفارش های پرداخت نشده : ۰</div>
          <div className="factor">
            <ul className="data-header">
              <li>شناسه</li>
              <li>تاریخ ثبت</li>
              <li>وضعیت مالی</li>
              <li>شناسه پرداخت</li>
              <li>مبلغ کل</li>
              <li>عملیات</li>
            </ul>
            <div className="data-block">
              {/* Repeat this block for each order */}
              <p>شناسه : ۲۳۴</p>
              <p>تاریخ ثبت : ۱۳۹۰/۰۱/۰۲</p>
              <p>
                وضعیت مالی : <span className="text-red">پرداخت نشده</span>
              </p>
              <p>شناسه پرداخت : ۲۳۴۶۵۵۴</p>
              <p>مبلغ کل : ۲۹۵,۰۰۰ تومان</p>
              <p>
                <a href="" className="detail-btn">
                  جزییات
                </a>
                <a href="" className="detail-btn">
                  حذف
                </a>
                <a href="" className="detail-btn">
                  پرداخت
                </a>
              </p>
            </div>
            {/* End of order block */}
            <ul className="data-row">
              <li>۳۴۵۹</li>
              <li>۱۳۹۰/۰۱/۰۲</li>
              <li>
                <span className="text-red">پرداخت نشده</span>
              </li>
              <li>۲۳۴۶۵۵۴</li>
              <li>۲۹۵,۰۰۰ تومان</li>
              <li>
                <a href="" className="detail-btn">
                  جزییات
                </a>
                <a href="" className="detail-btn">
                  حذف
                </a>
                <a href="" className="detail-btn">
                  پرداخت
                </a>
              </li>
            </ul>
            <div className="data-detail">
              {/* Uncomment and complete this block for order details */}
              {/* <p>مبلغ اصلی : ۲۹۹,۰۰۰ تومان</p>
              <p>تخفیف : ۲۹۹,۰۰۰ تومان</p>
              <p>قابل پرداخت : ۲۹۹,۰۰۰ تومان</p>
              <p>بصورت نقدی</p> */}
              <table className="factor-table">
                <tr>
                  <td className="border-bottom" colSpan="2">
                    جزئیات سفارش #۲۳۴۹۸۰
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "80px" }}>مبلغ اصلی :</td>
                  <td>۱۲۷٬۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td>مبلغ اصلی :</td>
                  <td>۱۲۷٬۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td>مبلغ اصلی :</td>
                  <td>۱۲۷٬۰۰۰ تومان</td>
                </tr>
                <tr>
                  <td>مبلغ اصلی :</td>
                  <td>۱۲۷٬۰۰۰ تومان</td>
                </tr>
              </table>
              <table className="factor-table mt-2">
                <tr>
                  <td className="border-bottom" colSpan="3">
                    لیست تخفیف ها و کالاهای سفارشی
                  </td>
                </tr>
                <tr>
                  <td>
                    <a>تست یک</a>
                  </td>
                  <td>۱ عدد</td>
                  <td>۱۲۷٬۰۰۰ تومان</td>
                </tr>
              </table>
              <table className="factor-table mt-2">
                <tr>
                  <td className="border-bottom" colSpan="2">
                    آدرس و اطلاعات تماس جهت ارسال کالا(ها)
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "80px" }}>شهرستان :</td>
                  <td>تهران</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FactorTab;
