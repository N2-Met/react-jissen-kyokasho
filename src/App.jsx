import { getAllByLabelText } from "@testing-library/react";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";



export const App = () => {

    console.log("レンダリング")

    //Stateの定義
    const [num, setNum] = useState(0);

    //ボタンを押したときの動作
    const onClickButton = () => {
        setNum(num + 1);
    }

    return (
        <>
            <h1 style={{ color: "silver" }}> Hello, hello, hello,hello</h1>
            <h1 style={{ color: "silver" }}> oshiriMaster</h1>
            < ColoredMessage color="navy">お元気ですか</ColoredMessage>
            < ColoredMessage color="pink">元気です</ColoredMessage>

            <button onClick={onClickButton}>押せ！！！</button>
            <br></br>
            <button onClick={onClickButton}>押すな！！！</button>
            <p>{num}</p>

            {/* テスト用 CssModulesの場合 */}
            <CssModules /> {/* テスト用 CssModulesの場合 */}
            <StyledJsx /> {/*　Styled Jsxの場合 */}
            <StyledComponents /> {/*　StyledComponentsの場合 */}
            <Emotion /> {/*　StyledComponentsの場合 */}
        </>
    );
};


