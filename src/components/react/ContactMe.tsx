export default function ContactMe() {
  const email = "Sir-Thom1702@proton.me";
  const EmailMe = () => {
    window.location.href = `mailto:${email}?subject=Offre de stage/Emplois`;
  };

  return (
    <button
      className=" block  bg-IlluminatingEmerald-normal active:bg-IlluminatingEmerald-pressed hover:bg-IlluminatingEmerald-hover text-neutral-100 hover:text-white py-2 px-4 rounded font-semibold transition-all hover:scale-110 active:scale-90  duration-300 mt-4 lg:inline-block lg:mt-0 mr-4"
      onClick={EmailMe}
    >
      Contactez-moi
    </button>
  );
}
