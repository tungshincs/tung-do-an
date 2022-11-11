const User = ({ user }) => {
  if (user) {
    return (
      <div>
        <Hello name={user.name} />
        <button>Logout</button>
        {user.isAdmin && <button>Admin page</button>}
      </div>
    );
  } else {
    return (
      <div>
        <button>Đăng nhập</button>
        <button>Đăng ký</button>
      </div>
    );
  }
};

User.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string,
    user: PropTypes.bool,
  }),
};

// Nếu có thì hiển thị tên user
// Nếu user có isAdmin thì hiển thị nút truy cập trang admin
// Nếu không có User thì hiển thị nút đăng nhập đăng ký
