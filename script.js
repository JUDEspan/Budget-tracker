
function submit(){
  var pName = tem.value  
  var quak = quan.value
  var  vale = rate.value

  var checkObj = { pName, quak, vale,}
  
  if( pName =="" || quak =="" || vale== "" ){
     error.innerHTML= `<p style="color:red; "  >Please fill all </p>`
  }else{
    var checkArray =  JSON.parse(localStorage.getItem("budget")) || [];
    tem.value  =""
    quan.value  =""
    rate.value  =""
  checkArray.push(checkObj)
  
  localStorage.setItem("budget", JSON.stringify(checkArray))
  window.location.href ="result.html";
  }
  
 
}