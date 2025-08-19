import { z } from 'zod';

export const productSchema = z.object({
    name: z.string(),
    price: z.number()
});

export const dbProductSchema = z.object({

    id: z.number(),
    name: z.string(),
    price: z.number(),
    available: z.boolean()
});

export const dbProductsSchema = z.array(dbProductSchema);
export type Products = z.infer<typeof dbProductsSchema>
export type Product = z.infer<typeof dbProductSchema>





