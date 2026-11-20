MATHEMATIC ZONE OFFLINE ATTENDANCE - STARTER PROJECT

WHAT THIS VERSION DOES
- Imports a student list from CSV into the gate phone's local browser database.
- Creates a QR code containing only the student's roll number.
- Scans QR codes using the phone camera where the browser supports BarcodeDetector.
- Records one check-in and one check-out per student per local calendar day.
- Stores attendance locally in IndexedDB.
- Exports monthly CSV reports and a full JSON backup.
- Caches the app shell for offline use after the first successful online load.

IMPORTANT LIMITATIONS
- This is a starter build, not a secured production attendance platform.
- It does NOT automatically sync to Google Sheets.
- It does NOT provide staff login/PIN protection yet.
- Camera QR scanning requires HTTPS and browser camera permission.
- QR cards can be copied or shared. Staff supervision is required.
- The phone's clock/time zone is used for date and time. Keep it correct.
- Offline data can be lost if browser storage is cleared or the phone is lost.
- Back up regularly and test with fictional records before real student data.
- Monthly CSV can be imported into Google Sheets; create a separate tab per month there if desired.

SETUP
1. Host these files on an HTTPS static host (for example GitHub Pages).
2. Open the hosted site in Chrome on the Android phone while online.
3. Allow camera permission when prompted.
4. Import a CSV with headers: rollNumber,name,class
5. Add the site to the home screen from Chrome's menu.
6. Open the installed app once while online, then test airplane mode.
7. Create sample QR cards and test check-in/check-out.

CSV EXAMPLE
rollNumber,name,class
TEST001,Sample Student,Grade 8
TEST002,Another Student,Grade 9

ANDROID
Use an up-to-date Chrome browser. Some Android browsers do not support the
BarcodeDetector API; in that case manual roll entry remains available.
For reliable QR scanning, use a compatible current Chrome version and test
the exact phone before academy use.

GOOGLE SHEETS
Use Reports > Export monthly CSV. In Google Sheets, import the CSV and name
the sheet tab with the month, e.g. 2026-11. The existing Apps Script site
is separate from this offline PWA.
