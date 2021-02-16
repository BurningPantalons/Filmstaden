
async function readSalongJson() {
  let jsonSalong = await $.getJSON("/json/salonger.json");
  console.log(jsonSalong);
  showSalongerAsHtml(jsonSalong)
}

async function readVisiningJson() {
  let jsonVisningar = await $.getJSON("/json/visningar.json");
  let result = [];
  for (let i in jsonVisningar) {
    result.push(jsonVisningar[i]);
  }
  console.log(result);
}




