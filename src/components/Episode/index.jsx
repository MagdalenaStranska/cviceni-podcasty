import './style.css';

export const Episode = ({ num, title, guest }) => {
  return (
    <div className="episode">
      <div className="episode__num">{num}</div>
      <div className="episode__body">
        <h2 className="episode__title">{title}</h2>
        <div className="episode__guest">{guest}</div>
      </div>
    </div>
  );
};