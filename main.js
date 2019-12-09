const toNumber = (heb) => {
    let sum=0;
    let temp=0;
    for(let i in heb){
    switch(heb[i]){
        case "א": temp=1;  break;
        case "ב": temp=2;  break;
        case "ג": temp =3;  break;
        case "ד": temp=4; break;
        case "ה": temp=5;  break;
        case "ו": temp= 6;  break;
        case "ז": temp =7;  break;
        case "ח": temp=8;  break;
        case "ט": temp=9;  break;
        case "י": temp= 10;  break;
        case "כ":
        case "ך": temp=20;  break;
        case "ל": temp=30;  break;
        case "ם":
        case "מ": temp=40;  break;
        case "נ": 
        case "ן": temp =50;  break;
        case "ס": temp=60;  break;
        case "ע": temp=70;  break;
        case "פ":
        case "ף": temp=80;  break;
        case "ץ":
        case "צ": temp=90;  break;
        case "ק": temp=100;  break;
        case "ר": temp=200;  break;
        case "ש": temp=300;  break;
        case "ת": temp=400;  break;
        default: temp=0;
        }
    sum+=temp;
    temp=0;
    }
    return sum;  
    }



function hebrewToNumber(heb){
    var all=heb.split("'");
        var sum=0;
        for (var i in all){
            sum += toNumber(all[i])*Math.pow (1000 ,all.length-i-1)

    }
    return sum;
}

