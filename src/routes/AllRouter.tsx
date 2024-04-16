import {Routes, Route} from 'react-router-dom'
import { MovieDetails, MovieList, Search, PageNotFound } from '../pages'

const AllRoutes = () => {
    return (
        <div className='dark:bg-darkbg'>
            <Routes>
                <Route path='' element={<MovieList apiPath='movie/now_playing' title='Move Info'/>}/>
                <Route path='/movie/:id' element={<MovieDetails title='Move Details' /> }/>
                <Route path='/movies/popular' element={<MovieList apiPath="movie/popular" title='Popular'/>}/>
                <Route path='/movies/top' element={<MovieList apiPath="movie/top_rated" title='Top Rated'/>}/>
                <Route path='/movies/upcoming' element={<MovieList apiPath="movie/upcoming" title='Up Coming'/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default AllRoutes