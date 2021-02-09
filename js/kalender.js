let kalender = $(`
<div class="month">
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>Feb<br><span style="font-size:18px">2021</span></li>
  </ul>
</div>
<ul class="weekdays">
  <li>Mån</li>
  <li>Tis</li>
  <li>Ons</li>
  <li>Tor</li>
  <li>Fre</li>
  <li>Lör</li>
  <li>Sön</li>
</ul>

<ul class="days" id="days"></ul>`);

$('.calendarDiv').append(kalender);

function createCalendarDays() {
  let monthDays = { '0': 31, '1': 28, '2': 31, '3': 30, '4': 31, '5': 30, '6': 31, '7': 31, '8': 30, '9': 31, '10': 30, '11': 31 };
  let dateObj = new Date(); //returns current date
  let monthName = dateObj.getMonth();
  //console.log(monthName);
  let getNumberOfDays;
  if (monthName === monthDays.key) {
    console.log(monthDays.key);
    getNumberOfDays = this(value);
  }
    
  for (let i = 1; i < getNumberOfDays;) {
    let $day = $(`<li>${i}</li>`);
    i++;
    $('#days').append($day);
  }
}

