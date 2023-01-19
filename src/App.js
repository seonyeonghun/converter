import "./App.css";
import { useState } from "react"; 
function App() {
  const [amount, setAmount] = useState("0"); // state변수, state변경함수로 초기값을 0으로 설정
  const [disable, setDisable] = useState(true); // 가능, 불가능을 나타내는 state변수
  const onChange = (e) => setAmount(e.target.value); // 화살표 함수(Arrow Function)
  const resetInput = () => setAmount("0"); // amount 값을 0으로 초기화하는 화살표 함수
  const invertInput = () => setDisable(false);
  const handleSubmit = (e) => e.preventDefault(); // 이벤트 버블링을 금지! (refresh 못하게)
  return (
    <div className='App'>
      <div className='site-header'>
        <h1>
          단위 환산 앱 <span>Night</span>
        </h1>
      </div>
      <div className='unit-converter'>
        <div className='ad'>
        광고 이미지 [Sponsor]
        </div>
        <div className='converter'>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>시간단위 환산기 [Minutes to Hours Converter]</legend>
              <ul>
                <li>
                  <input type="text" value={disable ? amount : amount / 60} onChange={onChange} disabled={!disable} />
                  <label>분</label>
                </li>
                <li>
                  <input type="text" value={!disable ? amount :  amount / 60} disabled={disable} /> {/* 분->시간 환산법 */}
                  <label>시간</label>
                </li>
                <li>
                  <button onClick={resetInput}>초기화</button>
                  <button onClick={invertInput}>반전</button>
                </li>
              </ul>
            </fieldset>
          </form>
        </div>
      </div>
      <div className="site-footer">
        <hr />
        &copy; seon
      </div>
    </div>
  );
}

export default App;
