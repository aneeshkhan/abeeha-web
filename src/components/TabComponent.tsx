import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import {useState, useEffect} from "react"
import {tabPropsType} from '../utils/types'
import { useLocation } from "react-router-dom";

const TabComponent = ()=>{
const [activeTab, setActiveTab] = useState(0);
const [data, setData] = useState(tabPropsType);

const location = useLocation();
useEffect( ()=>{
if(location.pathname.toLowerCase() === '/setting'){
  setActiveTab(2)
}
},[])

  
const tabs = [
  { name: "Profile", component: Profile },
  { name: "Interest", component: Interest },
  { name: "Setting", component: Setting },
];
  const ActiveTabComponent = tabs[activeTab].component;

     return (
    <div className="App">
        
      <div className="tabHeader">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`btn ${index == activeTab ? "active" : ""}`}
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="container">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div className="nextPrev">
        {activeTab > 0 && (
          <button className="btn"
            onClick={() => {
              setActiveTab(activeTab - 1);
            }}
          >
            prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="btn"
            onClick={() => {
              setActiveTab(activeTab + 1);
            }}
          >
            next
          </button>
        )}
        {activeTab == tabs.length - 1 && <button className="btn" >Submit</button>}
      </div>
    </div> 
  );
}

export default TabComponent