import classes from "./CssModules.module.scss"


export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>これはCSS Modulesの場合。</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );
};
