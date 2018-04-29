document.getElementsByClassName("meeting-info__rating")[0].style.display = 'none';
document.getElementsByClassName("meeting-info__textarea")[0].style.display = 'none';
document.getElementsByClassName("meeting-info__buttons")[0].style.display = 'none';

function leaveComment(){
    document.getElementById("leaveCommentBtn").style.display = 'none';  

    document.getElementsByClassName("meeting-info__rating")[0].style.display = 'flex';
    document.getElementsByClassName("meeting-info__textarea")[0].style.display = 'block';
    document.getElementsByClassName("meeting-info__buttons")[0].style.display =   'flex';
}

function setRating(rating){
    for(var i=0; i<5; i++){
        if(i<rating){
            document.getElementsByClassName("meeting-info__rating__star")[i].classList.add("meeting-info__rating__star-active");
        }else{
            document.getElementsByClassName("meeting-info__rating__star")[i].classList.remove("meeting-info__rating__star-active");
        }
    }
}
