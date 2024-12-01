import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Product.styles.scss';
import EmblaCarousel from '../../components/EmblaCarousel/EmblaCarousel';
import { catalogJoyeria, catalogKids, catalogMen, catalogWomen } from '../../data/catalog';
import { ProductCardProps } from '../../components/ProductCard/ProductCard'; 
import ReactStars from 'react-stars';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Catalog } from '../../components/Catalog/Catalog';
import { ShoppingCartContext } from '../../providers/ShoppingCartContext';
import { setToLocalStorage } from '../../utils/localStorage';
import Button from '../../button/button';
import { FavoritesContext } from '../../providers/favoritesContext';


interface ProductFormProps {
    quantity: number;
}

const PRODUCT_LIST_KEY = "PRODUCT_LIST_KEY";
const FAVORITES_LIST_KEY = "FAVORITES_LIST_KEY";

const ProductPage = () => {
    const { productList, setProductList } = useContext(ShoppingCartContext);
    const { favoritesList, setFavoritesList } = useContext(FavoritesContext);
    const { register, handleSubmit } = useForm<ProductFormProps>();
    const params = useParams();
    const [product, setProduct] = useState<ProductCardProps>();

    useEffect(() => {
        const result = [...catalogMen, ...catalogWomen, ...catalogKids, ...catalogJoyeria].find((product) => {
            return product.id === params.productId;
        });
        if (result) {
            setProduct(result);
        }
    }, [params.productId]);

    useEffect(() => {
        if (productList && productList.length > 0) {
            setToLocalStorage(PRODUCT_LIST_KEY, productList);
        }
    }, [productList]);

    const findProduct = () => {
        return productList.findIndex((productSearch: ProductCardProps) => 
            productSearch.id === product?.id
        );
    };

    const onSubmit: SubmitHandler<ProductFormProps> = (data) => {
        const productIndex = findProduct();
        if (productIndex === -1) {
            setProductList([
                ...productList,
                {
                    ...product,
                    quantity: Number(data.quantity),
                } as ProductCardProps,
            ]);
        } else {
            productList[productIndex].quantity = 
                Number(productList[productIndex].quantity) + 
                Number(data.quantity);
            setProductList([...productList]);
        }
        toast("Producto añadido al carrito");
    };

    const addProductToFavorites = () => {
        if (!product) {
            toast.error("Producto no disponible para añadir a favoritos");
            return;
        }

        let isProductInFavorites = false;
        for (let i = 0; i < favoritesList.length; i++) {
            if (favoritesList[i].id === product.id) {
                isProductInFavorites = true;
                break;
            }
        }

        if (isProductInFavorites) {
            toast.warn("El producto ya está en favoritos");
            return;
        }

        const updatedFavorites = [...favoritesList, product];
        setFavoritesList(updatedFavorites);
        setToLocalStorage(FAVORITES_LIST_KEY, updatedFavorites);
        toast.info("Producto añadido a favoritos");
    };

    if (!product) {
        return <div>Este producto no existe, intenta más tarde</div>;
    }

    return (
        <div className='product-page'>
            <div className='product-page-body'>
                <div className='product-page-carousel'>
                    <EmblaCarousel slides={product?.imagesUrl}/>
                </div>
                <div className='product-page-detail-wrapper'>
                    <div className='product-page-detail-title'>
                        {product.title}
                    </div>
                    <div className='product-page-detail-price-wrapper'>
                        <div className='product-page-detail-price'>
                            {product.price} MXN
                        </div>
                        <div className='product-page-detail-discount'>
                            {product.discount}%
                        </div>
                    </div>
                    <ReactStars
                        count={5}
                        size={16}
                        value={product.stars}
                        edit={false}
                    />
                    {product.description}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>
                            Cantidad
                            <select {...register('quantity')}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>
                            <input 
                                type='submit' 
                                value="Agregar al carrito" />
                        </label>
                    </form>
                    <Button 
                        type="button"
                        onClick={addProductToFavorites}
                        label="Añadir a favoritos"
                        className="dark"
                    />
                </div>
            </div>
            <label>Productos relacionados:</label>
            <Catalog productList={catalogMen.slice(1, 4)}/>
            <ToastContainer />
        </div>
    );
};

export { ProductPage };