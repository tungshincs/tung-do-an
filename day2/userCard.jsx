const UserCard = ({ user }) => {
  return (
    <div className="card-item card col-3 m-10 p-0 pt-2 ">
      <img
        src={user.avatar}
        alt="avatar"
        className="card-img-top rounded-circle w-50 align-self-center "
      />
      <div className="card-body text-center">
        <h5 className="name">{user.fullname}</h5>
        <p className="job">{user.job}</p>
      </div>
    </div>
  );
};

const userType = PropTypes.exact({
  id: PropTypes.string,
  fullname: PropTypes.string,
  job: PropTypes.string,
  avatar: PropTypes.string,
});
UserCard.propTypes = {
  user: userType,
};
