
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders ={
    'X-RapidAPI-Key': 'b8ab1bdeb3msh7e210cfd959a132p1eddd0jsnd55cb032cfa4',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl ='https://coinranking1.p.rapidapi.com';
const createRequest = (url) =>({
    url, headers:cryptoApiHeaders
})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos: builder.querry({
            querry: ()=> createRequest ('/exchanges')
        })
    })
});
export const{
    useGetCryptosQuerry,
} = cryptoApi;
