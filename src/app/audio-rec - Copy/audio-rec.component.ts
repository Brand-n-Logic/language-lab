import { Component, OnInit } from '@angular/core';

// declare var $:any;
// declare global {
//   interface Window { params: any; }
// }

// window.params = window.params || {};
// var btnPauseRecording = document.querySelector('#btn-pause-recording');
@Component({
  selector: 'app-audio-rec',
  templateUrl: './audio-rec.component.html',
  styleUrls: ['./audio-rec.component.css']
})
export class AudioRecComponent implements OnInit {

  

  ngOnInit() {

    // var params = {},
    //                 r = /([^&=]+)=?([^&]*)/g;

    //             function d(s) {
    //                 return decodeURIComponent(s.replace(/\+/g, ' '));
    //             }

    //             var match, search = window.location.search;
    //             while (match = r.exec(search.substring(1))) {
    //                 params[d(match[1])] = d(match[2]);

    //                 if(d(match[2]) === 'true' || d(match[2]) === 'false') {
    //                     params[d(match[1])] = d(match[2]) === 'true' ? true : false;
    //                 }
    //             }

    //             window.params = params; function addStreamStopListener(stream, callback) {
    //               var streamEndedEvent = 'ended';
  
    //               if ('oninactive' in stream) {
    //                   streamEndedEvent = 'inactive';
    //               }
  
    //               stream.addEventListener(streamEndedEvent, function() {
    //                   callback();
    //                   callback = function() {};
    //               }, false);
  
    //               stream.getAudioTracks().forEach(function(track) {
    //                   track.addEventListener(streamEndedEvent, function() {
    //                       callback();
    //                       callback = function() {};
    //                   }, false);
    //               });
  
    //               stream.getVideoTracks().forEach(function(track) {
    //                   track.addEventListener(streamEndedEvent, function() {
    //                       callback();
    //                       callback = function() {};
    //                   }, false);
    //               });
    //           }

              
              
  }

}



           