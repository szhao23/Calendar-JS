window.onload = function () {
  generateCalendar();
};

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  // Today's Date
  const currentDate = new Date();
  // Get this Month
  const month = currentDate.getMonth();
  // Get this Year
  const year = currentDate.getFullYear();

  // Get the First Day of the Month
  const firstDayOfMonth = new Date(year, month, 1);
  //  Get the Last Day of the Month
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Get the First Day of the Week
  const firstDayOfWeek = firstDayOfMonth.getDay();
  //   Get Total Days
  const totalDays = lastDayOfMonth.getDate();

  for (let i = 0; i < firstDayOfWeek; i++) {
    let blankDay = document.createElement("div");
    calendar.appendChild(blankDay);
  }

  for (let day = 1; day <= totalDays; day++) {
    let daySquare = document.createElement("div");
    daySquare.className = "calendar-day";
    daySquare.textContent = day;
    daySquare.id = `day-${day}`;
    calendar.appendChild(daySquare);
  }
}
