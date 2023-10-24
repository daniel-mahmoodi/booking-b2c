import React from 'react';

function Comment() {
  return (
    <div className="section-article-reviews" id="article-reviews">
      <div className="uk-grid uk-child-width-auto@s uk-flex-middle uk-flex-between uk-margin-medium-bottom" data-uk-grid>
        <div>
          <div className="uk-h2 uk-margin-remove" style={{ fontFamily: 'iransans' }}>
            <span className="icon-star"> </span>کامنت ها
          </div>
        </div>
        <div>
          <a className="uk-button uk-button-danger" href="#add-reviews" data-uk-scroll="offset: 50">افزودن نظر</a>
        </div>
      </div>
      <div className="uk-comment">
        <div className="uk-comment-header">
          <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
              <img className="uk-comment-avatar" src="/assets/img/avatar-1.png" width="60" height="60" alt="" />
            </div>
            <div className="uk-width-expand">
              <div data-uk-grid>
                <div>
                  <div className="uk-comment-title uk-margin-small-bottom" style={{ fontSize: '16px' }}>
                    لورم ایپسوم متن ساختگی با
                  </div>
                  <div className="uk-comment-meta">۱ روز پیش</div>
                </div>
                <div>
                  <ul className="stars-list">
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-comment-body" style={{ fontSize: '14px' }}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
          </p>
        </div>
      </div>
      <div className="uk-comment">
        <div className="uk-comment-header">
          <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
              <img className="uk-comment-avatar" src="/assets/img/avatar-1.png" width="60" height="60" alt="" />
            </div>
            <div className="uk-width-expand">
              <div data-uk-grid>
                <div>
                  <div className="uk-comment-title uk-margin-small-bottom" style={{ fontSize: '16px' }}>
                    لورم ایپسوم متن ساختگی با
                  </div>
                  <div className="uk-comment-meta">۱ روز پیش</div>
                </div>
                <div>
                  <ul className="stars-list">
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-comment-body" style={{ fontSize: '14px' }}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
          </p>
        </div>
      </div>
      <div className="add-reviews-form" id="add-reviews">
        <div className="uk-h2" style={{ fontFamily: 'iransans' }}>
          <span className="icon-star"></span>نظر گذاشتن
        </div>
        <form>
          <div className="uk-grid uk-grid-medium uk-child-width-1-1" data-uk-grid>
            <div>
              <textarea className="uk-textarea" name="review" placeholder="..." required></textarea>
            </div>
            <div>
              <input className="uk-input" type="text" name="fio" placeholder="نام شما *" required />
            </div>
            <div>
              <input className="uk-input" type="text" name="email" placeholder="ایمیل شما *" required />
            </div>
            <div>
              <label>
                <input className="uk-checkbox" type="checkbox" defaultChecked />
                <span className="uk-margin-small-left" style={{ margin: '0 10px 0 0', fontSize: '14px' }}>نام و ایمیل من را برای دفعه های بعد ذخیره کن</span>
              </label>
            </div>
            <div>
              <button className="uk-button uk-button-danger uk-button-large" type="submit">
                ارسال نظر
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
