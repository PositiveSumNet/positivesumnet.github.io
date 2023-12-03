document.getElementById('btnTest').onclick = function() {
  const code = document.getElementById('txtCode').value;

  fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Accept": "application/vnd.github.raw+json",
      "Authorization": `Bearer ${code}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "psn-test"
    }
  })
  .then((response) => response.json())
  .then((obj) => {
    document.getElementById('btnTest').textContent = obj.login;
  });
  
  return false;
};