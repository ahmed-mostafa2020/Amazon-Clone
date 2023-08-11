import Category from "./Category";
import Colors from "./Colors";
import Price from "./Price";

const Sidebar = ({ handleChange, handleChangePrice, handleChangeColor }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChangePrice={handleChangePrice} />
        <Colors handleChangeColor={handleChangeColor} />
      </section>
    </>
  );
};

export default Sidebar;
