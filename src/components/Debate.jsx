import classes from "./debate.module.css";

const Debate = ({ data }) => {
  return (
    <div className={classes.debateContainer}>
      <h2 className={classes.debateTitle}>{data.title}</h2>
      <p className={classes.debateDetail}>{data.details}</p>
      <div className={classes.interractionsContainer}>
        <span className={classes.debateDate}>{new Date().toDateString()}</span>
        <span className={classes.approveWrapper}>
          <img src="/images/debate/approve.svg" alt="approve" />
          <span>{data.likes}</span>
        </span>
        <span className={classes.disapproveWrapper}>
          <img src="/images/debate/disapprove.svg" alt="approve" />
          <span>{data.likes}</span>
        </span>
        <span className={classes.opinionWrapper}>
          <img src="/images/debate/opinion.svg" alt="approve" />
          <span>{data.opinions}</span>
        </span>
      </div>
    </div>
  );
};
export default Debate;
