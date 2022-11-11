### Phát triển Ứng dụng React trên môi trường Node.js

#### Ứng dụng react chạy trên môi trường trình duyệt

1. Tải index.html
2. Tải các thư viện React, ReactDOM, Babel, PropTypes, app.jsx
3. Babel phiên dịch mã JSX(Chạy trên trình duyệt)
4. Chạy mã JS đã được biên dịch
5. Hiển thị được ứng dụng

### Phát triển React trên môi trường Node.js

1. Các thư viện React, ReactDOM, Babel, ... được cài đặt local
2. Biên dịch mã ở phía server(tận dụng sức mạnh phần cứng)
3. Gửi mã đã được biên dịch đến trình duyệt (mã đã được nén, loại bỏ thư viện không cần thiết).
4. Chạy mã
5. Hiển thị ứng dụng

### Node.js

Node.js là một ứng dụng C++, tích hợp JavaScript engine V8 của Chrome cung cấp môi trường thực thi mã JavaSCript, cho phép chạy mã JavaScript bên ngoài trình duyệt.

Có thể dùng chung các thư viện JavaScript

### NPM

Tất cả mọi thứ trong Node.js là các module, được đăng ký và phát hành trên NPM Registry

NPM - Node Package Manager - công cụ quản lý packages của Node (Đi kèm với cài đặt Node.js), giúp quản lý việc tìm kiếm/cài đặt/ gỡ bỏ/ nâng cấp, ...các packages/libraries JavaScript sử dụng trong project

Ngoài NPM thì còn các công cụ quản lý Package khac như Yarn, Pnpm, ...

### Buildtool - Toolchain

Đây là một chuỗi các công cụ được tích hợp sẵn và cấu hình đầy đủ cho phép phát triển project

Buildtool phổ biến cho ứng dụng: Create React App(Chính chủ facebook - React), Vite, Parcel, ...=> Package của Node.js

### Tạo project React với Vite

1. CD ra thư mục/ổ đĩa muốn lưu trữ project
2. Mở CMD/Terminal: npm create vite@latest
3. Các thông tin:

- Project name: Tên
- Framework: Dự án xây dụng trên framework nào(chọn React)
- Variant: JavaScript

4. Cấu trúc thư mục:

- /node_modules: Chứa các packages được cài đặt trong project
- /public: Chứa các file tĩnh như hình ảnh
- /src: mã nguồn trang web

### Package.json

Mỗi một project thì đều có 1 file package.json là tệp tin metadata kê khai các thông tin về project

- dependencies là các phụ thuộc mà project cần có để chạy được
- devDependencies là các package (chỉ) cần trong quá trình phát triển.

Khi cài đặt thêm các package thì đều được liệt kê vào tệp package.json

### Các câu lệnh cơ bản

- `npm install`: cài đặt các dependencies được liệt kê trong package.json
- `npm install package-name`: cài đặt thêm một package
- `npm uninstall package-name`: gỡ cài đặt package
- `npm run script`: chạy các câu lệnh được liệt kê trong mục scripts của file package.json

### Cú pháp import/export | module

- Mỗi một file được coi là một module riêng, sử dụng cú pháp import/ export để liên kết các file (bao gồm tất cả các file jsx,css,image,json,...) ngoại trừ file hình ảnh trong thư mục /public (sử dụng đường dẫn là link đến file đó. VD <img src="abc.png /> Không cần tiền tố là /public trước đường dẫn)

```js
export default Name;
import Name from "source";

export function Review() {}
import { Review } from "source";

function A() {}
function B() {}
const y = 6;

export { A, B, y };
import { A, B, y } from "source";

import "file.css";
import url from "image.jpeg";
```
### Tổ chức thư mục

- /src/components: chứa tất cả những component con(thành phần nhỏ tạo nên trang web)
- /src/pages: chứa các trang lắp ghép từ các components
- /src/utils: chứa các hàm tiện ích mà tái sử dụng ở nhiều nơi
- /src/assets: chứa các tài nguyên tĩnh để import vào component
- /src/services: chưa các hàm gọi API
- file ".env" : Khai báo các biến môi trường chung trong project


### CSS module

Coi mỗi file css là một module riêng cho một component, các quy tắc css trong 1 module là riêng biệt, không gây ra xung đột với bất kỳ component nào.
