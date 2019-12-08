const hebrewToNumber = (heb) => {
    heb=heb.replace("טו","יה").replace("טז","יו");
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
        case "כ": temp=20;  break;
        case "ל": temp=30;  break;
        case "מ": temp=40;  break;
        case "נ": temp =50;  break;
        case "ס": temp=60;  break;
        case "ע": temp=70;  break;
        case "פ": temp=80;  break;
        case "צ": temp=90;  break;
        case "ק": temp=100;  break;
        case "ר": temp=200;  break;
        case "ש": temp=300;  break;
        case "ת": temp=400;  break;
        case "ך": temp=20;  break;
        case "ם": temp=40;  break;
        case "ן": temp =50;  break;
        case "ץ": temp =90;  break;
        case "ף": temp=80;  break;
        default: temp=0;
        }
    sum+=temp;
    temp=0;
    }
    return sum;  
    }


