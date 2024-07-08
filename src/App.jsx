import Header from "./components/Header"
import Buttons from "./components/Buttons"
// import Player from "./components/Player" why does importing something without using it break the localhost? Feels like it should just ignore it?
import './App.css'

// should I be seperating this out even further? For example multiple components instead of just Header? 

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      {/* <Player /> this isn't showing anything? maybe because no CSS? Even commented out I now just have a white screen for the localhost */}
    </div>
  )
}

export default App
