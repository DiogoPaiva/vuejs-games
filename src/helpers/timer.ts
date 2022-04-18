// WIP
export function getTimeFormat(seconds: number) {
  /* const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const stringTime = hours + ":" + minutes + ":" + seconds;*/
  return new Date(seconds * 1000).toUTCString();
}
