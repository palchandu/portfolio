async function aboutMe(){
    let response=await axios.get('https://reqres.in/api/products/5');
    console.log('Hee',response)
    return response;
}

$(document).ready(function(){
    aboutMe().then((data)=>{
        $("#about_me").text(data.data.support.text)
    }).catch((error)=>{
        console.log('About data error! '+error)
    })
    
})