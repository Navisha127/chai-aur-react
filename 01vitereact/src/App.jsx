import Chai from "./Chai"


function App() {
  const username = "chai aur code"

  return (
    <>
    <Chai/>
    <h1>chai aur react {username}</h1> 
     <p>test para</p>
   </>
  )
}

export default App
//username is an evaluated expression here which means that the final expression comes here