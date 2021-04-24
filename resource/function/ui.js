document.getElementById("craftchess").onclick = function () {
    if (mat[0] > 3) {
        text = "ü��! ���� �� �����ϴ� �����̴�. �̰Ŷ� �־ �ູ�ϴ�.";
        dialog();
        dialogText();
        q[3] = 1;
        mat[0] -= 4;
        minseong.aP -= 1;
        minseong.str -= 5;
        minseong.hgr -= 20;
        minseong.thr -= 5;
        document.getElementById("chess").style.display = "block";
    }

    else if (mat[0] <= 3) {
        alert("��ᰡ �����ϴ�.");
    }
}

document.getElementById("chess").onclick = function () {
    if (minseong.aP > 0) {
        alert("ü��, ������� ����ִ� �� ������?");
        minseong.aP -= 1;
        minseong.str -= 3;
    }

    else if (minseong.aP == 0) {
        alert("�����.. �׸��ҷ�");
    }
}

document.getElementById("exped").onclick = function () {
    var tempPerc = Math.random();

    if (from_nowDay[2] == 1) {
        text = "�� �ٷ���, �ƹ� �ǿ��� ����.";
        dialog();
        dialogText();
        return 0
    }


    if (minseong.aP > 0 && tempPerc > 0.5) {
        document.getElementById("explorering").style.display = "block";
        setTimeout(function () {
            document.getElementById("explorering").style.display = "none";
        }, 1200);
        if (tempPerc > 0.91) {

            text = "��Ḧ �ֿ���� �����Ƿ� ���ƴ�. ���� ������ ��������.";
            dialog();
            dialogText();
            st_now[5] = 1;

        }
        else if (tempPerc > 0.85) {

            text = "�� ���°� �ɰ����� �� ����. � ���� ã�� ������ ...";
            dialog();
            dialogText();
            st_now[4] = 1;
        }
        else if (tempPerc > 0.81) {

            text = "�ݷ��ݷ�.. ���� ���� ���� �� ������.. ���� �Ծ�߰ڴ�. ���� ������ �������� �� ������..";
            dialog();
            dialogText();
            st_now[3] = 1;
        }

        minseong.hgr -= Math.floor(12 + 22 * Math.random());
        minseong.thr -= Math.floor(5 + 12 * Math.random());
        minseong.aP -= 1;
        expedition();
    }

    else if (minseong.aP > 0 && tempPerc <= 0.5) {
        document.getElementById("explorering").style.display = "block";
        setTimeout(function () {
            document.getElementById("explorering").style.display = "none";
        }, 1200);


        minseong.hgr -= Math.floor(12 + 22 * Math.random());
        minseong.thr -= Math.floor(5 + 12 * Math.random());
        minseong.aP -= 1;
        trigger();
    } else {
        alert("�� �̻��� �ൿ�� ���� ����.. ������ ��������� ����.");
    }

}

document.getElementById("crafting").onclick = function () {
    if (q[0] == 1) {
        document.getElementById("crafting_table").style.display = "block";
    } else {
        alert("��.. �Ⱥ���...");
    }
}

document.getElementById("harvesting").onclick = function () {
    /*
            document.getElementById("harvesting_table").style.display = "block";
    */

    if (q[7] == 1 && q[8] == 1) {
        document.getElementById("h1").src = "./resource/img/ui/hv01.png";
        document.getElementById("harvesting_table").style.display = "block";
    } else {
        alert("��� ���� ���� ����..");
    }



}

document.getElementById("hvm").onclick = function () {
    document.getElementById("h1").src = "./resource/img/ui/hv01.png";
}

document.getElementById("hvs").onclick = function () {
    document.getElementById("s0").src = "./resource/img/seed/" + 1 + ".png"; //1 ��
}

document.getElementById("X").onclick = function () {
    document.getElementById("crafting_table").style.display = "none";
}

document.getElementById("X1").onclick = function () {
    document.getElementById("harvesting_table").style.display = "none";
}

document.getElementById("X2").onclick = function () {
    document.getElementById("message_popup").style.display = "none";
}

document.getElementById("next").onclick = function () {
    document.getElementById("nextday").style.display = "block";
    setTimeout(function () {
        document.getElementById("nextday").style.display = "none";
    }, 1200);
    if (q[0] == 0) {
        alert("��ο�... ¥����...");
        minseong.str++;
    }
    if (st_now[3] == 1) {
        minseong.str += 3;
        from_nowDay[0]++;
        if (from_nowDay[0] > Math.floor(12 + 4 * Math.random())) {
            st_now[4] = 1;
            st_now[3] = 0;
            from_nowDay = 0;
        }
    }
    if (st_now[4] == 1) {
        minseong.str += 5;
        from_nowDay[0]++;
        if (from_nowDay[0] > Math.floor(5 * Math.random())) {
            minseong.str += 31;
            minseong.hgr = 0;
            minseong.thr = 0;
            gameOver();
        }
    }
    if (st_now[5] == 1) {
        minseong.thr -= 5;
        from_nowDay[1]++;
        if (from_nowDay[1] > 3) {
            st_now[4] = 1;
            from_nowDay[1] = 0;
        }
    }
    if (st_now[7] == 1) {
        from_nowDay[2]++;
        if (from_nowDay[2] > 2) {
            from_nowDay[2] = 0;
            st_now[7] = 0;
        }
    }
    today++;
    initiate2 = 1;
    minseong.aP = 3;
    minseong.hgr -= 25;
    minseong.thr -= 9;

}


document.getElementById("eq").onclick = function () {
    equip();
}
document.getElementById("ab").onclick = function () {
    aband();
}

document.getElementById("i0").onclick = function () {
    cI = 0;
}

document.getElementById("i1").onclick = function () {
    cI = 1;
}
document.getElementById("i2").onclick = function () {
    cI = 2;
}

document.getElementById("i3").onclick = function () {
    cI = 3;
}

document.getElementById("i4").onclick = function () {
    cI = 4;
}

document.getElementById("i5").onclick = function () {
    cI = 5;
}

document.getElementById("i6").onclick = function () {
    cI = 6;
}

document.getElementById("i7").onclick = function () {
    cI = 7;
}

document.getElementById("i8").onclick = function () {
    cI = 8;
}

document.getElementById("i9").onclick = function () {
    cI = 9;
}
