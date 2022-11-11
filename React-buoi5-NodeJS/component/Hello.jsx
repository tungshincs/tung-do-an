const Hello = ({ name }) => {
  return (
    <div>
      <h1>
        Hello {name === "Tùng" ? "Tùng Shin" : name + "Ahihi"}
        {name === "Tùng" && <button>Like</button>}
      </h1>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

Hello.defaultProps = {
  name: "User",
};

// ? thường được dùng để trả về 1 trong 2 (đoạn JSX / Giá trị) khác nhau, thường sử dụng với thuộc tính, hoặc là 2 đoạn JSX kkhác nhau

// && thường sử dụng để hiển thị 1 đoạn JSX tuỳ thuộc vào điều kiện

// có thể dùng if else
