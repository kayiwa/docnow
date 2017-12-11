import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/*
import { getWebpages, resetWebpages, selectWebpage, deselectWebpage,
         checkArchive, saveArchive } from '../actions/webpages'
import { getQueueStats } from '../actions/queue'
import { getTweetsForUrl, resetTweets } from '../actions/tweets'
*/

import Insights from '../components/Insights/Insights'

const mapStateToProps = (state, ownProps) => {
  return {
    searchId: ownProps.match.params.searchId,
    /*
    webpages: state.webpages,
    total: state.queue.total,
    remaining: state.queue.remaining,
    tweets: state.tweets,
    */
  }
}

const actions = {
  /*
  getWebpages,
  resetWebpages,
  getQueueStats,
  getTweetsForUrl,
  resetTweets,
  selectWebpage,
  deselectWebpage,
  checkArchive,
  saveArchive
  */
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Insights)
