export default function signUpUser(firstName, lastName) {
  const promise = new Promise((resolve, reject) => {
    resolve({
      firstName,
      lastName,
    });
  });
  return promise;
}
