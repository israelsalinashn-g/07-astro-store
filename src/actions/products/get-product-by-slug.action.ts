import { defineAction } from "astro:actions";
import { db, Product, eq, ProductImage } from 'astro:db';
import { z } from "astro:content";

export const getProductBySlug = defineAction({
    accept: 'json',
    input: z.string(),
    handler: async (slug) => {
        const [product] = await db.select().from(Product).where(eq(Product.slug, slug));

        if (!product) {
            throw new Error(`Producto with ${slug} not found`);
        }

        const images = await db.select().from(ProductImage).where(eq(ProductImage.productId, product.id));

        return {
            product: product,
            images: images.map((i) => i.image),
        };
    },
});