
const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')


  describe(`Articles service object`, function() {

    let db
    let testItem = [
     {
       item_name: 'First test post!',
        item_price: 10,
        item_category: 'Main',
       item_checked: true
     },
    {
       item_name: 'Second Item!',
        item_price: 10,
        item_category: 'Main',
       item_checked: true
        },
    {
       item_name: 'Third Item!',
        item_price: 10,
        item_category: 'Main',
       item_checked: true
     },
   ]


   before(() => {
     db = knex({
       client: 'pg',
       connection: process.env.TEST_DB_URL,
     })
   })

   before(() => {
     return db
     .into('drills')
     .insert(testItems)
 })

 after(() => db.destroy())

   describe(`getAllArticles()`, () => {

     it(`resolves all articles from 'blogful_articles' table`, () => {
       // test that ArticlesService.getAllArticles gets data from table
     })
   })
  })
