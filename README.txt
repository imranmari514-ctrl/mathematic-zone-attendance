MATHEMATIC ZONE ATTENDANCE — FRESH FIXED BUILD

FILES
- index.html
- manifest.json
- sw.js
- README.txt

INSTALL / UPDATE ON GITHUB PAGES
1. Download and extract this ZIP.
2. In your GitHub repository, upload the four files to the repository root.
3. Replace the old files when GitHub asks.
4. Commit the changes.
5. Open your GitHub Pages address in Chrome and refresh. If the old version remains, clear this site's cached data in Chrome or open the site in an Incognito tab once.

FEATURES
- Add/edit/delete students.
- QR code is generated automatically for every saved student.
- QR content is the student's roll number only.
- Camera QR scanning using jsQR and getUserMedia.
- Manual roll-number attendance.
- One Present record per student per day.
- Today's attendance and monthly report.
- CSV export and JSON backup/restore.
- Basic local admin PIN screen lock and clear-month/clear-all tools.

IMPORTANT LIMITATIONS
- The app stores data in IndexedDB on this device/browser only. It does not sync to Google Sheets or other phones.
- The admin PIN is only a basic local screen lock, NOT secure server-side authentication. Do not store sensitive student information in this starter version.
- The QR and scanner libraries load from a CDN on first visit. Open the app online once after deployment so the service worker can cache them. Camera requires HTTPS (GitHub Pages provides HTTPS) and camera permission.
- Some browsers/phones may block camera access. Manual roll-number entry is included as a fallback.
- Export JSON backups regularly. Clearing browser data or losing the phone can erase records.
- Test with fictional students before using real student records. Get academy permission and have an adult/academy administrator oversee any real student data.
