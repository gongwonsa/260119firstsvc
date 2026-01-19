// script.js

const form = document.getElementById("searchForm");
const studentIdInput = document.getElementById("studentId");
const studentNameInput = document.getElementById("studentName");
const accountIdSpan = document.getElementById("accountId");
const accountPwSpan = document.getElementById("accountPw");

// 예시 데이터 (실제 운영 시 서버로 이동해야 함)
const accounts = [
  {
    studentId: "10101",
    name: "홍길동",
    googleId: "hong10101@school.go.kr",
    googlePw: "pw10101"
  },
  {
    studentId: "10203",
    name: "김철수",
    googleId: "kim10203@school.go.kr",
    googlePw: "pw10203"
  }
];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentId = studentIdInput.value.trim();
  const studentName = studentNameInput.value.trim();

  const result = accounts.find(
    acc => acc.studentId === studentId && acc.name === studentName
  );

  if (result) {
    accountIdSpan.textContent = result.googleId;
    accountPwSpan.textContent = result.googlePw;
  } else {
    accountIdSpan.textContent = "정보 없음";
    accountPwSpan.textContent = "정보 없음";
  }
});
