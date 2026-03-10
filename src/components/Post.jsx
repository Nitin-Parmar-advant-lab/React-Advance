import { Link } from "react-router-dom";
import classes from "./Post.module.css"

export default function Post({ id, author, body }) {
    // const choseName = Math.random() > 0.5 ? NAMES[0] : NAMES[1];

    return (
        <li className={classes.post}>
            {/* <h1>{choseName}</h1>
            <p>React.js is awesome!</p> */}
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </Link>
        </li>
    );
}
