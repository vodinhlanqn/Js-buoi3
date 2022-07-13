
// Bài tập 1: Tính tiền lương của nhân viên

const currentFormat = new Intl.NumberFormat("vn-VN");
const salaryPerDay = 100000;
function calcSalary() {
    var workingDays = document.getElementById('txtWorkingDays').value;
    var totalSalary = workingDays * salaryPerDay;

    var currentFormat = new Intl.NumberFormat("vn-VN");
    var totalVND = currentFormat.format(totalSalary);
    document.getElementById('totalSalary').innerHTML =
        `Tổng tiền lương của nhân viên: <b>${totalVND} </b> VNĐ`;
}



// Bài tập 2: Tính trung bình tổng của 5 số

function calcSumAverage() {
    var number1 = document.getElementById('number1').value * 1;
    var number2 = document.getElementById('number2').value * 1;
    var number3 = document.getElementById('number3').value * 1;
    var number4 = document.getElementById('number4').value * 1;
    var number5 = document.getElementById('number5').value * 1;
    var sumNumber = number1 + number2 + number3 + number4 + number5;
    var result = sumNumber / 5;
    document.getElementById('sumAverage').innerHTML = `<b> ${result} </b>`;
}

// Bài tập 3: QUy đổi tiền USD sang VND

var presentUSD = 23500;

function exchangeUSD() {
    var inputMoney = document.getElementById('txtExchangeMoney').value * 1;
    var resultMoney = currentFormat.format(inputMoney * presentUSD);

    document.getElementById('totalVND').innerHTML = `<b>${resultMoney} </b> VNĐ`;
}



// Bài tập 4: Tính Diện tích, Chu vi Hình Chữ nhật

function hinhChuNhat() {
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    var showResult = "";
    showResult += `<p> Diện tích Hình chữ nhật: ${dienTich} </p>`;
    showResult += `<p> Chu vi Hình chữ nhật: ${chuVi} </p>`;
    document.getElementById('showResult').innerHTML = showResult;
}

// Bài tập 5: Tính tổng 2 ký số

function sumNumber() {
    var num = document.getElementById('num').value * 1;
    var num1 = num % 10;
    var num2 = Math.floor(num / 10);
    var sumNum = num1 + num2;

    var showResultNumber = "";
    showResultNumber += `<p> Tổng 2 ký số: <b>${sumNum} </b></p>`;
    document.getElementById('showResultNumber').innerHTML = showResultNumber;

}



