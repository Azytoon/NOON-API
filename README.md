# NOON API app

This project was generated with Node js and based on mongo DB


## to run this project

* npm i
* make .env file and put configuration in it like DB_URL, JWT_SECRET, PORT
* npm run dev
* now you can test app with postman

## note 

I suppose port = 5000

## End Points Exist in this app

* products end points (crud operations) find it in product.controller file
* user end points (crud operations) find it in user.controller file
* order end points (crud operations) find it in order.controller file
* category end points in category.controller file
* cart end points in cart.controller file
* authentication and authorization end points exist in auth.controller file

### Example of End points ---> product
```
1)GET ALL PRODUCTS            -->   localhost:5000/api/products
2)GET PRODUCT BY  ID          -->   localhost:5000/api/products/find/618eb553e4e26e7f625ca22d
3)GET PRODUCT BY  category    -->   localhost:5000/api/products?category=Fashion

4)POST ADD PRODUCT            -->   localhost:5000/api/products
example of requestBody :
{
    "title": "Samsung Mobile",
    "desc": "new Samsung product",
    "img": "Image of Samsung",
    "categories": ["Mobiles","Electronics"],
    "color": "black",
    "price": "5000"
}

5)DELETE PRODUCT BY ID        -->   localhost:5000/api/products/delete/:id

6)PUT UPDATE PRODUCT          -->   localhost:5000/api/products/:id

```
