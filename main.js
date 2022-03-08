objects = [];
statuss = "";

function preload(){
    // video = createVideo("video.mp4");
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
 objectDetector = ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById("status").innerHTML = "Status : Detecting Objects";
objectName = "baby";
}

function modelLoaded(){
statuss = true;
}
function draw() {
    image(video,0,0,400,400);
    if (statuss != "") {
         objectDetector.detect(video, gotResults);
        for(i=0;i<objects.length;i++){
if (objects[i].label==objectName) {
    video.stop();
    document.getElementById("status").innerHTML =  " Found " + objectName;
    synth = window.speechSynthesis;
    utterThis = new SpeechSynthesisUtterance(objectName + "Found");
    synth.speak(utterThis)
    
}else{
    document.getElementById("status").innerHTML = "Not Found";

}
        }
    }
}


function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
    objects = result;
}








