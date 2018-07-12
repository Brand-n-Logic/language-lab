// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
declare const navigator: any;
declare const MediaRecorder: any;

  //   function playOnclick() {
  //     buttonPlay.disabled = true;
  //     buttonRecord.disabled = true;
  //     buttonPause.disabled = false;

  //     document.querySelectorAll('audio').forEach(audio => {
  //         audio.play();
  //     });

  //     isPlayingAll = true;
  // };

  


@Component({
  selector: 'app-audio-rec',
  templateUrl: './audio-rec.component.html',
  styleUrls: ['./audio-rec.component.css']
})
export class AudioRecComponent implements OnInit {

  public isRecording = false;
  private chunks: any = [];
  private mediaRecorder: any;

  constructor() {
    const onSuccess = stream => {
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.onstop = e => {
        const audio = new Audio();
        const blob = new Blob(this.chunks, { 'type': 'audio/ogg; codecs=opus' });
        this.chunks.length = 0;
        audio.src = window.URL.createObjectURL(blob);
        // this.addTrack(blob);
        audio.load();
        audio.play();
      };

      this.mediaRecorder.ondataavailable = e => this.chunks.push(e.data);
    };

    navigator.getUserMedia = (navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    navigator.getUserMedia({ audio: true }, onSuccess, e => console.log(e));
   }

   ngOnInit() {
  }

  public record() {
    this.isRecording = true;
    this.mediaRecorder.start();
  }

  public stop() {
    this.isRecording = false;
    this.mediaRecorder.stop();
  }

  public addTrack(blob) {
    const audio = new Audio();
    audio.src = window.URL.createObjectURL(blob);
    audio.load();
    audio.play();
  }

//   alert("hi");
//   let buttonPlay = document.getElementById('buttonPlay');
//   let buttonRecord = document.getElementById('buttonRecord');
//   let buttonPause = document.getElementById('buttonPause');
//   let trackHolder = document.getElementById('trackHolder');
//   let templateTrack = document.getElementById('templateTrack');
  
//   let isPlayingAll = false;
//   const app = function(stream) {
//     alert("Inside function load");
//       let mediaRecorder = new MediaRecorder(stream);
//       let chunks = [];
//       alert("Inside media");
//       let startRecord = function() {
//         alert ("HEllo Record");
//           mediaRecorder.start();
//       };
      
//       let stopRecord = function() {
//         alert ("HEllo stop Record");
//           mediaRecorder.stop();
//           alert ("HEllo after stop Record");
//       };
  
//       mediaRecorder.ondataavailable = function(e) {
//           chunks.push(e.data);
//       }
  
//       mediaRecorder.onstop = function(e) {
//           let blob = new Blob(chunks, {
//               'type' : 'audio/ogg; codecs=opus',
//           });
          
//           chunks = [];
  
//           addTrack(blob);
//       };
//       alert("after media");
//       // bind actions
      
//       alert("audio play button");
      
//       alert("start record button");
      
//       alert("stop record");
//   };
  
  
//   const addTrack = function(blob) {
//     alert('inside addtrack');
//       let template = templateTrack.content.cloneNode(true);
//       let templateAudio = template.querySelector('audio');
//       let templatePlay = template.querySelector('.track__button--play');
//       let templatePause = template.querySelector('.track__button--pause');
//       let templateRemove = template.querySelector('.track__button--remove');
  
//       templateAudio.src = URL.createObjectURL(blob);
  
      
  
      
  
     
  
//       trackHolder.appendChild(template);
//   }
  
//   navigator.mediaDevices
//       .getUserMedia({ audio: true })
//       .then(app);
  

//   recordAudio() {
//     alert("Inside record Audio");
//     buttonPlay.disabled = true;
//     buttonRecord.disabled = true;
//     buttonPause.disabled = false;

//     startRecord();
// };
// stopAudio(){
//   alert("Inside stop Audio");
//   buttonPlay.disabled = false;
//   buttonRecord.disabled = false;
//   buttonPause.disabled = true;

//   if (isPlayingAll) {
//       document.querySelectorAll('audio').forEach(audio => {
//           audio.pause();
//       });
//   } else {
//     stopRecord();
//   }
// };

}


           