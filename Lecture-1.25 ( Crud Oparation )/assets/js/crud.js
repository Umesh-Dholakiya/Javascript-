let data = [
    {
        id: 1, name: "Umesh", email: "umesh2412@gmail.com"
    },
    {
        id: 2, name: "Utsav", email: "utsav9710@gmail.com"
    },
    {
        id: 3, name: "Abhay", email: "abhay123@gmail.com"
    }
]

function readAll() {
    localStorage.setItem("object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var element = "";

    objectdata.map(record => (
        element +=

        `
            <tr>
                <td>${record.name}</td>
                <td>${record.email}</td>
                <td>
                <button class="edit" onclick="(edit(${record.id}))">Edit</button>
                <button class="delet" onclick="(delet(${record.id}))" >Delete</button> 
                </td>
            </tr>
        `
    ));

    tabledata.innerHTML = element;

}

function creat(){
    var form = document.querySelector(".create-form").style.display = "block";
    var form = document.querySelector(".add").style.display = "none";
}

function add(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var AddObj = {
        id : 4, name : name, email : email
    };

    data.push(AddObj);

    var form = document.querySelector(".create-form").style.display = "none";
    var form = document.querySelector(".add").style.display = "block";

    readAll();
}

function edit(id){
    var form = document.querySelector(".update-form").style.display = "block";

    var objedit = data.find(rec => rec.id == id);

    document.querySelector(".uname").value = objedit.name;
    document.querySelector(".uemail").value = objedit.email;
    document.querySelector(".id").value = objedit.id;

}

function update(id){

    var id = parseInt(document.querySelector(".id").value);
    var name = document.querySelector(".uname").value;
    var email = document.querySelector(".uemail").value;
    var index = data.findIndex(rec => rec.id === id);

    data[index] = {id , name , email};

     readAll();
     document.querySelector(".update-form").style.display = "none";
}

function delet(id){
    data = data.filter(rec => rec.id !== id);

    readAll();

}














