export default function OpenWhatsApp(props) {
  let number = "+6283184740556".replace(/[^\w\s]/gi, "").replace(/ /g, "");
  let url = `https://web.whatsapp.com/send?phone=${number}`;
  url += `&text=${encodeURI(props.pesan)}&app_absent=0`;
  window.open(url);
}
