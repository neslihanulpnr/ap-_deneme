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


//3.
fetch("setting.json").then(
    response => response.json()
).then (responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})
