
var openWin = null;
var inv = 0;
var today = 1;
var q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var st_now = [0, 0, 0, 0, 0, 0, 0, 0];
// q0 - ���� q1 - �� q2 - �۾��� q3 - ü���� q4 - TV q5 - �ý� q6- �ΰ��¾� q7- �ΰ����� q8- �������ü�
var from_nowDay = [0, 0, 0, 0, 0, 0];
var stNow = '';
var woongbok = 0;
var mat = [0, 0, 0, 0, 0, 0] // q0- ���� q1- ����� q2- q3-
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
var text = "�����, ����ź�� ���������ȴ�. ���� ���� �ؾ� �� �� ���� ���Ŀ�� �ɾ��־�����, ����� ����� ���ϰ� �Ǿ���. ������ �ൿ�ؾ� �� �ð��̴�";
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
        text = "���������� Ƣ��Դ�. ������ ����̱�!";
        dialog();
        dialogText();
        minseong.str += 5;
    } else if (tempPerc > 0.84) {
        var tempPerc2 = Math.floor(Math.random()) * 9;
        text = "���� ��Ŀ�� �Դ� �� �� ����. �ƹ����� �������� ����� ���. ���Ⱑ �� ���� �͵��� �غ� �� �־߰ڴ�.";
        dialog();
        dialogText();
        q[1] = 1;
        myInventory[Math.floor(Math.random()) * 9] = default_item;
        document.getElementById("i" + tempPerc2).src = "./resource/img/inventory/0.png"
    } else if (tempPerc > 0.3) {
        expedition();
    } else {
        alert("������ �����, ��� �����ϸ� �ɽ��� �Ϸ翴��.");
    }
}

function dialog() {
    document.getElementById("message_popup").style.display = "block";
}

function expedition() {
    var tempPerc = Math.random();
    if (tempPerc > 0.6) {
        var tempPerc2 = Math.random();
        alert("���𰡸� �߰��ߴ�!");
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
        alert("���� ��ᰡ �� ���� �͵��� �ֿ��Դ�. �̰ɷ� ���� �� �� ������, ���� �����غ��߰ڴ�");

        mat[Math.floor(Math.random() * 2)] += Math.floor(Math.random() * 3);
    }

    if (tempPerc > 0.85 && q[0] == 0) {
        text = "������ �����⸦ �ֿ���. �� ��ü�� �� �ǹ��� ����־� �� �����غ��Ҵ��� ���� ���Դ�. �ƹ����� ���� ���̴� �������� �ൿ���� �� �� �� �ְڴ�.";
        dialog();
        dialogText();
        q[0] = 1;
        document.getElementById("minseong").src = './resource/img/etc/minseong1.gif';
        document.getElementById("basicbg").src = './resource/img/background/basicbg1.png';
    }
    else if (tempPerc <= 0.6) {
        alert("�ƹ��͵�...");
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
