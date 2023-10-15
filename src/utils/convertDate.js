export default function convertDate(dateTime) {
  const dataString = dateTime;
  const date = new Date(dataString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
