# ** Key, State, Hook và Handling Events trong ReactJS**

## **1. Key là gì?**

Key là một thuộc tính giúp React xác định item nào được thêm mới, thay đổi hay gỡ bỏ khi chúng ta render nhiều items cùng 1 lúc. Giá trị key nên là duy nhất để phân biệt 1 item với các item khác, thường chúng ta nên lấy id của data truyền vào mỗi item.

```js
this.state.users.map((user) => <Row user={user} key={user.id} />);
```

Cách tốt nhất để chọn một key là sử dụng một chuỗi xác định duy nhất cho mỗi một mục trong danh sách. Thông thường, bạn sẽ sử dụng ID từ dữ liệu của mình làm key.

Khi bạn không có ID cho các mục được hiển thị, bạn có thể sử dụng chỉ mục (index) làm key như một phương sách cuối cùng:

```js
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

## **2. State**

- State giống như một kho lưu trữ dữ liệu cho các component trong ReactJS. Nó chủ yếu được sử dụng để cập nhật component khi người dùng thực hiện một số hành động như nhấp vào nút, nhập một số văn bản, nhấn một số phím, v.v.
- React.Component là lớp cơ sở cho tất cả các lớp component cơ bản khác trong ReactJS. Bất cứ khi nào một lớp kế thừa lớp React.Component, hàm tạo (Constructor) của nó sẽ tự động gán thuộc tính state cho lớp với giá trị ban đầu được gán bằng null. Chúng ta có thể thay đổi nó bằng cách ghi đè hàm tạo (Constructor).
- Trong nhiều trường hợp chúng ta cần cập nhật state. Để làm điều đó, chúng ta phải sử dụng phương thức setState và chúng ta không thể gán trực tiếp như thế này this.state = {'key': 'value'}.
- Hãy cố gắng thử sử dụng khái niệm state trong component của chúng ta bằng cách thay đổi một ít mã code trong component ở trên mà chúng ta đã tạo.

Ví dụ về State:

```js
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show_technologies: false };
    this.see_our_technologies = this.see_our_technologies.bind(this);
  }
  see_our_technologies() {
    this.setState({ show_technologies: true });
  }
  render() {
    console.log(this.state);
    const style = {
      padding: "10px",
      border: "1px solid green",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%",
      color: "#4db1e8",
      textAlign: "center",
      fontFamily: "sans-serif",
    };
    const tech = {
      background: "#4db1e8",
      color: "#fff",
      padding: "5px",
      marginRight: "5px",
    };
    return (
      <div style={style}>
        <img src={this.props.img_url} height="250px" />
        <h1>{this.props.title}</h1>
        {this.state.show_technologies ? (
          <p>
            <span style={tech}>Python</span>
            <span style={tech}>Django</span>
            <span style={tech}>Django REST</span>
            <span style={tech}>ReactJS</span>
            <span style={tech}>Angular</span>
            <span style={tech}> and More</span>
          </p>
        ) : (
          <button onClick={this.see_our_technologies}>
            Click to see Our Technologies
          </button>
        )}
      </div>
    );
  }
}
module.exports = Profile;
```

- Sau khi cập nhật component cùng với đoạn mã trên thì Ui người dùng cập nhật thêm một nút button. Khi click vào button chúng ta sẽ thấy một nội dung được hiển thị.
- Trong đoạn mã trên chúng ta đã ghi đè hàm tạo (Constructor) và thiết lập giá trị state ban đầu: show_technologiesbằng false. Trong khi rendering ra component React sẽ kiểm tra giá trị show_technologies và nếu nó thiết lập giá trị là false thì React chỉ render ra nút button. Chúng ta sẽ liên kết sự kiện khi Click vào nút button. Bất cứ khi nào người dùng Click vào nút button state sẽ thay đổi thành: {"show_technologies": true} bằng cách sử dụng phương thức setState.
- Bây giờ, state đã được thay đổi, react sẽ render lại component với những thay đổi đó. Bất cứ khi nào state được cập nhật trong component, tất cả các component con của nó cũng sẽ render/show lại với những thay đổi mới nhất.
- Đây là cách mà React xử lý state.

## **3. Hook**

### **3.1. React hook là gì?**

- Hooks là một bổ sung mới trong React 16.8.

- Hooks là những hàm cho phép bạn “kết nối” React state và lifecycle vào các components sử dụng hàm.

- Với Hooks bạn có thể sử dụng state và lifecycles mà không cần dùng ES6 Class.

Ví dụ:

### **3.2. Tại sao chúng ta cần React Hooks?**

Sau một thời gian làm việc với React thì có lẽ chúng ta sẽ bắt gặp một trong số các vấn đề sau:

- "Wrapper hell” các component được lồng (nested) vào nhau nhiều tạo ra một DOM tree phức tạp.

- Component quá lớn.

- Sự rắc rối của Lifecycles trong class

React Hooks được sinh ra với mong muốn giải quyết những vấn đề này.

### **3.3. Lợi ích của hook**

- Khiến các component trở nên gọn nhẹ hơn

- Giảm đáng kể số lượng code, dễ tiếp cận

- Cho phép chúng ta sử dụng state ngay trong function component

### **3.4. Lưu ý khi dùng hook**

- Trong cùng một component, bạn có thể sử dụng bao nhiêu useState và useEffect tùy ý nhưng các hook này phải gọi ở trên cùng của function, không được nằm trong vòng lặp, khu vực điều kiện, hay các function con

- Nó chỉ sử dụng trong functional component

- Khi sử dụng useEffect để lấy dữ liệu, cần kiểm tra dữ liệu đã tồn tại hay chưa. Nếu không thì hàm sẽ gửi request liên tục

### **3.5. Sử dụng Hook**

Ví dụ:

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // Ta có useState là một Hook. Hàm useState nhận tham số initial state
  // sau đó sẽ trả về một mảng 2 phần tử:
  // phần tử đầu tiên là state hiện tại
  // thứ 2 là hàm để update state - (hàm thứ hai này giống với setState khi chúng sử dụng dạng Class)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

useEffect - hook này có tác dụng tương tự như componentDidMount, componentDidUpdate, và componentWillUnmount trong React Class nhưng điều thú vị nó chỉ có một hàm duy nhất

```js
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [title]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

Effect này được khai báo ngay bên trong component và có quyền truy cập được các state và props. Mặc định, effect sẽ được gọi sau mỗi lần render DOM bao gồm cả lần đầu tiên.

useEffect nhận 2 parameter, đầu tiên là một function nơi chúng ta xử lý các side effect, thứ hai là một array [title]. Chúng ta có thể hiểu array này là nơi chứa những variable(biến) (không nhất thiết là state), mà khi những variable này thay đổi thì hook useEffect này sẽ được kích hoạt.

Khi chúng ta không bỏ array này vào hook useEffect thì nó sẽ chạy cùng với mọi lần component chạy function render

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

Còn nếu như chúng ta chỉ muốn nó chạy 1 lần sau lần render đầu tiên thì chúng ta chỉ cần truyền vào tham số thứ hai của useEffect là một mảng rỗng:

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, []);
```

## **4. Handling Events**

Việc xử lý các sự kiện với các phần tử React rất giống với việc xử lý các sự kiện trên các phần tử DOM.

Có một số khác biệt về cú pháp:

- Các sự kiện React được đặt tên bằng cách sử dụng camelCase, thay vì chữ thường.

- Với JSX, bạn chuyển một hàm làm trình xử lý sự kiện, thay vì một chuỗi.

Ví dụ với HTML:

```html
<button onclick="activateLasers()">Activate Lasers</button>
```

Còn với React:

```js
<button onClick={activateLasers}>Activate Lasers</button>
```

Một điểm khác biệt nữa là bạn không thể trả về false để ngăn hành vi mặc định trong React. Bạn phải gọi PreventDefault một cách rõ ràng.

Ví dụ: với HTML thuần túy, để ngăn hành vi gửi biểu mẫu mặc định, bạn có thể viết:

```js
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>
```

Trong React, thay vào đó có thể là:

```js
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}
```

Khi sử dụng React, bạn thường không cần gọi addEventListener để thêm trình nghe vào phần tử DOM sau khi nó được tạo. Thay vào đó, chỉ cung cấp trình lắng nghe khi phần tử được hiển thị ban đầu.

Ví dụ về truyền đối số cho người xử lý sự kiện:

```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
```
