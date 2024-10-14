import { defineArrayMember, defineField,defineType } from "sanity";

export const product = defineType({
    name :'product',
    title: 'Product',
    type: 'document',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),
        {
            name:'slug',
            title:'Slug',
            type:'slug' ,
            options: {source:'name'} 
        },
        {
            name:'images',
            title:'Images',
            type: 'array',
            of:[{type: 'image'}]
        },
        {
            name:'description',
            title:'Description',
            type: 'string',
        },
         {
            name: 'price',
            title:'Price',
            type: 'number',
         },
         defineField({
            name: "categories",
            title: "Product Categories",
            type: "array",
            of: [
              defineArrayMember({
                name: "category",
                title: "Product Category",
                type: "reference",
                to: [{ type: "category" }],
              }),
            ],
          })
    ]   
})