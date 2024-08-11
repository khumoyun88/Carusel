import './App.css'
import FooterSection from './components/FooterSection';
import HeaderSection from './components/HeaderSection';

import Karusel from './components/Karusel';
import LineChart from './components/LineChart/Linechart';

function App() {
  return (
    <>
      <HeaderSection/>
      <Karusel/>
      <div className="h-[400px]">
        <LineChart/>
      </div>
      <FooterSection/>

    </>
  )
}

export default App
