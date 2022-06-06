var empty = False
song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup() {
    
    canvas = createCanvas(550, 550);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function preload(){
    song = loadSound("music.mp3","pink.mp3");
}

function draw(){
    image(video, 0, 0, 550, 550);

}

function play1(){
    song.play("music.mp3");  
    song.setVolume(1);
    song.rate(1);
}

function play2(){
    song.play("pink.mp3")
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0) 
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log('Left Wrist X = ' + leftWristX + ' Left Wrist Y = ' + leftWristY)
        console.log('Right Wrist X = ' + rightWristX + ' Right Wrist Y = ' + rightWristY)
        
    }
}
