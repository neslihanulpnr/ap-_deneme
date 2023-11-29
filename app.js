// 1.
// fetch("setting.json").then(
 //   response => {
    //console.log(response)
    // }
 // )


 //2.
//fetch("setting.json").then(
    //response => {
        //return response.json()
    //}
//).then(responseJson => {
   //console.log(responseJson)
//})


//3. json dosyadan veri çekmek
fetch("setting.json").then(
    response => response.json()
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})


//4. apı üzerinden veri çekmek
//fetch("https://jsonplaceholder.typicode.com/posts").then(
  //  response => response.json()
//).then(responseJson => {
   //responseJson.forEach(item => console.log(item));
//})



let userListDOM = document.querySelector("#userList") 
//5. apı üzerinden veri çekmek
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
   responseJson.forEach(item => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
   })
})