export const ColoredMessage = ({ color, children }) => {

    const contentStyle = {
        color,
        fontSize: "20px" //font-sizeではない。
    };

    return <p style={contentStyle} >{children}</ p>;
};


/*
export const ColoredMessage = (props) => {  //  (props) →  ({ color, children })　も可。
    //Propsの分割代入
    const { color, children } = props;

    const contentStyle = {
        color,    //color:color, を省略記号で記述
        // fontSize: "20px" //font-sizeではない。
    };

    return <p style={contentStyle} >{children}</ p>;  //{children}　・・・　props.childrenを分割代入で省略
};

*/
