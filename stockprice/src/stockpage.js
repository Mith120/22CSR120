import './stockpage.css';
function Stock() {
    return (
      <div>
        <h1 className="heading1"> STOCKS </h1>
        <h3 className="slot">Time Slots </h3>
        <div className="button">
            <button >
                12:00am - 1:00am
            </button>
            <button>
                1:00am - 2:00am
            </button>
            <button onClick={'http://20.244.56.144/evaluation-service/stocks/:ticker?minutes=m'}>
                2:00am - 3:00am
            </button>
        </div>
      </div>
    );
  }
 export default Stock;