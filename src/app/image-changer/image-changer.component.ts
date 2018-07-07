import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-image-changer',
  templateUrl: './image-changer.component.html',
  styleUrls: ['./image-changer.component.css']
})
export class ImageChangerComponent implements OnInit {

  constructor() { 



    

    






  }

  ngOnInit() {


    var inputElement = document.getElementById("input");

    inputElement.addEventListener("change", handleFiles, false);
    
      function handleFiles() {
        
        var file = this.files[0]; /* now you can work with the file list */
        //var objectURL = window.URL.createObjectURL(fileList);
        //Creating Level 1 Document Object
        var img = document.createElement("img");
      img.src = URL.createObjectURL(file);

     
      
      var theImage = document.body.appendChild(img);
      String(theImage.style.borderRadius="50%");
      String(theImage.style.height="499px");
      String(theImage.style.width="499px");
      String(theImage.style.background="black");
      String(theImage.style.position="relative");
      String(theImage.style.display="inLine");
      String(theImage.style.marginLeft="-4px");
      

      
      // var file = new file("");
      
      var file = this.files[1];
       var backgroundColor = document.createElement("img");
       backgroundColor.src = URL.createObjectURL(file);
       //backgroundColor.src = "black.jpg";
       var backgroundColor = document.body.appendChild(backgroundColor);
      // String(backgroundColor.style.height="500px");
      // String(backgroundColor.style.width="500px");
      // String(backgroundColor.style.display="inLine");
      // String(backgroundColor.style.marginRight="-500px");
      // String(backgroundColor.style.cssFloat="left");
      // String(backgroundColor.style.display="inLine");
      backgroundColor.style.height="500px";
      backgroundColor.style.width="500px";
      backgroundColor.style.display="inLine";
      backgroundColor.style.marginRight="-500px";
      backgroundColor.style.cssFloat="left";
      backgroundColor.style.display="inLine";
      


      //String(backgroundColor.style.position="relative");

      
      
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
      }
      
      //img.height=100;
      
      
  
}
    
 
  
  }
   

  

}
