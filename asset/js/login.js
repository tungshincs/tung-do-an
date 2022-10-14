function login(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;

  var password = document.getElementById("password").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);

  if (username === "" || password === "") {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu");
  }

  if (username !== data.username || password !== data.password) {
    alert("Sai tên đăng nhập hoặc mật khẩu");
  } else if (username === data.username && password === data.password) {
    alert("Đăng nhập thành công, chuyển hướng về trang chủ. ");
    window.location.href = "././index.html";
  }
}
