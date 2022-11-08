## **1. Các lỗi thường gặp khi sử dụng state/hooks**

- Sử dụng hooks với class component.
- Khai báo hooks nằm ngoài phạm vi Functions component.
- Không khai báo hooks ở cấp cao nhất của hàm (thân hàm).
- Không sử dụng callback làm giá trị khởi tạo cho useState khi giá trị khởi tạo là một logic xử lý phức tạp.
- initial state chỉ sử dụng cho lần đầu tiên, những lần sau nó không dùng nữa
- useState sử dụng REPLANCING chứ không phải MERGING
- Khởi tạo sai useState

## **2. One-way data binding và Two-way data binding**

Trước tiên chúng ta cùng tìm hiểu về thuật ngữ <mark>data binding</mark>. <mark>data binding</mark> là quá trình thiết lập kết nối giữa giao diện ứng dụng (application UI) và các chức năng ở tầng logic của ứng dụng (business logic). Sự kết nối này đảm bảo rằng mỗi thay đổi bên phía giao diện (application UI) sẽ tạo ra thay đổi đối với các dữ liệu, dựa theo logic của hệ thống (business logic). Một ví dụ đơn giản là nếu chúng ta thay đổi nội dung nhập vào cho một khung tìm kiếm, các kết quả trả về sẽ được thay đổi dựa theo giá trị mà chúng ta nhập vào.

- One way data binding: là dữ liệu chỉ được truyền 1 chiều. Có thể từ view sang component hoặc ngược lại từ component sang view.
- Two way data binding: Binding 2 chiều có nghĩa là chúng ta thay đổi dữ liệu từ component qua view và ngược lại từ view chúng ta thay đổi dữ liệu.

Trong React luồng dữ liệu là <mark>one-way data binding</mark>. Trong liên kết dữ liệu một chiều, một trong các điều kiện sau có thể được tuân theo:

- Component to View: Mọi thay đổi trong dữ liệu Component sẽ được phản ánh trong View
- View to Component: Mọi thay đổi trong View sẽ được phản ánh trong dữ liệu của Component.

## **3. Chia sẻ trạng thái chung giữa nhiều Component**

- State trong react mang tính chất là "local" hay "encapsulated" (đóng gói) bởi state không được truy cập bởi bất kể component khác ngoại trừ component sở hữu và thiết lập nó.
- Một component chỉ có thể truyền state của nó tới các component con như là các props. Các component con không quan tâm props nhận được là props hay state của cha. Các component con chỉ việc sử dụng chúng.
- Dòng chảy dữ liệu như vậy gọi là "top-down data flow". Bất kì state nào cũng được sở hữu bởi một component cụ thể. Và bất kì dữ liệu nào liên quan đến state đó chỉ có thể ảnh hưởng đến các component "bên dưới" chúng. Hiểu đơn giản như là dòng chảy thác nước.
- Vấn đề đặt ra là làm thế nào để có thể chia sẻ state được được quản lý bởi một component để component anh em của nó có thể dùng được? Câu trả lời là ta phải dùng Lifting-state-up - Chuyển local state từ component con sang cho component cha chung gần nhất.

## **4. Controlled Form vs Uncontrolled Form**

Trong hầu hết các trường hợp chúng ta thường cài đặt các component trong react dưới dạng controlled components. Có thể hiểu controlled components là các dữ liệu trong form đều được React quản lí thường dưới dạng state hoặc store. Còn uncontrolled components thì khác, dữ liệu được lấy trực tiếp từ DOM. Để hiểu chi tiết ta sẽ đi sâu hơn vào 2 lại component này.

### **4.1. Controlled component**

Đầu tiên tôi sẽ lấy một ví dụ về controlled component. Có thể bạn thấy ví dụ này sẽ rất quen thuộc bởi vì hầu hết đa số các trường hợp ta đều dùng controlled component

```js
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </div>
    );
  }
}
```

Trong ví dụ trên bạn có thể thấy dữ liệu của form được lữu trữ/quản lí bởi state của component. Mỗi khi bạn thay đổi input thì handleNameChange được gọi và nó sẽ cập nhật giá trị mới cho state. Sau khi state thay đổi thì nó sẽ render lại form với giá trị tương ứng với giá trị của state.

### **4.2. Uncontrolled component**

Tiếp theo ta sẽ đến với uncontrolled component. Để viết một uncontrolled component khá đơn giản là bạn sẽ ko viết các event bắt sự kiện thay đổi input trong form mà bạn sẽ sử dụng một tham chiếu trực tiếp đến DOM. Dưới đây là một ví dụ đơn giản

```js
class NameForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.input.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={(input) => (this.input = input)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

Trong ví dụ trên, ta đặt một biến tham chiếu là input tham chiếu đến DOM object. Khi cần lấy giá trị ta sẽ truy xuất giá trị thông qua tham chiếu này.

## **5. useEffect vs Life cycle**

### **5.1. Life cycle**

Life cycle của component trong reactjs là quá trình từ khi tạo ra, thay đổi và hủy bỏ component. Gồm 3 giai đoạn:

- Tạo ra (Mounting)
- Thay đổi (Updating)
- Hủy bỏ (UnMounting)

Trước đây chỉ có các class component mới có thể sử dụng được các life cycle của React như:

- componentWillMount
- componentDidMount
- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- componentDidUpdate
- componentWillUnmount

### **5.2. useEffect**

useEffect Hook được dùng mục đích để quản lý vòng đời của một component. Chúng ta sử dụng hook này trong các function component thay thế các lifecycle trong class component (cơ bản là giống nhau).
