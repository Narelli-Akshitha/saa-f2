import "./App.css"
import "./aidsa.css"
import B from "./components/b.js"
const App=()=>{
  const hand=()=>{
    alert("clicked")
  }
  const hud=()=>{
    console.log("hi")
  }
  const h=(event)=>{
    console.log(event.target.value)

  }
  return(
    <div className="i">
      <h1 className="c">AIDSA</h1>
      <button onClick={hand}>Click</button>
      <B/>
      <B/>
      <B/>
      <button onClick={hud}>console print</button>
      <input onChange={h}/>
    </div>
  )
}
export default App