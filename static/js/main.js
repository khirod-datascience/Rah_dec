var x = document.getElementById("demo");
    // document.forms["myForm"].submit();
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
  
    }
    
    function showPosition(position) {
      x.innerHTML = position.coords.latitude + 
      "," + position.coords.longitude;
      document.getElementById("loctext").value =x.innerHTML
    //   console.log(x.innerHTML)
  
    let loctext = document.getElementById("loctext").value;

    console.log(loctext)
    const elemA = loctext;
    var url = 'http://127.0.0.1:8000/home'+ elemA;
    history.pushState({}, "", url);
    // window.location.reload();
    // const elemB = "London";
    // if(!window.location.hash) {
    // window.location.href = 'http://127.0.0.1:8000/?lat='+ elemA;
    // window.location = window.location +'#loc=' + elemA;
    
    // window.location.reload();
    
    // }



    }