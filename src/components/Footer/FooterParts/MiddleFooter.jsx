import React from "react";

const MiddleFooter = () => {
  return (
    <div className="page-footer__middle">
      <div className="uk-container">
        <div className="uk-grid uk-child-width-1-2@s" data-uk-grid>
          <div>
            <h3 className="uk-h3">عضویت در خبرنامه</h3>
            <div className="subscribe-form">
              <form>
                {/* Hidden Required Fields */}
                <input
                  type="hidden"
                  name="project_name"
                  value="Ecata - City Portal"
                />
                <input
                  type="hidden"
                  name="admin_email"
                  value="chernyh.mihail@gmail.com"
                />
                <input
                  type="hidden"
                  name="form_subject"
                  value="Form subscribe"
                />
                {/* END Hidden Required Fields */}
                <div className="subscribe-form__box">
                  <input
                    className="uk-input"
                    type="email"
                    name="email"
                    placeholder="ایمیل ..."
                    required
                  />
                  <input
                    className="uk-button uk-button-danger"
                    type="submit"
                    value="عضویت"
                  />
                </div>
              </form>
            </div>
          </div>
          <div>
            <h3 className="uk-h3">شبکه های اجتماعی</h3>
            <ul className="social">
              <li>
                <a href="#!">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
