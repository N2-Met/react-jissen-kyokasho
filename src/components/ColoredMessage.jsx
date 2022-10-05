export const ColoredMessage = (props) => {
    console.log(props);// {color:"blue",message:"お元気ですか"}

    const contentStyle = {
        color: props.color,
        fontSize: "20px" //font-sizeではない。
    };

    return <p style={contentStyle} >{props.children}</ p>;

};
