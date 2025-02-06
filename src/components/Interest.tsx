const Interest = ({ data, setData }) => {
  const { interests } = data;
  const handleChangeData = (e) => {
    setData((preState) => ({
      ...preState,
      interests: e.target.checked
        ? [...preState.interests, e.target.name]
        : preState.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div className="profile">
      <div>
        <input
          type="checkbox"
          name="Javascript"
          checked={interests.includes("Javascript")}
          onChange={handleChangeData}
        />
        <label> Javascript </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={handleChangeData}
        />
        <label> Music </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="cricket"
          checked={interests.includes("cricket")}
          onChange={handleChangeData}
        />
        <label> Cricket </label>
      </div>
      <div>
        <input
          type="checkbox"
          name="node"
          checked={interests.includes("node")}
          onChange={handleChangeData}
        />
        <label> Node JS </label>
      </div>
    </div>
  );
}
export default Interest
