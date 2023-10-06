import React from 'react';

function EditProfileTab() {
  return (
    <div className="profile-left" style={{ display: 'none' }} id="edit-profile">
      <div className="profile-right-title">
        ویرایش حساب کاربری
      </div>
      <div>
        <form action="" autoComplete="off">
          <div className="d-flex">
            <div className="input-container">
              <div>
                <span className="fa fa-user icon"></span>
                <span>نام</span>
              </div>
              <div>
                <input className="uk-input" type="text" name="first_name" />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
            </div>
            <div className="input-container">
              <div>
                <span className="fa fa-user icon"></span>
                <span>نام خانوادگی</span>
              </div>
              <div>
                <input className="uk-input" type="text" name="last_name" />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
            </div>
            <div className="input-container">
              <div>
                <span className="fa fa-globe icon"></span>
                <span>آدرس وبسایت</span>
              </div>
              <div>
                <input className="uk-input" type="text" name="website" />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
            </div>
            <div className="input-container">
              <div>
                <span className="fa fa-user icon"></span>
                <span>نام کاربری</span>
              </div>
              <div>
                <input className="uk-input" type="text" name="username" />
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
            </div>
            <div className="textarea-container">
              <div>
                <span className="fa fa-align-justify icon"></span>
                <span>بیوگرافی</span>
              </div>
              <div>
                <textarea name="bio" id="" className="uk-input"></textarea>
                <p className="invalid-msg">مقدار معتبر وارد نمائید</p>
              </div>
            </div>
            <div className="uk-width-1-1 uk-first-column btn-container">
              <button className="uk-button uk-button-danger uk-button-large shine" type="submit">ویرایش حساب کاربری</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfileTab;
