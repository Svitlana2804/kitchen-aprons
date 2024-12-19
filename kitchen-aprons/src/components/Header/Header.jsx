import {Logo,} from "./Header.style.jsx"
import LogoImg from "../../assets/logo.jpg"
import NavMenu from "./NavMenu/NavMenu.jsx"
export default function Header(){
   return(
    <>
    <Logo  src={LogoImg} alt="logo"/>
    
    <NavMenu/>
    </>
   ) 
}