import { ok, equal } from 'assert'
import { memento, closest, saveArchive, get } from '../src/server/wayback'

describe('internet-archive', function() {

  it('should fetch history', async () => {
    const results = await memento('https://inkdroid.org')
    ok(results.length > 0, 'results.length')
    ok(results[0].url, 'url')
    ok(results[0].rel, 'rel')
    ok(results[0].time, 'timestamp')
  })

  it('should get latest', async () => {
    const result = await closest('https://inkdroid.org')
    ok(result.time, 'time')
    ok(result.url, 'url')
  })

  it('should return null', async () => {
    const result = await closest('https://inkdroid.org/lskdjf390jsf')
    equal(result, null)
  })

  it('should archive a url', async () => {
    const t = (new Date).getTime()
    const url = `http://blog.longnow.org/?t=${t}`

    const result1 = await saveArchive(url)
    ok(result1.url, 'result.url')
    ok(result1.time, 'result.time')

    const result2 = await get(url)
    equal(result2.url, result1.url)
    equal(result2.time, result2.time)
  })

})