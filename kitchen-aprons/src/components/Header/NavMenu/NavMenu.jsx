import Advantages from "./Advantages/Advantages.jsx"
import ButtonOrder from "./ButtonOrder/ButtonOrder.jsx"
import Catalog from "./Catalog/Catalog.jsx"
import Contacts from "./Contacts/Contacts.jsx"
import {} from "./NavMenu.style.jsx"
import Reviews from "./Reviews/Reviews.jsx"

export default function NavMenu(){
    return(
        <>
        <>
        {/* <Home/> */}
        <Advantages/>
        <Catalog/>
        <Reviews/>
        <Contacts/>
        </>
        <ButtonOrder/>
        </>
    )
}