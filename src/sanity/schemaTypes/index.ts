import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/productSchema'
import { category } from '../schemas/categorySchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
