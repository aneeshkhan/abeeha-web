const Profile = ({ data, setData }) => {
  const { name, email, age } = data;
  const handleChangeData = (e, item) => {
    setData((preState) => ({
      ...preState,
      [item]: e.target.value,
    }));
  };
  return (
    <div className="profile">
      <div>
        <label> Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleChangeData(e, "name")}
        />
      </div>
      <div>
        <label> Email:</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => handleChangeData(e, "email")}
        />
      </div>
      <div>
        <label> Age:</label>
        <input
          type="Number"
          name="age"
          value={age}
          onChange={(e) => handleChangeData(e, "age")}
        />
      </div>
    </div>
  );
}
export default Profile
