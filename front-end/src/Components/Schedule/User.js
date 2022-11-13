import { Link } from 'react-router-dom'
import './User.css'

/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const User = ([ user ]) => {
  // this component expects to be passed all the details of the message it should display
  // format the date of the message nicely
  const date = new Date(user.createdAt).toLocaleDateString()
  const time = new Date(user.createdAt).toLocaleTimeString()

  return (
    <>
      <article className="User-article">
        <h2>
          <Link to={`/users/${user._id}`}>{user.name}</Link>
        </h2>
        <p>{user.user}</p>
        <time>
          {date} at {time}
        </time>
      </article>
    </>
  )
}

// make this component available to be imported into any other file
export default User