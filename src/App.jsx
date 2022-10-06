import { getAllByLabelText } from "@testing-library/react";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";



export const App = () => {

    console.log ("レンダリング")

    //Stateの定義
    const [num, setNum] = useState(0);

    //ボタンを押したときの動作
    const onClickButton = () => {
        setNum(num + 1);
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
            <p>{num}</p>
        </>
    );
};


