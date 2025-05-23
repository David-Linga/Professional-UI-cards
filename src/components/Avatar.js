
import AvatarStyle from './AvatarStyle.module.css'
export default function Avatar(props){
        return(
                <div className={AvatarStyle.avatar}>
                        <img src={props.imageUrl}
                        alt={props.altText}></img>
                </div>
        );
}