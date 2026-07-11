# Manual QA Login Testing

โปรเจกต์ตัวอย่างสำหรับฝึก Manual Software Testing โดยใช้เว็บ Login Demo และเอกสาร Test Management ในรูปแบบ Excel

## Project Overview

โปรเจกต์นี้ทดสอบฟังก์ชัน Login และพฤติกรรมที่เกี่ยวข้อง ได้แก่:

- Login ด้วย Email และ Password ที่ถูกต้อง
- ตรวจสอบกรณีไม่กรอกข้อมูล
- ตรวจสอบ Email หรือ Password ที่ไม่ถูกต้อง
- แสดงและซ่อน Password ด้วย Show / Hide Password

## Test Result

- Total Test Cases: 8
- Executed: 8
- Passed: 8
- Failed: 0
- Bugs Found: 0
- Pass Rate: 100%

หมายเหตุ: ผลลัพธ์นี้อ้างอิงจากขอบเขตการทดสอบของ Login ที่ระบุไว้ใน Test Design เท่านั้น

## Project Structure

```text
manual-qa-login-testing/
├─ manual-qa-login-testing.xlsx
├─ evidence/
│  ├─ TC-LGN-008-show-password.png
│  └─ TC-LGN-008-hide-password.png
└─ login-qa-beginner-demo/
   └─ application/
      ├─ index.html
      ├─ dashboard.html
      ├─ script.js
      └─ style.css
```

## How to Run the Web Demo

1. Open the `login-qa-beginner-demo/application` folder.
2. Open `index.html` in a browser.
3. Use the demo account below to test the successful Login flow.

```text
Email: tester@example.com
Password: Test1234!
```

## QA Artifacts

The Excel workbook contains:

- Test Design
- Test Run
- Bug Tracker
- Dashboard
- Test Evidence references

## Scope Note

This is a learning project for Manual QA practice. It is not a production authentication system, and the test result does not represent complete coverage of every possible browser, device, security, or performance condition.
