import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogKids } from "../../data/catalog";



const heroKidsPage = {

    imageUrl: 'https://wallpapers.com/images/featured/fondo-de-pantalla-de-louis-vuitton-1nzzfgotmmpa9frd.jpg',
    imageText: 'Todo en accesorios para niños',
    headline: 'The best of the best for the best',
    button: {
        href: '/',
       
    }
    
};

export const KidsPage = () => {
    return <>
        <Hero {...heroKidsPage}/>
        <Catalog productList={catalogKids}/>
    </>
    
}

