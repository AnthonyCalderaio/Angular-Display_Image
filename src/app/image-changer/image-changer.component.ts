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
        var img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      document.body.appendChild(img);
      img.onload = function() {
        window.URL.revokeObjectURL(img.src);
      }
      
      img.height=100;
      
        
  
}
    
 
  
  }
   

  

}
