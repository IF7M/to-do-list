

//Getting the date of the local machein.
exports.getDate = function (){

const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let dayAr = today.toLocaleDateString("ar-SA", options);
let dayEn = today.toLocaleDateString("en-SA", options);
return (`${dayEn} - ${dayAr}`);

}
// end of get date.
