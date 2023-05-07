import Sidebar from "../../../components/admin/sidebar/Sidebar";
import Navbar from "../../../components/admin/navbar/Navbar";
import "./setting.scss";

const AdminSetting = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="setting">
          <div className="setting_wrapper">
            <h2 className="setting__title">Setting</h2>

            <div className="setting__top">
              <button className="setting__btn">My Details</button>
              <button className="setting__btn active__btn">Profile</button>
              <button className="setting__btn">Password</button>
              <button className="setting__btn">Email</button>
              <button className="setting__btn">Notification</button>
            </div>

            <div className="details__form">
              <h2 className="profile__title">Hồ sơ</h2>
              <p className="profile__desc">Tải ảnh của bạn</p>
              <form>
                <div className="form__group">
                  <div>
                    <label>Sống ở</label>
                    <input type="text" placeholder="Đà Lạt" />
                  </div>
                  <div>
                    <label>Số đường</label>
                    <input type="text" placeholder="Phù đổng thiên vương" />
                  </div>
                </div>
                <div className="form__group">
                  <div>
                    <label>Email</label>
                    <input type="text" placeholder="aaa@gmail.com" />
                  </div>
                  <div>
                    <label>Số điện thoại</label>
                    <input type="text" placeholder="09876****" />
                  </div>
                </div>
                <div className="form__group">
                  <div>
                    <label>Ngày sinh</label>
                    <input type="date" placeholder="dd/mm/yyyy" />
                  </div>
                  <div>
                    <label>Giới tính</label>
                    <input type="text" placeholder="Nam" />
                  </div>
                </div>
                <div className="form__group">
                  <div>
                    <label>Tải ảnh của bạn lên</label>
                    <p className="profile-img__desc">Điều này sẽ được hiển thị trong hồ sơ của bạn</p>
                    <input type="file" placeholder="choose file" />
                  </div>
                  <div>
                    <div className="profile__img-btns">
                        <button className="dlt__btn">Xóa</button>
                        <button className="update__btn">Lưu</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSetting;
