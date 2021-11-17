song1 = "";
song2 = "";
scorerightwrist=0;
scoreleftwrist=0; 
leftwristy=0;
leftwristx=0;
rightwristx=0;
rightwristy=0;
song1status="";
songstatus2="";

function preload(){
song1 = loadSound("music.mp3");
song2=loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on("pose",getposes);
}
function modalloaded(){
console.log("posenet is intialized")
}

function draw(){
    image(video,0,0,600,500);
  song1status=song1.isPlaying();
  song2status=song2.isPlaying();
    fill("#FF0000");
    stroke("#FF0000");
if(scorerightwrist>0.2){
    circle(rightwristx,rightwristy,20);
    song2.stop();
    if(song1status==false){
        song1.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song";
    }}
    if(scoreleftwrist>0.2){
        circle(leftwristx,leftwristy,20);
        song1.stop();
        if(song2status==false){
            song2.play();
            document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song";
        }}

}

function play(){
    song.play();
}

function getposes(results){
    if(results.length<0){
  scorerightwrist=results[0].pose.keypoints[10].score;
  scoreleftwrist=results[0].pose.keypoints[9].score;
  rightwristx=results[0].pose.rightWrist.x;
  leftwristx=results[0].pose.leftWrist.x;
  rightwristy=results[0].pose.rightWrist.y;
  leftwristy=results[0].pose.leftWrist.y;
    }
}
