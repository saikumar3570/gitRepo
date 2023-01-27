import './index.css'

const LanguageFilterItem = props => {
  const {details, repo} = props
  const {id, language} = details
  function getRepos() {
    repo(id)
  }
  return (
    <li>
      <button type="button" className="b1" onClick={getRepos}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
