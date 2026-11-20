MATHEMATIC ZONE — ATTENDANCE PWA UPDATE

WHAT'S INCLUDED
- Add or edit students.
- QR cards are generated automatically when students are saved.
- QR content is the student's roll number only.
- Check-in only: first scan marks Present; repeat scans say Already present.
- No check-out field or check-out time.
- Student CSV import.
- Monthly attendance report, edit/delete individual records.
- Export attendance CSV and full JSON backup/restore.
- Clear selected month or all attendance after confirmation.
- PWA shell caching for offline use after the first successful online load.

DEPLOY
1. Unzip this folder.
2. Open your GitHub repository.
3. Upload/replace index.html, manifest.json, sw.js and README.txt in the repository root.
4. Commit the changes.
5. Open the GitHub Pages website in Chrome, refresh it, then use Chrome menu > Install app / Add to Home screen.
6. Open the app once while online so the app and QR library can load and cache.

IMPORTANT LIMITATIONS
- QR generation uses a QRCode.js library from a CDN. First load / first QR generation needs internet. After it has loaded and been cached, it may work offline; test before relying on it.
- Camera scanning uses the browser BarcodeDetector API, which is not available in every Android browser. If unsupported, enter the roll number manually.
- Camera requires HTTPS and permission.
- Data is stored only in this browser on this phone using IndexedDB. It is not automatically sent to Google Sheets or another phone.
- Export a JSON backup regularly. Browser data clearing, phone loss, or browser changes can remove records.
- The Admin area is not protected by a secure login. This is a learning/prototype version, not a production-ready school system.
- Use fictional test data while testing. Get academy approval before entering real student information, and do not upload student lists to a public GitHub repository.
- A QR code identifies a roll number; it does not independently verify which person is holding it. Staff supervision is still needed.
