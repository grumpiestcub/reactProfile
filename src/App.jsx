import Header from "./components/Header"
import Buttons from "./components/Buttons"
import NewPlayer from "./components/NewPlayer" 
// commenting this out so the localhost displays
import './App.css'

// should I be seperating this out even further? For example multiple components instead of just Header? 

function App() {
  return (
    <div className="App">
      <Header />
      <NewPlayer />
      <Buttons />
    </div>
  )
}

export default App
