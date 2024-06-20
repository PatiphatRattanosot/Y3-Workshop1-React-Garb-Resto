import './App.css'

import Search from './components/Search';
import Header from './components/Header';
import Restaurant from './components/Restaurant';


function App() {
  return (
    <>
     <div className="container flex flex-col items-center mx-auto space-y-6 ">
      <Header />
      <Search />
      <Restaurant />
     </div>
    </>
  )
}

export default App
