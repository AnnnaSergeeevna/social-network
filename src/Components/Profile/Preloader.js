import classes from './Preloader.module.css';
import preloader from '../Common/Pusheen.gif';
let Preloader = (props) => {
    return <div className={classes.pusheen}> 
    <img src={preloader} /> 
    </div>
}
export default Preloader;