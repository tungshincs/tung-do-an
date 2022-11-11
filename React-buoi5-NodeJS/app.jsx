// const myName = "Tùng Nguyễn";
// const is = true;

// function createApp() {
//   const now = new Date();
//   return (
//     <div className="wrapper" id={myName}>
//       <h1 className="heading" onClick={() => console.log("Clicked")}>
//         Hello {myName}
//       </h1>

//       <p>Bây giờ là {now.toLocaleTimeString()}</p>

//       <img
//         src="https://image-us.24h.com.vn/upload/3-2022/images/2022-07-11/21-1657535366-24-width650height650.jpg"
//         alt={myName}
//       />

//       {is && <div>Ok nhá</div>}

//       <form action="">
//         <div className="form-field">
//           <label htmlFor="username">Username</label>
//           <input type="text" />
//           <button>Sub đi anh</button>
//         </div>
//       </form>

//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.querySelector("#app"));

// setInterval(() => {
//   root.render(createApp());
// }, 1000);

// function Hello({ name = "Tùng", children }) {
//   // 1 trong 2 mô hình dữ liệu của React
//   return (
//     <h1>
//       Hello {name} {children}
//     </h1>
//   );
// }

// Hello.propTypes = {
//   name: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

//Hoặc
// function Hello ({name = "Tùng"})

function Avatar({ src, alt }) {
  return <img src={src} alt={alt} />;
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  src: "",
  alt: "",
};

function Time() {
  const now = new Date();

  return <p>It's {now.toLocaleTimeString()}</p>;
}

function App() {
  const currentUser = {
    name: "Ba",
    age: 30,
    role: "ADMIN",
  };
  return (
    <div>
      {/* <Hello user={currentUser}>{[<span>AAA</span>, <p>Tùng</p>]}</Hello>
      =>Đây là children được gọi bằng props */}

      <Avatar></Avatar>

      <Time />
    </div>
  );
}

root.render(<App />);

// Compiler : JSX => JS => Chạy

// props là Read only

// Có một số props đặc biệt

// children

// propstype => xác thực kiểu dữ liệu cho props/gợi ý props truyền vào

// Có thể sử dụng typeScript

// defaultProps => cung cấp các giá trị mặc định cho props trong trường hợp props đó không được truyền vào

// props.children

// Conditional Rendering
// Render multi-component
