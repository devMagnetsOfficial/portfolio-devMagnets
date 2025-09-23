import RightMenu from "./component/RightMenu"
import Home from "./pages/Home/Home"
import PublicLayout from "./layout/PublicLayout"
import Contact from "./pages/contact/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App() {
  return (<>

    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<RightMenu />} />
          <Route path='history' element={<RightMenu />} />
          <Route path='/blog' element={<RightMenu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<RightMenu />} />
          <Route path='/mentorship' element={<RightMenu />} />
          <Route path='*' element={<><div>page is under construction</div></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>)

}