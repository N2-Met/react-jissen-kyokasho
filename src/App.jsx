import { getAllByLabelText } from "@testing-library/react";
import { ColoredMessage } from "./components/ColoredMessage";


export const App = () => {

    //ボタンを押したときの動作
    const onClickButton = () => {
        alert();
    }

    return (
        <>
            <h1 style={{ color: "red" }}> Hello, hello, hello,hello</h1>
            <h1 style={{ color: "#ccffcc" }}> oshiriMaster</h1>
            < ColoredMessage color="blue">お元気ですか</ColoredMessage>
            < ColoredMessage color="pink">元気です</ColoredMessage>

                <button onClick={onClickButton}>押せ！！！</button>
                <br></br>
                <button onClick={onClickButton}>押すな！！！</button>
            </>
            );
};


