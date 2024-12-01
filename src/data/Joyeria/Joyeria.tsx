import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogJoyeria } from "../catalog";





const heroJoyeriaPage = {

    imageUrl: 'https://brandemia.org/contenido/subidas/2024/02/monogram-lv-de-louis-vuitton-scaled.jpg',
    imageText: 'La mejor joyeria del mercado',
    headline: 'The best of the best for the best',
    button: {
        href: '/',
        
       
    }
    

};

export const JoyeriaPage = () => {
    return <>
        <Hero {...heroJoyeriaPage}/>
        <Catalog productList={catalogJoyeria}/>
    </>
    
}