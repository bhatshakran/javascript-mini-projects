const fromInput = document.querySelector("#from_input");
const toInput = document.querySelector("#to_input");

window.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get(
    `http://data.fixer.io/api/symbols?access_key=05e76ab5b54296bd90a5708e0df76da6`
  );
  const keys = Object.keys(res.data.symbols);
  keys.map((el, idx) => {
    const new_option1 = document.createElement("option");
    new_option1.value = el;
    new_option1.textContent = el;
    const new_option2 = document.createElement("option");
    new_option2.value = keys[keys.length - idx - 1];
    new_option2.textContent = keys[keys.length - idx - 1];
    toInput.appendChild(new_option2);
    fromInput.appendChild(new_option1);
  });
});
