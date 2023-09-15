## Available Scripts

To run this project, you only need a computer with postman or similar applications installed and follow these steps:

In your terminal, in the folder of your preference, type the following bash command to clone this repository:
git@github.com:fortuneonyeka/home-finder-server.git
Now that you have already cloned the repo run the following commands to get the project up and running:
cd home-finder-server
npm install
npm run dev

### `npm run dev`

Runs the app in the development mode.\
Open Postman and go [http://localhost:4996/api/property/create](http://localhost:4996/api/property/create) to post new properties with the below sample parameters

Create User
{
"data" : {
"userEmail": "josh@email.com"
}
}

Add Properties
{
"data" : {

        "title": "Beach House",
        "description": "Excellent and luxurious beach house. This is luxury redefined",
        "price": 3000000,
        "address": "12 psqure, banana island",
        "city": "Lagos Nigeria",
        "country": "Nigeria",
        "image": "url",
        "facilities": {
            "bed": 3,
            "bathroom": 4,
            " carPark": 3
        },
        "userEmail": "cssh@email.com"
       }
    }.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Avaialble Endpoints:
Get all properties: GET http://localhost:4996/api/property/properties
Get a property: GET http://localhost:4996/api/property
Update a property: PUT http://localhost:4996/api/property/update/id
Book inspection: POST http://localhost:4996/api/user/bookInspection/id
params:{
"email":"cssh@email.com",
"date": "10/08/2023"
}

Get all bookings: GET http://localhost:4996/api/user/allBookings
Cancel booking: POST http://localhost:4996/api/user/cancelBooking/id
params:{
email
}

Author
👤 Ihedoro Fortunatus O

GitHub: @fortuneonyeka
Twitter: @onyekafortune
LinkedIn: Ihedoro Fortunatus
🤝 Contributing
Contributions, issues, and feature requests are welcome!

Show your support
Give a ⭐️ if you like this project!
