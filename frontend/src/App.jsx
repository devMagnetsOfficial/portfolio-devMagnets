import LeftMenu from "./component/LeftMenu"
import RightMenu from "./component/RightMenu"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RightMenu />} />
        <Route path='/portfolio' element={<RightMenu />} />
        <Route path='history' element={<RightMenu />} />
        <Route path='/blog' element={<RightMenu />} />
        <Route path='/contact' element={<RightMenu />} />
        <Route path='/donate' element={<RightMenu />} />
        <Route path='/mentorship' element={<RightMenu />} />

        <Route path='*' element={<><div>page is under construction</div></>} />
      </Routes>
    </BrowserRouter>

  </>)

}