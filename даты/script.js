const formatDate = (date) => {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  year = year.toString().slice(-2);
  month = month < 10 ? "0" + month : month;
  dayOfMonth = dayOfMonth < 10 ? "0" + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let diff = new Date() - date;
  //console.log(diff);
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(diff / 60000);
  //let ms = Date.parse(date);
  //console.log(date);
  //console.log(ms);

  if (diff < 1000) {
    console.log("Прямо сейчас");
    return "Прямо сейчас";
  } else if (sec < 60) {
    console.log(`${sec} секунд назад`);
    return `${sec} секунд назад`;
  } else if (min < 60) {
    console.log(`${min} минут назад`);
    return `${min} минут назад`;
  } else {
    console.log(`${dayOfMonth}.${month}.${year} ${hour}:${minutes}`);
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
};

formatDate(new Date(new Date() - 1)); // "прямо сейчас"

formatDate(new Date(new Date() - 30 * 1000)); // "30 сек. назад"

formatDate(new Date(new Date() - 5 * 60 * 1000)); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
formatDate(new Date(new Date() - 86400 * 4 * 1000));
