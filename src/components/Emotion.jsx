/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
    //scssの書き方がそのまま可能な書き方
    const containerStyle = css`
    border: solid 1px #aaa;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

    //インラインスタイルの書き方
    const titleStyle = css({
        //({})内にオブジェクトを書く。インラインスタイル同様、キャメルケースや"文字列"値を記入。
        margin: 0,
        color: "#aaa"
    });


    return (
        <div css={containerStyle}>
            <p css={titleStyle}>これはEmotionの場合。</p>
            <button>ボタン</button>
        </div>
    );
};
