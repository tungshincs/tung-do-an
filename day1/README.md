# **Component, so sánh giữa Functional Components và Class Components**

## **1. Component là gì**

Một component là một block code độc lập, có thể tái sử dụng, nó chia UI thành nhiều phần nhỏ. Mặt khác, có thể nghĩ đơn giản các components như một khối các blocks LEGO. Tương tự, cấu trúc LEGO được tạo từ nhiều blocks LEGO nhỏ, như tạo một web page hoặc UI từ nhiều block code (components).

## **2. Functional Components**

1 functional component là một hàm Javascript (hoặc ES6) trả về 1 phần tử/1 element React. Theo official docs của React, hàm dưới đây là một component React hợp lệ:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

QUAN TRỌNG: Functional components cũng được nói với một cái tên là stateless components bởi vì chúng ta không thể làm nhiều thứ phức tạp như quản lý React State (data) hoặc phương thức life-cycle trong functional components.

Tuy nhiên, React giới thiệu React Hooks trong versions 16.8, giờ nó cho phép chúng ta sử dụng state và những features khác trong functional components.

## **3. Class Components**

Các Class components là những class ES6. Chúng phức tạp hơn functional components ở chỗ nó còn có: phương thức khởi tạo, life-cycle, hàm render() và quản lý state (data). Ví dụ dưới đây là class component:

```js
import React, { Component } from "react";

class ExampleComponent extends Component {
  render() {
    return <div>This is an example component.</div>;
  }
}

export default ExampleComponent;
```

Bạn có thể thấy, class ExampleComponent kế thừa Component, vì vậy React hiểu class này là một component, và nó renders (returns) một React Element.

## **4. So sánh Functional Components và Class Components**

| Functional Components                                                                                                 | Class Components                                                         |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Chỉ đơn thuần là một hàm Javascript có thể nhận các props như là các đối số và trả về một phần tử React element (JSX) | Là những class ES6 và bắt buộc phải kế thừa (extend) từ React Component. |
| Không cần sử dụng hàm render() để trả về một React element                                                            | Phải sử dụng hàm render() để trả về một React element                    |
| Không sử dụng Constructors. Để quản lý các state có thể sử dụng các hooks (từ sau phiên bản 16.8)                     | Phải sử dụng Constructors nếu muốn quản lý các state                     |
