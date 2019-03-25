var activityIndicator = {
  show:function(){
    document.body.innerHTML+='<div style="position:fixed;top:0;height:100vh;width: 100vw;text-align: center;background-color: rgba(255,255,255,.8);z-index: 100000;" class="ac"><svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" style="margin-top: 45vh;"> <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle> </svg></div>'
  },
  hide: function(){
    var x = document.getElementsByClassName("ac");
    for (i=0; i< x.length;i++) {x[i].parentNode.removeChild(x[i])}
  }
}

