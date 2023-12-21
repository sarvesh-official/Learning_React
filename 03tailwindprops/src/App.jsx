
import './App.css'
import Card from './components/Card'

function App() {
 

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <br />
      <Card name = "Sarvesh" city = "Paghwara" job="Software Engineer" img='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D'/>
      <br />
      <Card/>
      <br />
      <Card/>
      
    </>
  )
}

export default App
