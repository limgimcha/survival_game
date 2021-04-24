
var openWin = null;
var inv = 0;
var today = 1;
var q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var st_now = [0, 0, 0, 0, 0, 0, 0, 0];
// q0 - 전등 q1 - 적 q2 - 작업대 q3 - 체스판 q4 - TV q5 - 플스 q6- 인공태양 q7- 인공조명 q8- 수경재배시설
var from_nowDay = [0, 0, 0, 0, 0, 0];
var stNow = '';
var woongbok = 0;
var mat = [0, 0, 0, 0, 0, 0] // q0- 나무 q1- 쇠붙이 q2- q3-
var seedId = 0;
var minseong = {
    name: 'player',
    hgr: 100,
    maxHgr: 100,
    thr: 70,
    maxThr: 70,
    str: 0,
    aP: 3,
    maxStr: 30
}
var cnt = 0;
var text = "어느날, 핵폭탄이 떨어져버렸다. 나는 어찌 해야 할 지 몰라 우두커니 앉아있었지만, 가까스로 목숨을 구하게 되었다. 이제는 행동해야 할 시간이다";
/*
function dialogText(){
    document.getElementById("message").innerHTML =text.substring(0, cnt)+"_";
    cnt ++
    timer1=setTimeout('dialogText()', 1000);
    
    if(text.length<cnt){
    clearTimeout(timer1);
    cnt=0;
    }
}

*/


function dialogText() {
    var i = 0;
    document.getElementById("message").innerHTML = text.substring(0, cnt) + "_";
    cnt++
    timer1 = setTimeout('dialogText()', 70);
    if (text.length < cnt) {
        clearTimeout(timer1);
        cnt = 0;
    }
}


function plus_status() {
    woongbok = 0;
    var tempPerc = Math.random();
    if (tempPerc > 0.95) {
        st_now[2] = 1;
    }
    else if (tempPerc > 0.93) {
        st_now[6] = 1;
    }

    else if (tempPerc > 0.90) {
        st_now[7] = 1;
    }

}

function status() {
    /*
        if(st_now[0]==1){
            minseong.hgr +=2;
        }
        
        */
    if (st_now[2] == 1) {
        minseong.hgr -= 2;
    }
}

function stress() {
    if (today > 4 && initiate2 == 1) {
        minseong.str += 3;
        initiate2 = 0;
    }
}

function gameOver() {
    if (minseong.hgr <= 0 || minseong.str >= 30 || minseong.thr <= 0) {
        minseong.hgr = 100;
        minseong.str = 0;
        minseong.thr = 70;
        text = "...";
        dialog();
        dialogText();
        document.getElementById("statusbar").style.display = 'none';
        document.getElementById("exped").style.display = 'none';
        document.getElementById("next").style.display = 'none';
        document.getElementById("minseong").src = './resource/img/etc/die.gif';
    }
}

function trigger() {
    var tempPerc = Math.random();
    if (tempPerc > 0.9) {
        text = "바퀴벌레가 튀어나왔다. 끔찍한 기분이군!";
        dialog();
        dialogText();
        minseong.str += 5;
    } else if (tempPerc > 0.84) {
        var tempPerc2 = Math.floor(Math.random()) * 9;
        text = "누가 벙커에 왔다 간 것 같다. 아무래도 꺼림직한 기분이 든다. 무기가 될 만한 것들을 준비 해 둬야겠다.";
        dialog();
        dialogText();
        q[1] = 1;
        myInventory[Math.floor(Math.random()) * 9] = default_item;
        document.getElementById("i" + tempPerc2).src = "./resource/img/inventory/0.png"
    } else if (tempPerc > 0.3) {
        expedition();
    } else {
        alert("오늘은 평온한, 어떻게 생각하면 심심한 하루였다.");
    }
}

function dialog() {
    document.getElementById("message_popup").style.display = "block";
}

function expedition() {
    var tempPerc = Math.random();
    if (tempPerc > 0.6) {
        var tempPerc2 = Math.random();
        alert("무언가를 발견했다!");
        if (tempPerc2 > 0.7) {
            getItemId = Math.floor(1 + 17 * Math.random());
            getItem(getItemId);
        }
        if (tempPerc2 > 0.4) {
            getItemId = Math.floor(1 + 17 * Math.random());
            getItem(getItemId);
        }
        if (tempPerc2 > 0) {
            getItemId = Math.floor(1 + 17 * Math.random());
            getItem(getItemId);
        }
    }
    if (tempPerc > 0.8) {
        alert("무언가 재료가 될 만한 것들을 주워왔다. 이걸로 무얼 할 수 있을까, 곰곰 생각해봐야겠다");

        mat[Math.floor(Math.random() * 2)] += Math.floor(Math.random() * 3);
    }

    if (tempPerc > 0.85 && q[0] == 0) {
        text = "귀중한 발전기를 주웠다. 선 자체는 이 건물에 깔려있어 잘 연결해보았더니 불이 들어왔다. 아무래도 앞이 보이니 여러가지 행동들을 더 할 수 있겠다.";
        dialog();
        dialogText();
        q[0] = 1;
        document.getElementById("minseong").src = './resource/img/etc/minseong1.gif';
        document.getElementById("basicbg").src = './resource/img/background/basicbg1.png';
    }
    else if (tempPerc <= 0.6) {
        alert("아무것도...");
    }
}

function on_key_down() {
    var keycode = event.keyCode;
    try {
        if (openWin.closed == false)
            return;
    } catch (Exception) {; }

    if (keycode == 73) {
        if (inv == 1) {
            document.getElementById("inventory").style.display = 'none';
            inv = 0;
        } else {
            document.getElementById("inventory").style.display = 'block';
            inv = 1;
        }

    }
}
