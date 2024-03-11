document.addEventListener("DOMContentLoaded", function () {
  const userContainer = document.getElementById("user-container");
  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userPhone = document.getElementById("user-phone");
  const userThumbnail = document.getElementById("user-thumbnail");
  const refreshButton = document.getElementById("refresh-button");
  refreshButton.addEventListener("click", fetchUserData);
  function fetchUserData() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const firstName = user.name.first;
        // console.log(data);
        const lastName = user.name.last;
        const email = user.email;
        const phone = user.phone;
        const thumbnail = user.picture.large;
        userName.textContent = `${firstName} ${lastName}`;
        userEmail.textContent = `Email: ${email}`;
        userPhone.textContent = `Phone: ${phone}`;
        userThumbnail.src = thumbnail;
        console.log(user);
      })
      .catch((error) => console.log(error));
  }
  window.onload = function () {
    fetchUserData();
  };
});
