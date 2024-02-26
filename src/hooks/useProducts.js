import { useEffect, useState } from "react"
import { fetchProducts } from "../services/fetchProducts"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState('all')

    const handleFilterChange = ({ target }) => {
        setFilter(target.value)
    }

    const filterProducts = filter === 'all' ? products : products.filter(product => product.available)
    useEffect(() => {
        fetchProducts()
            .then(products => setProducts(products))
    }, [])


    return {
        filterProducts,        
        filter,
        handleFilterChange
    }

}