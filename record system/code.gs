/**
 * Upload files to Google Drive and save record to Google Sheet
 * By www.bpwebs.com
 * References: https://stackoverflow.com/a/26497772/2391195
 *             https://developers.google.com/apps-script/guides/html/communication#index.html_4
 */

function doGet() {
  return HtmlService.createTemplateFromFile('index')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

var folderID = "1AQZeGMBl49bspmkw451GM34ySOwPN929"; //เปลี่ยนไอดีโฟลเดอร์
// var sheetName = "Data"; //ชื่อชีต

/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function uploadFiles(formObject) {
    var folder = DriveApp.getFolderById(folderID);
    var sheet = SpreadsheetApp.getActive().getSheetByName(formObject.level);

    //Upload file if exists and update the file url
    if (formObject.myFile.length > 0) {
      var blob = formObject.myFile;
      var file = folder.createFile(blob);
      file.setDescription("Uploaded by " + formObject.first_name);
      fileuc= file.getId();
      fileName = file.getName();
      var ucFile = "https://drive.google.com/uc?id="+fileuc
     } else{
      ucFile = "ไม่มีข้อมูล";
   }

    if (formObject.myFile2.length > 0) {
      var blob2 = formObject.myFile2;
      var file2 = folder.createFile(blob2);
      file2.setDescription("Uploaded by " + formObject.first_name);
      fileuc2= file2.getId();
      fileName2 = file2.getName();
      var ucFile2 = "https://drive.google.com/uc?id="+fileuc2
    }  else{
      ucFile2 = "ไม่มีข้อมูล";
   }
     
    //Saving records to Google Sheet
    sheet.appendRow([
      formObject.level,
      formObject.name,
      formObject.g1,
      formObject.g2,
      formObject.g3,
      formObject.g4,
      formObject.g5,
      formObject.g6,
      formObject.g7,
      formObject.g8,
      ucFile,
      ucFile2,
       new Date()]);
    var output = {}
    var data = sheet.getDataRange().getValues()
    data = sheet.getRange(sheet.getLastRow(),1,1,sheet.getLastColumn()).getDisplayValues()[0]
     output.data = data

     var token = 'DpNthcjZm1KDwNwHkWuHjOdvtPs8tPpBgW6KHAKt2et'//Token   
  var message = '\n' +'\n📌ข้อมูลทั่วไป'+ '\nชื่อผู้ตรวจ : ' + data[1] +'\nระดับชั้นที่ตรวจ :  '+ data[0] +'\nประทับวันที่ตรวจ :  '+ data[12] +'\n'+'\n📌คะแนนการตรวจ'+'\nระเบียบโต๊ะและเก้าอี้ :  '+ data[2] +'\nความสะอาดของพื้นห้อง :  '+ data[3] +'\nกระดานหน้าชั้นเรียน,บอร์ด :  '+ data[4] +'\nการดูแลรักษาเครื่องใช้ไฟฟ้า :  '+ data[5] +'\nเศษขยะภายในห้อง :  '+ data[6] +'\nผนังห้องเรียน,โต๊ะเรียน :  '+ data[7] +'\nเวรประจำวัน :  '+ data[8] +'\nความสะอาดบริเวณหน้าห้องเรียน :  '+ data[9] + '\n' +'\n📌ภาพการตรวจ : '+'\nหน้าห้องเรียน :  '+ data[10] +'\nภายในห้อง :  '+ data[11] + '\n' + '\nรายงานโดย : งานประชาสัมพันธ์ คณะกรรมการนักเรียนโรงเรียนวัดบวรนิเวศ'
      NotifyApp.sendNotify(token, message)

    return output; 
  } 
    
/** DataTable */
function getData() {
  var sheetName = SpreadsheetApp.getActive()
  var range = sheetName.getDataRange()
  var values = range.getDisplayValues()
  Logger.log(values)
  return values
  }