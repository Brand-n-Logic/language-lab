import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-contentfile',
  templateUrl: './contentfile.component.html',
  styleUrls: ['./contentfile.component.css']
})
export class ContentfileComponent implements OnInit {
  
  
  ngOnInit() {

    $('input[type=file]').change(function () {
      var fileInput =<HTMLInputElement> document.getElementById('fileItem');
      var files = fileInput.files;
      var fileURL = URL.createObjectURL(files[0]);
      document.querySelector('video').src = fileURL;
  });

  }
}
