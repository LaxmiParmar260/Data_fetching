let button = document.querySelector(".btn")
let tablebody = document.querySelector(".table_body")
console.log(tablebody);


let fetchData = async ()=>{
    let response =  await fetch("https://fakestoreapi.com/products")
    let data =  await response.json()
    // console.log(data);
    let userData = ""
    data.forEach(user => {
       userData += `<tr>
            <td>${user.id}</td>
            <td>${user.category}</td>
            <td>${user.description}</td>
            <td> <img src="${user.image}"/></td>
          </tr>`

          tablebody.innerHTML = userData
    });


}

button.addEventListener("click", fetchData)