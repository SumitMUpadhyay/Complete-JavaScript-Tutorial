console.log("Welcome to tutorial 17");

document.getElementById('heading').addEventListener('mouseover',function(e){
    let variable;
    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = Array.from(e.target.id);
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    // variable = e.offsetY;
    console.log(variable);
    // console.log(e);
    // location.href= '//sumitupadhyay.netlify.app'
});