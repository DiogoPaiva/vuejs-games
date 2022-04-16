export function setTimer(start?: boolean, stop?: boolean) {
  let time: number = 0;

  setTimeout(() => {
    time += 1;
  }, 1000);

  console.log("time in seconds");
}
// WIP
export function getTimeFormat(seconds: number) {
  /* const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const stringTime = hours + ":" + minutes + ":" + seconds;*/
  return new Date(seconds * 1000).toUTCString();
}
