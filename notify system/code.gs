function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function main() {

  //--------- Setup Parameter ---------//
  var sheetid = "1wetCBl6tjO-r_ydQSAjH0FmgTMNUTQXNxtvbyyueJRY";
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  // var notifyToken = "kEHdEmKkTOuQTapGG0aWduwqBL7yRShmt6fYfLpP986";

  var ssName = "REPORT-DATA";
  
  
  // ------------------------------------//
  
  var ss = SpreadsheetApp.openById(sheetid).getSheetByName(ssName);
  var msg;

  
  


  // --------- Your Message Go here --------//
  msg = "\n \nรายงานคะแนนโครงการห้องเรียนสีขาว \n ประจำวันที่ " +DateConvert(ss.getRange('B1').getValue()) + "\n" + 
        "\nชั้นมัธยมศึกษาปีที่ 1/1 : " +ss.getRange('B3').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 2/1 : " +ss.getRange('B4').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 2/2 : " +ss.getRange('B5').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 3/1 : " +ss.getRange('B6').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 3/2 : " +ss.getRange('B7').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 4/1 : " +ss.getRange('B8').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 4/2 : " +ss.getRange('B9').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 5/1 : " +ss.getRange('B10').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 5/2 : " +ss.getRange('B11').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 6/1 : " +ss.getRange('B12').getValue()+ "\n" + 
        "ชั้นมัธยมศึกษาปีที่ 6/2 : " +ss.getRange('B13').getValue()+ "\n" + "\nรายงานโดย : งานประชาสัมพันธ์ คณะกรรมการนักเรียนโรงเรียนวัดบวรนิเวศ" + "\n" + "\nหรือตรวจสอบผลคะแนนแบบเรียลไทม์ได้ที่ : https://cleaning.bn-sc.cloud/leader-board";

  // ------------------------------------//



  // --------- Sending Message and Chart to LineNotify --------//
   msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
}

function sendLineNotify(messages, accessToken) {
  const lineNotifyEndPoint = "https://notify-api.line.me/api/notify";

  const options = {
    "headers": { "Authorization": "Bearer " + accessToken },
    "method": 'post',
    "payload": messages,
  };

  try {
    UrlFetchApp.fetch(lineNotifyEndPoint, options);
  } catch (error) {
    Logger.log(error.name + "：" + error.message);
    return;
  }
}


function DateConvert(date) {         

    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString(); // getMonth() is zero-based
    var dd  = date.getDate().toString();

    return (dd[1]?dd:"0"+dd[0]) + '-' + (mm[1]?mm:"0"+mm[0]) + '-' + yyyy;
};

function sendline1(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 1/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline2(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 2/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline3(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 2/2 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline4(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 3/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline5(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 3/2 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline6(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 4/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline7(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 4/2 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline8(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 5/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline9(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 5/2 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline10(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 6/1 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}
function sendline11(){
  var msg;
  var notifyToken = "DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et";
  msg = "\n \n ชั้นมัธยมศึกษาปีที่ 6/2 ยังไม่ได้ตรวจ" ; 
  msg = {
    message: msg,
    
  }
  sendLineNotify(msg, notifyToken);
  
}

function setAutomatically(){

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('REPORT-DATA');

  let point1 = sheet.getRange('C3').getValue();
  let point2 = sheet.getRange('C4').getValue();
  let point3 = sheet.getRange('C5').getValue();
  let point4 = sheet.getRange('C6').getValue();
  let point5 = sheet.getRange('C7').getValue();
  let point6 = sheet.getRange('C8').getValue();
  let point7 = sheet.getRange('C9').getValue();
  let point8 = sheet.getRange('C10').getValue();
  let point9 = sheet.getRange('C11').getValue();
  let point10 = sheet.getRange('C12').getValue();
  let point11 = sheet.getRange('C13').getValue();

  return[point1,point2,point3,point4,point5,point6,point7,point8,point9,point10,point11] ;
}