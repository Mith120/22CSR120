import './stockpage.css';
function slot1()
{
    return(
        <div>
            <p>Prices of the stock over the specified time frame 12:00am - 1:00am</p>
        </div>
        );
}
function slot2()
{
    return(
        <div>
            <p>Prices of the stock over the specified time frame 1:00am - 2:00am</p>
        </div>
        );
}
function Stock() {
    return (
      <div>
        <h1 className="heading1"> STOCKS </h1>
        <h3 className="slot">Time Slots </h3>
        <div className="button">
            <button onClick={slot1()}>
                12:00am - 1:00am
            </button>
            <button onClick={slot2()}>
                1:00am - 2:00am
            </button>
            <button onClick={'http://20.244.56.144/evaluation-service/stocks/:ticker?minutes=m'}>
                2:00am - 3:00am
            </button>
        </div>
        <div>
             <p>prices of the stock over the specified time frame</p>
        </div>
      </div>
    );
  }
 export default Stock;