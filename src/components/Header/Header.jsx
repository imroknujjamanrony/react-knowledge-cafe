import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div className="flex gap-3 justify-between w-11/12 mx-auto py-8 items-center border-b-2">
      <h1 className="text-4xl text-green-700 font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
