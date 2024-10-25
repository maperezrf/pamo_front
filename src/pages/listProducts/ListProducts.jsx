import { CustomCard } from '../../components/Customcard/CustomCard'
// import { SimpleTable } from '../../components/SimpleTable/SimpleTable'
import { useMemo, useState } from 'react'
import { useEffect } from 'react'
import { ProductsShopifyApi } from '../../api/ProductsApi'
import { Container } from 'react-bootstrap'
import "../listProducts/styles.css";
import { TableComponent } from '../../components/DataTable/TableComponent'




export const ListProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await ProductsShopifyApi()
        setProducts(response.data)
    }

    useEffect(() => {
        getProducts()
    }, []);

    const columnsProducts = useMemo(() => [
        {
            label: 'id_variantShopi',
            name: 'id_variantShopi',
            options: {
                display: "false",
            },
        },
        {
            label: 'id_product',
            name: 'id_product',
            options: {
                display: "false",
            },
        },
        {
            name: 'sku',
            label: "SKU",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta) => {
                    const variantId = tableMeta.currentTableData[0].data[0].replace('gid://shopify/ProductVariant/', '')
                    const productId = tableMeta.currentTableData[0].data[1].replace('gid://shopify/Product/', '')
                    const url = `https://admin.shopify.com/store/prueba-1615/products/${productId}/variants/${variantId}`

                    return (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                           {value}
                        </a>
                    )
                },
            },
        },
        {
            label: 'Imagen',
            name: 'image_link',
            options: {
                customBodyRender: (value) => {
                    return (
                        <img
                            src={value}
                            alt="Sin imagen"
                            style={{ width: 90, height: 90 }}
                        />
                    )
                },

            }
        },
        {
            label: 'Titulo',
            name: 'title',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'costo',
            name: 'cost',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'utilidad',
            name: 'utility',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Cantidad productos',
            name: 'items_number',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Comision vendedor',
            name: 'commission_seller',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Publicidad',
            name: 'publicity',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Gastos adicionales',
            name: 'publicity',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Costo empaque',
            name: 'packaging_cost',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Precio base',
            name: 'price_base',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Stock',
            name: 'inventory_quantity',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Tags',
            name: 'tags',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Proveedor',
            name: 'vendor',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Estado',
            name: 'status',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Precio Shopify',
            name: 'real_price',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Precio comparación Shopify',
            name: 'compare_at_price',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Codigo de barras',
            name: 'barcode',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Margen comparación',
            name: 'margen_comparacion_db',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Comision plataforma',
            name: 'commission_platform',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Categoria',
            name: 'category',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Costo envio',
            name: 'shipment_cost',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Precio calculado',
            name: 'projected_price',
            options: {
                filter: true,
                sort: true,

            }
        },
        {
            label: 'Precio de comparacion calculado',
            name: 'projected_compare_at_price',
            options: {
                filter: true,
                sort: true,

            }
        },
    ])

    const options = {
        filterType: "dropdown",
        responsive: "scroll",
        selectableRows: "none"
    };

    return (
        <Container>
            {/* <CustomCard> */}
                <TableComponent columns={columnsProducts} data={products} options={options} />
            {/* </CustomCard> */}
        </Container>
    )
}
