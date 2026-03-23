import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{padding:"20px",fontFamily:"sans-serif"}}>
      <h1>阿里山林業鐵路模擬計畫</h1>
      <p>歡迎加入我們的模擬鐵道世界！</p>

      <h2>列車開發進度</h2>
      <ul>
        <li>DL49：已完工</li>
        <li>阿里山號客車：建造中</li>
        <li>貨物列車：建造中</li>
      </ul>

      <h2>地圖進度</h2>
      <p>車庫園區：35%</p>

      <a href="https://discord.gg/kQ3t7YneGs" target="_blank">
        加入Discord
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
