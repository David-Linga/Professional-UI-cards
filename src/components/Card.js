import CardStyle from "./CardStyle.module.css";
import Avatar from "./Avatar";
import Button from "./Button";
export default function NewCards(props) {
  return (
    <div className={CardStyle.cardContainer}>
      <div classNme={CardStyle.newcards}>
        <h1>{props.title}</h1>

        <div className={CardStyle.cards}>
          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>

          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>

          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>
          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>
          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>

          <div className={CardStyle.card}>
            <Avatar
              imageUrl={props.imageUrl}
              altText={`${props.name}'s avatar`}
            ></Avatar>

            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <Button text="View Profile" color="purple" size="large"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
