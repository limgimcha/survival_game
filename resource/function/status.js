function my_status() {
    if (st_now[2] == 1) {
        stNow += " [����ǳ���] ";
        woongbok = 1;
    }

    if (st_now[3] == 1) {
        stNow += " [����] ";
        woongbok = 1;
    }


    if (st_now[4] == 1) {
        stNow += "<font color=red> [�ɰ�������] </font>";
        woongbok = 1;
    }
    if (st_now[5] == 1) {
        stNow += "<font color=red> [�λ�] </font>";
        woongbok = 1;
    }
    if (st_now[6] == 1) {
        stNow += " [��ħ] ";
        woongbok = 1;
    }
    if (st_now[7] == 1) {
        stNow += " [�ǿ����] ";
        woongbok = 1;
    }
}

function my_status_img() {
    if (q[0] == 1 && st_now[5] == 1) {
        document.getElementById("minseong").src = './resource/img/etc/minseong2.gif';
    } else if (st_now[5] == 1) {
        document.getElementById("minseong").src = './resource/img/etc/minseong2o.gif';
    }
}