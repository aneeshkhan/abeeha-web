const Setting = ({ data, setData }) => {
  const { theme } = data;
  const handleChangeData = (e) => {
    setData((preState) => ({
      ...preState,
      theme: e.target.name,
    }));
  };
  console.log("theme: ", theme);
  return (
    <div className="profile">
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleChangeData}
        />
        <label> Dark </label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleChangeData}
        />
        <label> Light </label>
      </div>
    </div>
  );
}
export default Setting
