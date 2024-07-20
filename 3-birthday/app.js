function validAge(birthday) {
  const birthDate = new Date(birthday);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  if (monthDiff === 0 && dayDiff < 0) {
    return age - 1;
  }

  return age >= 14;
}

console.log(validAge('2012-01-01'));
console.log(validAge('2008-01-01'));
console.log(validAge('2010-08-16'));
console.log(validAge('2024-01-01'));