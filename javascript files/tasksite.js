document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').value.lenght == 0){
        alert{"Please Enter a Task"}
}
else{
    document.querySelector('#tasks').innerHTML += ''
    ${document.querySelector('#newtask input').value}
    ;
    
    var current_tasks = document.querySelectorAll(".delete");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].oneclick = function(){
            this.parentNode.remove();
        }
    }
    }
}