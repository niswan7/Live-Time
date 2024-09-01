function Updatetime() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  const realtime1 = `${hour}`;
  const realtime2 = `${minutes}`;
  const realtime3 = `${second}`;
  document.getElementById("hours").textContent = realtime1;
  document.getElementById("minutes").textContent = realtime2;
  document.getElementById("seconds").textContent = realtime3;
}

Updatetime();
