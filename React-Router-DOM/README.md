## React Router DOM

Trong thực tế trang web  thì bao gồm nhiều trang khác nhau, mỗi trang ánh xạ 1 URL

Hiện tại phiên bản mới nhất là v6.4(meta 6.4)

### Các component chính

- BrowserRouter - Context cho các component khác
- Routes - container chứa tất cẩ các màn hình ứng dụng
- Route - khai báo 1 đường dẫn và component tương ứng
- Link/Navlink - điều hướng URL tới các màn hình khác nhau
- Outlet - Giống màn hình hiển thị, khi URL khớp với Route nào thì Element tương ứng được hiển thị trong Outlet

Từ 6.4 để sử dụng được các tính năng mới thì sử dụng 2 API mới là createBrowserRouter và createRoutesFromElements và componentRouterProvider

Sử dụng tính  năng preload Data sử dụng hàm loader và useLoaderData

Tham số hoá đường dẫn: Khai báo đường dẫn mẫu, nó có thể khớp với bất kỳ đường dẫn nào. `/parent/:id`

BTVN chuyển đồ án web tĩnh sang react ==> 
Xây dựng layout, khai báo routes và các page đơn giản ban đầu

TÌm hiểu về 1 số thư viện UI, thư viện component trong React



