import { getAllByLabelText } from "@testing-library/react";
import { ColoredMessage } from "./components/ColoredMessage";


export const App = () => {

    //ボタンを押したときの動作
    const onClickButton = () => {
        alert();
    }

    //ピンク用に追加
    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };

    return (
        <>
            <h1 style={{ color: "red" }}> Hello, hello, hello,hello</h1>
            <h1 style={{ color: "#ccffcc" }}> oshiriMaster</h1>
            <p style={contentPinkStyle}> 元気です</p>
            < ColoredMessage />
            <button onClick={onClickButton}>押せ！！！</button>
            <br></br>
            <button onClick={onClickButton}>押すな！！！</button>
        </>
    );
};


