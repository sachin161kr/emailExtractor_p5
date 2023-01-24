const input = document.createElement("textarea");
const btn = document.createElement("div");
const output = document.createElement("textarea");

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(input);
  btn.classList.add("btn");
  btn.innerText = "Get Emails";
  document.body.appendChild(btn);
  document.body.appendChild(output);
});

btn.addEventListener("click", function () {
  let txt = input.value;
  console.log(txt);
  let exp = /([a-zA-Z0-9._-]+@+[a-zA-Z0-9._-]+)/gi;
  let temp = txt.match(exp);

  let emails = [];

  for (let i = 0; i < temp.length; i++) {
    if (!emails.includes(temp[i])) {
      emails.push(temp[i]);
    }
  }

  console.log(emails);

  emails = emails.join(",");

  output.innerText = emails;
});
