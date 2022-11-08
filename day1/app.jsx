function Header() {
  return <h1 className="header">Our Reviews</h1>;
}

function Avatar({ user: { img, name } }) {
  return (
    <div className="avatar-box">
      <img className="user-avatar" src={img} alt={name} />
    </div>
  );
}

function Info({ user: { name, job } }) {
  return (
    <div className="info-box">
      <h2 className="user-name">{name}</h2>
      <h3 className="user-job"> {job}</h3>
    </div>
  );
}

function Author({ children }) {
  return <div className="author">{children}</div>;
}

function Content({ user: { content } }) {
  return <p className="content">{content}</p>;
}

function Review({ children }) {
  return <div className="review">{children}</div>;
}

function Controls() {
  return (
    <div className="controls">
      <div className="controls-prev">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="controls-next">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

function ReviewCard({ children }) {
  return <div className="review-card">{children}</div>;
}

function App() {
  const user = {
    name: "Susan Smith",
    job: "Web developer",
    img: "https://genk.mediacdn.vn/2019/7/8/1-15625474669018688730.jpg",
    content:
      "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.",
  };

  return (
    <div className="wrapper">
      <Header />
      <ReviewCard>
        <Review>
          <Author>
            <Avatar user={user} />
            <Info user={user} />
          </Author>
          <Content user={user} />
        </Review>
        <Controls />
      </ReviewCard>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
