

setInterval(function () {
    document.getElementById("minseong-hgr").innerHTML = "���: " + minseong.hgr + ' / ' + minseong.maxHgr;
    document.getElementById("minseong-thr").innerHTML = "����: " + minseong.thr + ' / ' + minseong.maxThr;
    document.getElementById("minseong-st").innerHTML = "����: " + stNow;
    document.getElementById("material-wood").innerHTML = "����: " + mat[0];
    document.getElementById("material-mot").innerHTML = "�����: " + mat[1];
    document.getElementById("minseong-str").innerHTML = "��Ʈ����: " + minseong.str + ' / ' + minseong.maxStr;
    document.getElementById("today").innerHTML = "������.. " + today + " �� °..";
    document.getElementById("itemInfo0").innerHTML = "<br>�̸�: " + myInventory[0].name + "<br>���:" + myInventory[0].hgr + "<br>����:" + myInventory[0].thr + "<br>";
    document.getElementById("itemInfo1").innerHTML = "<br>�̸�: " + myInventory[1].name + "<br>���:" + myInventory[1].hgr + "<br>����:" + myInventory[1].thr + "<br>";
    document.getElementById("itemInfo2").innerHTML = "<br>�̸�: " + myInventory[2].name + "<br>���:" + myInventory[2].hgr + "<br>����:" + myInventory[2].thr + "<br>";
    document.getElementById("itemInfo3").innerHTML = "<br>�̸�: " + myInventory[3].name + "<br>���:" + myInventory[3].hgr + "<br>����:" + myInventory[3].thr + "<br>";
    document.getElementById("itemInfo4").innerHTML = "<br>�̸�: " + myInventory[4].name + "<br>���:" + myInventory[4].hgr + "<br>����:" + myInventory[4].thr + "<br>";
    document.getElementById("itemInfo5").innerHTML = "<br>�̸�: " + myInventory[5].name + "<br>���:" + myInventory[5].hgr + "<br>����:" + myInventory[5].thr + "<br>";
    document.getElementById("itemInfo6").innerHTML = "<br>�̸�: " + myInventory[6].name + "<br>���:" + myInventory[6].hgr + "<br>����:" + myInventory[6].thr + "<br>";
    document.getElementById("itemInfo7").innerHTML = "<br>�̸�: " + myInventory[7].name + "<br>���:" + myInventory[7].hgr + "<br>����:" + myInventory[7].thr + "<br>";
    document.getElementById("itemInfo8").innerHTML = "<br>�̸�: " + myInventory[8].name + "<br>���:" + myInventory[8].hgr + "<br>����:" + myInventory[8].thr + "<br>";
    document.getElementById("itemInfo9").innerHTML = "<br>�̸�: " + myInventory[9].name + "<br>���:" + myInventory[9].hgr + "<br>����:" + myInventory[9].thr + "<br>";

    if (minseong.hgr >= 0) {

        document.getElementById("hgr-bar").style.width = minseong.hgr * 22 / minseong.maxHgr + '%';
    } else {
        document.getElementById("hgr-bar").style.width = 0;
    }

    if (minseong.thr >= 0) {

        document.getElementById("thr-bar").style.width = minseong.thr * 22 / minseong.maxThr + '%';
    } else {
        document.getElementById("thr-bar").style.width = 0;
    }

    if (minseong.str >= 0) {

        document.getElementById("str-bar").style.width = minseong.str * 22 / minseong.maxStr + '%';
    } else {
        document.getElementById("str-bar").style.width = 0;
    }

    if (minseong.hgr > minseong.maxHgr) {
        minseong.hgr = minseong.maxHgr;
    }
    if (minseong.thr > minseong.maxThr) {
        minseong.thr = minseong.maxThr;
    }
    if (minseong.str > minseong.maxStr) {
        minseong.str = minseong.maxStr;
    }
    if (minseong.str < 0) {
        minseong.str = 0;
    }
    if (today > 200) {
        alert("��Ÿ���� ��.");
    }
    my_status_img();
    if (woongbok == 0) {
        my_status();
    }
    stress();
    gameOver();


}, 10)