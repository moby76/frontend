export const SingleProductQuery = `#graphql
    
    query SingleProduct($product_slug: String) {
        products(filter: { slug: {_eq: $product_slug}}) {
            id
            product_name
            price
            slug
            product_image {
                id
            }
            category {
                categories_id {
                    id
                    category_name
                    slug
                }
            }
        }
    }
`