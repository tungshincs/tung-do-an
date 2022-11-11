# **React Router**

## **1. React-Router là gì?**

React Router là một thư viện chuẩn để định tuyến trong React. Nó cho phép điều hướng giữa các chế độ xem của các thành phần khác nhau trong Ứng dụng React, cho phép thay đổi URL của trình duyệt và giữ giao diện người dùng đồng bộ với URL.

Ứng dụng sẽ chứa ba thành phần: Home component, component và contact component. Chúng ta sẽ sử dụng React Router để điều hướng giữa các thành phần này.

Cài đặt:

`npm install react-router-dom --save`

## **2. Các thành phần trong React-Router**

#### **2.1 BrowserRouter vs HashRouter**

`React-Router` cung cấp cho chúng 2 thành phần hay sử dụng đó là `BrowserRouter` & `HashRouter`. Hai thành phần này khác nhau ở kiểu `URL` mà chúng sẽ tạo ra và đồng bộ.

- `BrowserRouter`: Được sử dụng phổ biến hơn, nó sử dụng `History API` có trong `HTML5` để theo dõi lịch sử bộ định tuyến của bạn.
- `HashRouter`: Sử dụng `hash` của `URL` (window.location.hash) để ghi nhớ mọi thứ.

```js
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
```

#### **2.2 Router**

`Route`: Định nghĩa một ánh xạ (mapping) giữa một URL và một `Component`. Điều đó có nghĩa là khi người dùng truy cập theo một URL trên trình duyệt, một `Component` tương ứng sẽ được `render` trên giao diện.

```js
<Router>
  <div className="App">
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </div>
</Router>
```

Trong đó:

- `path`: Là đường dẫn trên URL.
- `exact`: Liúp cho route này này chỉ hoạt động nếu URL trên trình duyệt phù hợp tuyệt đối với giá trị của thuộc tính path của nó.
- `component`: Là component sẽ đươc load ra tương ứng với Route đó.

#### **2.3 Link**

Trong HTML thì cặp thẻ để chuyển hướng đó là thẻ `<a></a>` thì trong react chúng ta sẽ dử dụng cặp thẻ `<Link></Link>` được import từ `React-Router`.

```js
<Link to="/about">About</Link>
```

Trong đó:

- `to`: Giống như thuộc tính `href` trong thẻ `a`.

#### **2.4 Navlink**

`NavLink` thì rất giống với `Link` về cách sử dụng, nhưng `NavLink` tốt hơn vì nó hỗ trợ thêm một số thuộc tính như là `activeClassName` và `activeStyle` 2 thuộc tính này giúp cho khi mà nó trùng khớp thì nó sẽ được active lên và chúng ta có thể style cho nó.

```js
<NavLink
  exact
  activeStyle={{
    backgroundColor: "white",
    color: "red",
  }}
  to="/"
  className="my-link"
>
  Trang Chu
</NavLink>
```

#### **2.5 Custom link**

ở trên ta có thẻ NavLink giúp chúng ta có thêm một thuộc tính nhưng giả sử khi bạn không muốn activeClassName hoặc activeStyle tại thẻ NavLink mà nó lại nằm ở một thẻ bao nó ví dụ như thẻ div hay thẻ li thì sao? sau đây mình sẽ custom lại để có thể sử dụng các class hoặc style ở thẻ bao ngoài của nó.

```js
const MenuLink = ({
  label, // nội dung trong thẻ
  to, // giống như href trong thẻ a
  activeOnlyWhenExact,
}) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        //match la doi tuong xac dinh su trung khop cua URL
        var active = match ? "active abc" : "";

        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
```

#### **2.6 Đối tượng Match**

Khi bạn muốn lấy một số thông tin ở trên URL thì bạn có thể dùng đối tượng `match` để lấy dữ liệu về. Tại cấu hình `Router` ta chỉ cần truyền thêm đối tượng `match` vào `component` mà cần sử dụng đối tượng `match`

```js
   {
        path : '/products',
        exact : false,
        main : ({match}) => <Products match={match} />
    }

```

Khi `console.log(match)` ta sẽ có kết quả như sau.

![markdown](https://images.viblo.asia/f0ea77eb-f128-4e4e-bfd9-88fbaeb67f38.png)

Trong đối tượng params sẽ chứa các tham số mà ta truyền trên URL.

#### **2.7 Đối tượng prompt - xác nhận hướng khi chuyển trang**

Giả sử khi bạn đang nhập liệu ở form nào đó mà không may click nút back hay chuyển trang thì thôi xong dữ liệu bạn nhập sẽ mất hết để khác phục điều đó ta có đối tượng prompt nó sẽ giúp chúng ta trước khi back hay chuyển trang nó sẽ xác nhận xem là chúng ta có chắc chắn muốn back hay chuyển trang không!

Khi muốn sử dụng đối tượng prompt thì chúng ta chỉ cần import nó từ react-router

```js
import { Prompt } from "react-router-dom";

<Prompt
  when={true} // true | false
  message={(location) => `Ban chac chan muon di den ${location.pathname}`}
/>;
```

![markdown](https://images.viblo.asia/00e6deaa-24b5-453e-b579-d57330d6ac5e.png)

#### **2.8 Redirect**

- Chức năng dùng để chuyển trang.
- Có thể truy xuất thông tin trang trước đó thông qua đối tượng location. Để sử dụng Redirect ta chỉ cần import nó từ react-router.

```js
import { Redirect } from "react-router-dom";
```

Khi bạn muốn sử dụng location thì tại cấu hình Router ta chỉ cần truyền thêm đối tượng location vào component mà cần sử dụng đối tượng location.

```js
{
    path : '/login',
    exact : false,
    main : ({location}) => <Login location={location} />
}

```

![markdown](https://images.viblo.asia/04995437-b55c-41ce-a740-23bdcbd10961.png)

## **3. Sử dụng React-Router**

Để sử dụng React Router, trước tiên chúng ta hãy tạo một vài thành phần trong ứng dụng react. Trong thư mục dự án của bạn, hãy tạo một thư mục có tên là thành phần bên trong thư mục src và bây giờ thêm 3 tệp có tên `home.js` , `about.js` và `contact.js` vào thư mục thành phần.

Bây giờ, chúng ta hãy đưa các thành phần React Router vào ứng dụng:

- BrowserRouter: Thêm bí danh BrowserRouter làm Bộ định tuyến vào tệp app.js của bạn để bao bọc tất cả các thành phần khác. BrowserRouter là một thành phần mẹ và chỉ có thể có một thành phần con duy nhất.

```js
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"></div>
      </Router>
    );
  }
}
```

- Link: Bây giờ chúng ta hãy tạo liên kết đến các thành phần của chúng ta. Thành phần liên kết sử dụng to prop để mô tả vị trí mà các liên kết sẽ điều hướng đến.

```js
<div className="App">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/about">About Us</Link>
    </li>

    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
  </ul>
</div>
```

Bây giờ chúng ta hãy thử tìm hiểu các đạo cụ liên quan đến thành phần Router:

1. `exact`: Nó được sử dụng để khớp giá trị chính xác với URL. Đối với ví dụ: chính xác đường dẫn = '/ about' sẽ chỉ hiển thị thành phần nếu nó khớp chính xác với đường dẫn nhưng nếu chúng ta xóa chính xác khỏi cú pháp, thì giao diện người dùng sẽ vẫn được hiển thị ngay cả khi cấu trúc giống như / about / 10.
2. `path`: Path chỉ định tên đường dẫn mà chúng tôi gán cho thành phần của mình.
3. `component`: Nó đề cập đến thành phần sẽ hiển thị khi khớp với đường dẫn.
