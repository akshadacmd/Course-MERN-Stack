//Chaining (?.)
//It checks null values
const payload = {
  user: {
    id: 102,
    name: "Jiya"
  }
};

console.log(payload?.user?.profile?.city);  