export default function RSVP() {
  return (
    <form className="flex flex-col items-center text-center">
      <input type="text" placeholder="Navn" className="input m-2" />
      <input type="text" placeholder="Epost" className="input m-2" />
      <input type="text" placeholder="Telefon" className="input m-2" />
      <input type="text" placeholder="Antall personer" className="input m-2" />
      <input type="text" placeholder="Kommentar" className="input m-2" />
      <button className="input m-2">Send</button>
    </form>
  );
}
