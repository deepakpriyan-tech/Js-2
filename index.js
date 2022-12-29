
  
  
  function getTxt() {
  
      var t1 = document.getElementById("name").value;
      
      localStorage.setItem("name", t1);
      
      alert("You have saved your  name");
      
      
      }
      
      function display() {
      
      let l1 = localStorage.getItem("name");
      
      document.getElementById("res1").innerHTML = l1;
      
      }


   
