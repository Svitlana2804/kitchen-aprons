import {LinkMenu, NavMenuList} from './NavMenu.style'
export default function NavMenu(){
    return(
        <NavMenuList >
      <li><LinkMenu href="*">Головна</LinkMenu></li> 
      <li><LinkMenu href="#advantages">Переваги</LinkMenu></li>
      <li><LinkMenu href="#catalog">Каталог</LinkMenu></li>
      <li><LinkMenu href="#reviews">Відгуки</LinkMenu></li>
      <li><LinkMenu href="#contacts">Контакти</LinkMenu></li>
        </NavMenuList>
    )
}