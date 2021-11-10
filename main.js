function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    tm_link=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/y7DlAa5o2/model.json',modelLoaded);
}
function modelLoaded()
{
    tm_link.classify(gotresults);
}
function gotresults(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
console.log(results);
document.getElementById("result_lable").innerHTML='i can hear -'+results[0].label;
document.getElementById("result_confidence").innerHTML='accuracy-'+results[0].confidence;
img1=document.getElementById("alien1");
img2=document.getElementById("alien2");
img3=document.getElementById("alien3");
img4=document.getElementById("alien4");
if(results[0].label=="clap")
{
    img1.src='aliens-01.gif';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
}
else if(results[0].label=="bell")
{
    img1.src='aliens-01.png';
    img2.src='aliens-02.gif';
    img3.src='aliens-03.png';
    img4.src='aliens-04.png';
}
else if(results[0].label=="snapping")
{
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.gif';
    img4.src='aliens-04.png';
}
else
{
    img1.src='aliens-01.png';
    img2.src='aliens-02.png';
    img3.src='aliens-03.png';
    img4.src='aliens-04.gif';
}
    }
}
