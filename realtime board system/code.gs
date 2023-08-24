function doGet(e) {
  return HtmlService.createTemplateFromFile("index").evaluate()
  .setTitle("E-SCOREBOARD")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function setAutomatically(){

  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('ชีต1');

  let no1 = sheet.getRange('B2').getValue();
  let point1 = sheet.getRange('C2').getValue();

  let no2 = sheet.getRange('B3').getValue();
  let point2 = sheet.getRange('C3').getValue();

  let no3 = sheet.getRange('B4').getValue();
  let point3 = sheet.getRange('C4').getValue();

  let no4 = sheet.getRange('B5').getValue();
  let point4 = sheet.getRange('C5').getValue();

  let no5 = sheet.getRange('B6').getValue();
  let point5 = sheet.getRange('C6').getValue();
  
  let no6 = sheet.getRange('B7').getValue();
  let point6 = sheet.getRange('C7').getValue();

  let no7 = sheet.getRange('B8').getValue();
  let point7 = sheet.getRange('C8').getValue();

  let no8 = sheet.getRange('B9').getValue();
  let point8 = sheet.getRange('C9').getValue();

  let no9 = sheet.getRange('B10').getValue();
  let point9 = sheet.getRange('C10').getValue();

  let no10 = sheet.getRange('B11').getValue();
  let point10 = sheet.getRange('C11').getValue();

  let no11 = sheet.getRange('B12').getValue();
  let point11 = sheet.getRange('C12').getValue();

  return[no1,no2,no3,no4,no5,no6,no7,no8,no9,no10,no11,point1,point2,point3,point4,
point5,
point6,
point7,
point8,
point9,
point10,
point11];
}