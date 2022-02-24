import {motion} from 'framer-motion'
function Moive({movie}){
    const imgBaseLink="https://image.tmdb.org/t/p/w500"
    return(
        <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>
            
            <img src={imgBaseLink+movie.backdrop_path} alt="movie_image"/>
            <h2>{movie.title}</h2>
        </motion.div>
    )
}
export default Moive