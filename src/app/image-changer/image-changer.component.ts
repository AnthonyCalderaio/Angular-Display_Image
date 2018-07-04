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
      //document.getElementById("img").style.borderRadius = 50%;
      //img.style.borderRadius = 50%;
      //var theImage = document.body.appendChild(img);
      var theImage = document.body.appendChild(img);
      String(theImage.style.borderRadius="50%");
      String(theImage.style.height="500px");
      String(theImage.style.width="500px");
      String(theImage.style.background="black");
      String(theImage.style.position="relative");


      
     // String(theImage.style.maxHeight="300px");
      //String(theImage.style.maxWidth="300x");
      //String(theImage.style.width="100%");
      //String(theImage.style.paddingBottom="100%");
      //String(theImage.style.height="100px");
      //String(theImage.style.background="white"); 
      
      //height: auto; 
   // width: auto; 
    //max-width: 300px; 
    //max-height: 300px;

      
      
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
      }
      
      //img.height=100;
      
        
  
}
    
 
  
  }
   

  

}
