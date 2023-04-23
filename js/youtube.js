


let tag = document.createElement('script'); 
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0]; 
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 

function onYouTubeIframeAPIReady() {  
  new YT.Player('player', { 
    videoId: 'vxI_lG8gRYE',
    playerVars: { 
      autoplay: true, 
      loop: true,
      playlist: 'vxI_lG8gRYE', 
    },
    events: {
      onReady: function (event) {
        event.target.mute(); 

      }
    }
  });
}