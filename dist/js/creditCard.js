document.getElementsByClassName("inputs")[0].style.display = 'none';
document.getElementsByClassName("credit-card__img__remove-btn")[0].style.display = 'none';

function editCreditCard(){

    document.getElementById("credit-card__button").style.display = 'none';
    document.getElementsByClassName("credit-card__info__horiz")[0].style.display = 'none';
    document.getElementsByClassName("credit-card__info__horiz")[1].style.display = 'none';

    document.getElementsByClassName("inputs")[0].style.display = 'block';
    document.getElementsByClassName("credit-card__img__remove-btn")[0].style.display = 'block';
      
}

function saveCreditCard(){

    document.getElementById("credit-card__button").style.display = 'block';
    document.getElementsByClassName("credit-card__info__horiz")[0].style.display = 'flex';
    document.getElementsByClassName("credit-card__info__horiz")[1].style.display = 'flex';

    document.getElementsByClassName("inputs")[0].style.display = 'none';
    document.getElementsByClassName("credit-card__img__remove-btn")[0].style.display = 'none';
      
}

