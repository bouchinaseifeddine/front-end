import dayjs from "dayjs"
import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/routes"

function App() {
  const htmlElement = document.querySelector('html');
  const mode = localStorage.getItem('mode')
  if(mode){
    htmlElement.classList.add(mode);
  }
  htmlElement.classList.add("light");
  
  return (
    <>

      <RouterProvider router={routes} />
    </>
  )
}

export default App
