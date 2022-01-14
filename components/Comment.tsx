import { COMMENT } from '../types/types'

const Comment: React.FC<COMMENT> = ({ id, name, body }) => {
  return (
    <li>
      <p>
        {id}
        {': '}
        {body}
      </p>
      <p className="text-center mt-3 mb-10">
        {'by '}
        {name}
      </p>
    </li>
  )
}
export default Comment
