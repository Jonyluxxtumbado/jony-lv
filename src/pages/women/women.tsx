import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import {  catalogWomen } from "../../data/catalog";



const heroWomenPage = {

    imageUrl: 'https://img.freepik.com/fotos-premium/logotipo-louis-vuitton-estilo-elegante-papel-tapiz-logotipo-chanel-paleta-colores-rosado-dorado-metalico-ani_1305056-21322.jpg',
    imageText: 'Todo en accesorio de mujer',
    headline: 'The best of the best for the best',
    button: {
        href: '/',
      
    }
    
};

export const WomenPage = () => {
    return <>
        <Hero {...heroWomenPage}/>
        <Catalog productList={catalogWomen}/>
    </>
    
}

