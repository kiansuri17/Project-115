function preload ()
{

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
}
function draw(){

}

function take_snapshot(){
    save('myFilterImage.png') ;
}

function take_snapshot(){
    save('myFilterImage.png') ;
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet Is Intialized');
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        console.log ("nose x =0" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}


