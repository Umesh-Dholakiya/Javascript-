let data = [

    {
        id : 1 , "name" : "Umesh" , "email" : "umesh12@gmail.com"
    },
    {
        id : 2 , "name" : "Pratham" , "email" : "Pratham123@gmail.com"
    },
    {
        id : 3 , "name" : "Shrawan" , "email" : "Shrawan1212@gmail.com"
    }
];

function readAll1(){

    localStorage.setItem("object" , JSON.stringify("data"));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem (object);
    var objectdata = JSON.parse(object);
    var element = "";

    objectdata.map( record =>
        {
            <tr>
                <td>${record.id}</td>
                <td>${record.image}</td>
            </tr>
        }
    )
}