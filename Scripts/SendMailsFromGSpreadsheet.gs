function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2;  // First row of data to process ２行目から開始
  var numRows = 6;   // Number of rows to process 練習は６行
  // Fetch the range of cells C2:D4
  var dataRange = sheet.getRange(startRow, 3, numRows, 4)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var emailAddress = row[0];  // First column
    var message = row[1];       // Second column
    var subject = "Mission Day ISHINOMAKI passcode, Sending emails from a Spreadsheet";
    MailApp.sendEmail(emailAddress, subject, message);
  }
}