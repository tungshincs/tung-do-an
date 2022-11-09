## **1. Optimistic và Pressimistic**

##### **1.1** Optimistic


Ví dụ bạn đang làm một trang web mạng xã hội, và bạn có thể like mỗi bài viết ở đó. Tưởng tượng rằng nếu người dùng bấm vào nút like và nó mất 2s để server trả về kết quả like của người dùng. Thật sự nó không đem lại cho người dùng cảm giác nhanh mà người dùng mong chờ. Để giải quyết vấn đề đó, chúng ta dùng Optimistic UI Update.

Một `optimistic UI Update` là update mà nó hiện sự thay đổi trước khi nhận được kết quả từ server. Nói cách khác là UI sẽ hiện ra kết quả đó trước khi nhận được trả lời từ server.

###### Nếu như server trả về lỗi?

Lúc này, bạn có thể sử dụng một toast hay notification để thông báo cho người dùng rằng hành động trên không được thực hiện vì một lỗi từ server (Như trên facebook, nếu bình luận được gửi bị lỗi sẽ hiện một border màu đỏ, và đưa ra lựa chọn cho người dùng)

Vậy nó được thực hiện như nào?

###### Demo

Chúng ta sẽ làm một demo đơn giản được viết bằng React

Đầu tiên ta có một component App, bên trong nó chứa một button và một state để hiện trạng thái like.

```js
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div>
      <button>{isLiked ? "Liked" : "Like"}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
```

Sau đó ta tạo một file tên là `api.js` để chứa các API. Vì demo nên mình sẽ chỉ cho nó sleep 2s rồi trả về kết quả:

```js
export const likeApi = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
  };
};
```

Sau đó sửa component App, viết một function để lắng nghe sự kiện click của button

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { likeApi } from "./api";

function App() {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = async () => {
    const response = await likeApi();

    if (response.success) {
      setIsLiked(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>{isLiked ? "Liked" : "Like"}</button>
    </div>
  );
}
```

Lúc này app đã hoạt động đúng như mong đợi, tuy nhiên khi bấm vào nút like, ta phải đợi server trả về kết quả (2s) thì mới hiện được trạng thái đã like.

Chính vì thế, ta có thể sửa thành như sau:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { likeApi } from "./api";

function App() {
  const [isLiked, setIsLiked] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleLike = async () => {
    setIsLiked(true);

    const response = await likeApi();

    if (!response.success) {
      setIsLiked(false);
      setError("Something went wrong");
    }
  };

  return (
    <div>
      <p>{error}</p>

      <button onClick={handleLike}>{isLiked ? "Liked" : "Like"}</button>
    </div>
  );
}
```


Ở function `handleLike`, thay vì đợi server trả về kết quả, ta sẽ set liked thành true. Và nếu server trả về lỗi, ta sễ set liked thành false và hiện lỗi cho người dùng biết.



##### **1.2** Pressimistic



## **1. Context API trong React**

`Context cung cấp cho bạn một cách để truyền dữ liệu xuống cây component mà không cần phải truyền props xuống ở tất cả các cấp component.`

Với một định nghĩa đơn giản như vậy ở ngay đầu doc của Context trong React cũng giúp chúng ta phần nào định hướng về cách hoạt động cũng như chức năng của nó trong các component của React.

##### Tại sao lại là Context API

React Context tồn tại để bạn không cần truyền dữ liệu một cách thủ công bằng việc sử dụng props ở tất cả các cấp của component. Context chia sử dữ liệu cho nhiều các component khác nhau. Việc truyền dữ liệu từ component cha xuống component con thông qua props là tương đối dài dòng và khó kiểm sóat so với việc sử dụng Context API. Bằng việc sử dụng Context API, chúng ta không còn cần phải truyền các dữ liệu muốn chia sẻ với nhau thông qua việc dùng props.

##### Dùng khi nào?

Những thứ thuộc về context là dữ liệu được coi là global như thông tin người dùng, hay thông tin giỏ hàng... Vậy các lý do khác nhau cho việc sử dụng context:

- Dữ liêụ là cần thiết ở nhiều nơi: dữ liệu cần được sử dụng bởi nhiều component như chủ đề, người dùng, giỏ hàng...
- Truyền dữ liệu qua nhiều component: sử dụng context trong trường hợp này là tốt hơn khi bạn muốn chuyển 1 giá trị props thông qua nhiều component.

##### Khối xây dựng và API

Context API bao gồm một số khối xây dựng quan trọng:

- context: đối tượng context là một đối tượng lưu giữ giá trị context hiện tại và có thể được đăng ký.
  provider: là một componet của React cung cấp giá trị, nó lấy từ đối tượng context.
- consumer: là một component có thể sử dụng giá trị của provider và có thể hiển thị giá trị.

Đây là một phần lý thuyểt và có vẻ nó vẫn đang rất khó hiểu. Chúng ta hãy thử đi vào 1 ví dụ sau để hiểu rõ về nó hơn.

##### Ví dụ với Context API

Các bước thực hiện trong ví dụ này:

- Tạo đối tượng context: Chúng ta sử dụng React.createContext(). Nó trả về 1 đối tượng context để lộ ra Provider và Consumer component.
- Khai báo provider: Lấy tham chiếu Provider component có sẵn trong đối tượng context vừa tạo.
- Khai báo consumer: Đây là 1 component sống trên đối tượng context, và sử dụng nó để hiển thị giá trị cho người dùng.

##### Tạo đối tượng context

Với 1 project React đã tạo sẵn, ta tạo file `theme.js`, nó sẽ lưu trữ đối tượng context của chúng ta.

Đơn giản là chúng ta sử dụng React.createComponent() để tạo một đối tượng context như sau:

```js
// theme.js
import React from "react";
const ThemeContext = React.createContext("light");
export default ThemeContext;
```

Chúng ta gọi createContext() và truyền vào cho nó 1 tham số đầu vào đơn giản là giá trị mặc định của context. Chúng ta cũng export đối tượng để có thể sử dụng nó ở nhiều nơi khác.

##### Khai báo Provider

Sau khi chúng ta có 1 một đối tượng context được định nghĩa ở trên dùng để lấy tham chiếu đến Provider. Đê thưc hiện điều này, ta tạo file `sample.js` có React component để trình bày cách hoạt động của đối tượng context. Tạo component như sau:

```js
// sample.js
import React from "react";
import Theme from "./theme";
const Sample = () => (
  <Theme.Provider value="dark">// declare consumer</Theme.Provider>
);
export default Sample;
```

Ở trên, ta khai báo một functional component bình thường và cũng import đối tượng context `Theme`. Sau đó, ta lấy tham chiếu đến provider bằng cách gọi `Theme.Provider`. Đến đây thì thực sự cho có gì gọi là đang họạt động vì bạn có thể thấy rằng chúng ta đang thiếu một component gọi là Consumer để sử dụng giá trị và hiển thị ra cho người dùng. Ngoài ra thì ta cũng đặt `value` là `dark`.

##### Khai báo Consumer

Ta khai báo component là Consumer và hiển thị giá trị cho người dùng. Tiếp tục với file `sample.js` như sau:

```js
// sample.js
import React from "react";
import Theme from "./theme";
const Sample = () => (
  <Theme.Provider value="dark">
    <Theme.Consumer>
      {(theme) => <div>Our theme is: {theme}</div>}
    </Theme.Consumer>
  </Theme.Provider>
);
export default Sample;
```

Ở trên, ta đã thêm consumer dưới dạng đối tượng `Theme.Consumer` và ta thấy rằng bên trong nó định nghĩa một hàm có tham số truyền vào là giá trị của `theme`. Ta hiển thị giá trị của `theme` vào trong thẻ `div`.

Bạn có nghĩ đến tại sao ta lại đặt giá trị mặc định trong component Theme? Giá trị mặc định trên sẽ không được sử dụng nếu ta khai báo Provider. Tuy nhiên, nếu ta thiếu một component Provider, thì nó sẽ sử dụng đến giá trị mặc định. Vì vậy, đoạn mã sau sẽ xuất ra `dark` dưới dạng giá trị, chính là giá trị mà ta đặt cho Provider.

```js
const Sample = () => (
  <Theme.Provider value="dark">
    <Theme.Consumer>
      {(theme) => <div>Theme value: {theme}</div>}
    </Theme.Consumer>
  </Theme.Provider>
);
```

Và với đoạn mã sau đây thì giá trị có nó sẽ là `light`:

```js
const Sample = () => (
  <Theme.Consumer>{(theme) => <div>Theme value: {theme}</div>}</Theme.Consumer>
);
```

##### Sử dụng

Ta có thể đưa thành phần Consumer đưa vào component như sau:

```js

// ThemedButton.js
import Theme from 'theme.js';
const ThemedButton = (props) => (
      <Theme.Consumer>
            {theme => <button { …props }>button with them: {theme}</button>}
      </Theme.Consumer>
);
export default ThemedButton

```

Ở `sample.js` có thể viết gọn như sau:

```js
// sample.js
import React from "react";
import Theme from "./theme";
import ThemedButton from "./ThemedButton";
const Sample = () => (
  <Theme.Provider value="dark">
    <ThemedButton />
  </Theme.Provider>
);
export default Sample;
```

Bạn thấy rằng giá trị từ provider đang được truyền qua các props và ta có thể truy cập vào thuộc tính `theme` thông qua Consumer.

##### Dynamic Context

Nếu ta muốn thay đổi giá trị provider thì phải làm như nào? Có một cách là `dynamic context`. Ta đặt Provider vào bên trong một component và để giá trị của nó phụ thuộc vào state của component như sau:

```js
// DynamicContext.js
class DynamicContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "dark",
    };
  }
  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <ThemedButton />
      </ThemeContext.Provider>
    );
  }
}
```

Bây giờ, ta co thể dễ dàng thay đổi state và đồng nghĩa với việ thay đổi giá trị Provider đang cung cấp cho bất kỳ Consumer nào.

## **2. Tìm nạp dữ liệu với useEffect**

Tìm nạp dữ liệu, thiết lập đăng ký hay thay đổi các thành phần DOM trong React đều là những ví dụ về “tác dụng” hay `side effect` hoặc ngắn gọn hơn là `effect`.

Có 2 loại side effect chính là:

- Effects không cần Cleanup
- Effects cần phải Cleanup

##### useEffect không cần Cleanup

Đôi khi, chúng ta muốn chạy một số mã bổ sung sau khi React đã cập nhật DOM. Network request – mạng yêu cầu, manual DOM mutations – đột biến DOM theo cách thủ công và yêu cầu đăng nhập sẽ là các ví dụ điển hình cho useEffect không cần Cleanup.

Code ví dụ useEffect không cần Cleanup:

```js
import React, { useState, useEffect } from "react";
function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Bạn bấm vào tôi ${count} lần`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

##### useEffect cần phải Cleanup

Trong trường hợp bạn muốn thiết lập số lượng đăng ký từ một nguồn bên ngoài. Lúc này, bạn sẽ cần phải dọn dẹp – cleanup để tránh việc rò rỉ bộ nhớ ra ngoài!

Code ví dụ bằng class
Trong class React, để thiết lập đăng ký, bạn sẽ sử dụng componentDidMount và dọn dẹp bằng componentWillUnmount.

Ví dụ: bạn muốn hiển thị trạng thái online của bạn bè, chúng ta sẽ có module ChatAPI làm việc này và code bằng class sẽ như sau:

```js
class TrangThaiBanBe extends React.Component {
constructor(props) {
super(props);
this.state = { isOnline: null };
this.handleThayDoiTrangThai = this.handleThayDoiTrangThai.bind(this);
}
componentDidMount() {
ChatAPI.subscribeToTrangThaiBanBe(
this.props.friend.id,
this.handleThayDoiTrangThai
);
}
componentWillUnmount() {
ChatAPI.unsubscribeFromTrangThaiBanBe(
this.props.friend.id,
this.handleThayDoiTrangThai
);
}
handleThayDoiTrangThai(status) {
this.setState({
isOnline: status.isOnline
});
}
render() {
if (this.state.isOnline === null) {
return ’Đang chạy á...';
}
return this.state.isOnline ? 'Online' : 'Offline';
}
}
```

Trong ví dụ này, chúng ta có thể thấy componentDidMount và componentWillUnmount sẽ cần phải phản chiếu lại với nhau. Đồng nghĩa với việc bạn sẽ cần phải tách logic ra làm 2 nhưng về một mặt khác, cả 2 đều chỉ liên quan đến 1 effect.

## **3. Custom Hook**

Custom hooks là việc các bạn tự tạo ra một hook mới với chức năng riêng biệt của nó. Việc này giúp tách phần code logic ra khỏi UI giúp code tường minh, dễ quản lý hơn, tránh lặp lại code và tái sử dụng.

Ví dụ khi bạn không dùng custom hook:

```js
import { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";

const App = () => {
  const [width, setWidth] = useState < number > window.innerWidth;

  useEffect(() => {
    const handler = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return <>{width >= 1024 && <Sidebar />}</>;
};
```

Và bây giờ nếu bạn muốn dùng window width ở component khác thì phải lặp lại phần code trên. Đây là lúc custom hooks phát huy tác dụng.

##### Xây dựng custom hooks

Cùng tạo tạo ra hook `useWindowSize` để giải quyết vấn đề trên nào.

```js
import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  return windowSize;
};
```

Và đây là thành quả của chúng ta, bạn có thể sử dụng hook `useWindowSize` ở bất kì component nào.

```js
import { useWindowSize } from "hooks";

const App = () => {
  const { width, height } = useWindowSize();

  return <>{width >= 1024 && <Sidebar />}</>;
};
```

Hook tiếp theo mình muốn giới thiệu các bạn đó `useDebounce`. Ví dụ khi bạn gõ tìm kiếm ở ô input thì sẽ hiển thị những gợi ý từ dữ liệu bạn nhập vào.

Ở đây khi bạn dùng onChange cho input, bạn sẽ không muốn phải call api liên tục, người dùng gõ 50 từ sẽ call api 50 lần. Ý tưởng là bạn sẽ `setTimeout` một khoản thời gian ngắn sau khi dười dùng dừng gõ mới call api. Cùng mình thực hiện nào.

```js
import { useState, useEffect } from "react";

export const useDebounce = <T>(
  value: T,
  delay: number,
  cb: (value?: T) => Promise<void>
) => {
  const [debouncedValue, setDebouncedValue] = useState < T > value;

  useEffect(() => {
    const handler = setTimeout(async () => {
      setDebouncedValue(value);
      await cb(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

- Value: là giá trị ô input.
- delay: là thời gian delay việc thực hiện hàm callback(miliseconds).
- cb: là callback ta muốn thực hiện sau khoảng thời gian delay trên.

Vậy là xong, khi cần dùng ta chỉ cần import vào dùng thôi.

```js
import { useDebounce, useState } from 'hooks'
import axios from 'axios'

const App = () => {
  const [suggestionList, setSuggestionList] = useState([])
  const [q, setQ] = useState('')
  useDebounce(q, 400, async value => {
    const response = await axios.get(...)
    setSuggestionList(response.data)
  })

  return (
    <div>
      <input onChange={setQ.bind(this, e.target.value)} type='text' />
      {suggestionList.map(...)}
    </div>
  )
}

```
