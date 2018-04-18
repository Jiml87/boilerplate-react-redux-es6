import daggy from 'daggy'

const RemoteDataInt = daggy.taggedSum('RemoteData', {
    NotAsked: [],
    Loading: [],
    Failed: ['error'],
    Updated: [],
    Succeeded: [],
})

export const RemoteData = RemoteDataInt //eslint-disable-line
