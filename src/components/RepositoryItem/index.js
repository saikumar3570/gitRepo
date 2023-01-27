import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, id, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li>
      <div className="l1">
        <img src={avatarUrl} alt={name} />
      </div>
    </li>
  )
}
export default RepositoryItem
