// 블록 스코프
const users = [{
  no: 1,
  name: '마이콜',
  email: 'michol@gmail.com'
}, {
  no: 2,
  name: '둘리',
  email: 'dooly@gmail.com'
}];

// 객체 분해

function print({
  no,
  name,
  email
}) {
  // 템플릿 문자열(es6)
  console.log(`${no}:${name}:${email}`);
}

// 템플릿 문자열
// for..of(es6)
for (var _i = 0, _users = users; _i < _users.length; _i++) {
  let user = _users[_i];
  print(user[0]);
}
