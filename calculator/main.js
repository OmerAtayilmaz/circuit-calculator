//VIR

const inputChooice=document.getElementById('inputGroupSelect01');
const inputVoltage1=document.getElementById('inputVoltage1');
const inputCurrent1=document.getElementById('inputCurrent1');
const inputResistance1=document.getElementById('inputResistance1');
const btnCalculateVir=document.getElementById('calculateVir');
const resultText=document.getElementById('result-text');

const btnClear=document.querySelectorAll('.btn-clear');


const inputChooice2=document.getElementById('inputGroupSelect02');
const inputWatt=document.getElementById('inputWatt');
const inputCurrent2=document.getElementById('inputCurrent2');
const inputVoltage2=document.getElementById('inputVoltage2');
const btnCalculatePiv=document.getElementById('btnCalculatePiv');

const inputClearer=((...data)=>data.forEach(e=>e.value=""));

btnClear.forEach(e=>e.addEventListener("click",_=>inputClearer(inputVoltage1,inputVoltage2,inputCurrent1,inputCurrent2,inputResistance1,inputWatt)));



btnCalculateVir.addEventListener('click',(e)=>{
    e.preventDefault();
    let result;
    switch(Number(inputChooice.value)){
        case 1:
            result=inputResistance1.value*inputCurrent1.value +"V";
            break;
        case 2:
            result=(inputVoltage1.value/inputResistance1.value).toFixed(3) +"A";
            break;
        case 3:
            result=(inputVoltage1.value/inputCurrent1.value).toFixed(3)+"Ω";
            break;
        default:
            result="HATALI GİRİŞ!"
            break;
    }
    resultText.innerHTML=result;  
});




btnCalculatePiv.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("tikandi",inputChooice2.value,inputWatt.value,inputVoltage2.value,inputCurrent2.value);
    let result;
    switch(Number(inputChooice2.value)){
        case 1:
            result=inputVoltage2.value*inputCurrent2.value+"W";            
            break;
        case 2://i p/vx
            result=(inputWatt.value/inputVoltage2.value).toFixed(3)+"A";            
            break;
        case 3:// v p/i
            result=(inputWatt.value/inputCurrent2.value).toFixed(3)+"Ω";           
            break;
        default:
            result="Hatalı Giriş 🚨 "
            break;
    }
    resultText.innerHTML=result;
});


