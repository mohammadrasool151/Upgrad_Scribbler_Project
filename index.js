function sign(){
    document.getElementById("button2").addEventListener("click", function(){
   
        document.getElementById("sbox2").style.display="block";
    })
    
    document.querySelector(".close2").onclick = function() {
        document.getElementById("sbox2").style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == sbox2) {
            document.getElementById("sbox2").style.display = "none";
        }
    }

}