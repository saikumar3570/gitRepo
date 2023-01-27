import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repoList: [], pageStatus: 'Loading'}

  componentDidMount() {
    this.getRepoList(languageFiltersData[0].id)
  }

  getRepoList = async ids => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${ids}`,
    )
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const updated = data.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      //   const updated = data.map(() => 1)
      this.setState({repoList: updated, pageStatus: 'Success'})
    } else {
      this.setState({pageStatus: 'Failure'})
    }
  }

  render() {
    const {repoList, pageStatus} = this.state
    return (
      <div className="back">
        <h1 className="p1">Popular</h1>
        <div>
          <ul className="u1">
            {languageFiltersData.map(each => (
              <LanguageFilterItem
                details={each}
                key={each.id}
                repo={this.getRepoList}
              />
            ))}
          </ul>
        </div>
        {pageStatus === 'Loading' && (
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        )}
        {pageStatus === 'Success' && (
          <div>
            <ul className="u2">
              {repoList.map(each => (
                <RepositoryItem details={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
