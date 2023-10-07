import Debates from "../../components/Debates";
import classes from "./homepage.module.css";

function HomePage() {
  return (
    <div className={classes.HomePage}>
      <h1 className={classes.mainHeading}>Recent Debates</h1>

      <div className={classes.debatesContainer}>
        <Debates />
      </div>
    </div>
  );
}
export default HomePage;
