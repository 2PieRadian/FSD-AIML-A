function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Logged in successfully!");
    }, 1000);
  });
}

function getData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Fetched Data successfully!");
    }, 2000);
  });
}

function calculateData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Calculated Data successfully!");
    }, 1000);
  });
}

function sendSMS() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Sent SMS successfully!");
    }, 2000);
  });
}

function logout() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Logged out successfully!");
    }, 2000);
  });
}

login()
  .then((r) => {
    console.log(r);
    return getData();
  })
  .then((r) => {
    console.log(r);
    return calculateData();
  })
  .then((r) => {
    console.log(r);
    return sendSMS();
  })
  .then((r) => {
    console.log(r);
    return logout();
  })
  .then((r) => {
    console.log(r);
  });
