import { reactive } from 'vue';
export const store = reactive({
    apiKeys: 'a8f3b6f9513218c50175fe4adfab3d55',
    apiMovie: 'https://api.themoviedb.org/3/search/multi?api_key=a8f3b6f9513218c50175fe4adfab3d55&language=it-IT&query=',
    flagApi: 'https://countryflagsapi.com/png/ae',
    movieArr: [],
    loading: true,
    inputText: '',
    actorApi: 'https://api.themoviedb.org/3/movie/25606/credits?api_key=a8f3b6f9513218c50175fe4adfab3d55&language=en-US'
})