const knex = require('knex')
require('dotenv').config()
const ArticlesService = require('./shopping-list-service')


const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})
console.log(ArticlesService.getAllItems())


// function getItemsWithText(searchTerm) {
//     knexInstance
//         .select('*')
//         .from('shopping_list')
//         .where('item_name', 'ILIKE', `%${searchTerm}%`)
//         .then(result => {
//             console.log(result)
//         })
// }

//getItemsWithText('Not Dogs');

// function getAllItemsPaginated(pageNumber) {
//     const productsPerPage = 6
//     const offset = productsPerPage * (pageNumber - 1)
//     knexInstance
//         .select('*')
//         .from('shopping_list')
//         .limit(productsPerPage)
//         .offset(offset)
//         .then(result => {
//             console.log(result)
//         })
// }

// getAllItemsPaginated(3);

// function getAllItemsAfterDate(daysAgo) {
//     knexInstance
//         .select('*')
//         .where(
//             'date_added',
//             '<',
//             knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
//         )
//         .from('shopping_list')
//         .then(result => {
//             console.log(result)
//         })
// }

// getAllItemsAfterDate(4);

function getTotalOfCategory() {
    knexInstance
        .select('item_category').sum('item_price')
        .from('shopping_list')
        //.where({category: `${category}`}) //**will this work in place of groupBy?
        .groupBy('item_category')

        .then(result => {
            console.log(result)
        })
}

getTotalOfCategory()