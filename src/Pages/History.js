import {HistoryData} from "./HistoryData";
import './Styles/History.css';

const History = () => {
    return (
        <div>
            <div className="history-title">Exploration
                <span>history</span>
            </div>
            <div className="history-block">
                <div className="history-container">

                    {
                    HistoryData.map((item, index) => {
                        return (

                            <li key={index}
                                className="history-data">
                                <span className="history-text">
                                    {
                                    item.text
                                }</span>
                                <span className="history-enText">
                                    {
                                    item.enText
                                }</span>
                                <span className="history-date">
                                    {
                                    item.date
                                }</span>
                                <button className="closeButton"></button>
                            </li>

                        );
                    })
                } </div>
            </div>
        </div>
    );
};

export default History;
