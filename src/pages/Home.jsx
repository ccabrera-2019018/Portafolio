import { Navbar } from "../components/navbar/Navbar.jsx"
import { Converter } from "../components/converter/Converter.jsx"
import { AditionalInfo } from "../components/aditionalInfo/AditionalInfo.jsx"

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <hr />
      <Converter></Converter>
      <hr />
      <AditionalInfo></AditionalInfo>
      <hr />
      <div>esta es la pagina principal</div>
    </>
  )
}