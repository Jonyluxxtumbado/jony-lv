import { Catalog } from "../../components/Catalog/Catalog";
import { Hero } from "../../components/Hero/Hero";
import { catalogMen } from "../../data/catalog";

const heroMenPage = {
    imageUrl: 'https://assets.turbologo.com/blog/es/2020/01/19132726/louis-vuitton-cover-958x575.png',
    imageText: 'Nueva temporada de modas',
    headline: 'The best of the best for the best',
    button: {
        href: '/',
     
    }
    
};

const MenPage = () => {
    return <>
        <Hero {...heroMenPage}/>
        <Catalog productList={catalogMen}/>
    </>
}

export { MenPage };
