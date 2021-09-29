send.addEventListener("click",fnc);
function fnc(){
    let val_M = M.value;
    let val_P = P.value;
    let val_V = V.value;
    let val_Q = M * P * V;
    val_Q = parseInt(val_M) / parseInt(val_P)* parseInt(val_V);
    QQ.value = val_Q;

}