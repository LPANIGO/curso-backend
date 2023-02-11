import { normalize, schema } from "normalizr"


const blogpost = {
    id:"1",
    title:"Armas medievales",
    description:"Investigación de la guerra de los 100 años.",
    content:"lorem...",
    author: {
        id:"1",
        name:"Riverdale John"
    },
    comments: [
        {
            id:"1",
            author: {
                id:"2",
                name:"Paco Jones"
            },
            content:"Que dia cabrón que hace!!"
        },
        {
            id:"2",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Tenes toda la pinche razon Paco."
        },
        {
            id:"3",
            author: {
                id:"3",
                name:"Esteban Dido"
            },
            content:"Que grande la banda!"
        },
        {
            id:"4",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Asi es Steve"
        },
        {
            id:"5",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Asi es Steve"
        },
        {
            id:"6",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Asi es Steve"
        },
        {
            id:"7",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Asi es Steve"
        },
        {
            id:"8",
            author: {
                id:"1",
                name:"Riverdale John"
            },
            content:"Asi es Steve"
        }
    ]
}
//Entities
const author = new schema.Entity('authors');
const comment = new schema.Entity('comments', {
    author:author
})
const blog = new schema.Entity('blogs', {
    author:author,
    comments:[comment]
})

const normalizedData = normalize(blogpost, blog);
console.log(JSON.stringify(normalizedData,null,'\t'));
//console.log(JSON.stringify(blogpost).length);
//console.log(JSON.stringify(normalizedData).length);