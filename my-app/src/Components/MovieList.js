import React, { useState } from "react";
import './MovieList.css'

const PAGE_MOVIES = 'movies';
const PAGE_MOVIE_SELECTED = 'selected';
// const PAGE_TICKETS = 'tickets';
// const PAGE_SEATING = 'seating';

function MovieList(){

const [movies] = useState([
    {
        name: "IRON MAN",
        description: "An industrialist, genius inventor, and consummate playboy, he is CEO of Stark Industries and chief weapons manufacturer for the U.S. military. Director Jon Favreau felt that Downey's past made him an appropriate choice for the part[6] and that the actor could not only make Stark a likable asshole, but also portray an authentic emotional journey, once he had won over the audience.[7] Favreau was also attracted to Downey because of his performance in Kiss Kiss Bang Bang. Downey frequently spoke with that film's director, Shane Black, about the script and dialogue in Iron Man.[8] Downey had an office next to Favreau during pre-production, which allowed him greater involvement in the screenwriting process,[9] especially when it came to adding humor to the film.[10] Downey explained, What I usually hate about these [superhero] movies [is] when suddenly the guy that you were digging turns into Dudley Do-Right, and then you're supposed to buy into all his 'Let's go do some good!' That Eliot Ness-in-a-cape-type thing. What was really important to me was to not have him change so much that he's unrecognizable. When someone used to be a schmuck and they're not anymore, hopefully they still have a sense of humor.[11] To get into shape, Downey spent five days a week weight training and practiced martial arts,[6] which he said benefited him because it's hard not to have a personality meltdown ... after about several hours in that suit. I'm calling up every therapeutic moment I can think of to just get through the day.",
        rating: 92,
        image: "https://images.poster24x36.org/l-m/ironman.jpg",
    },
    {
        name: "THE INCREDIBLE HULK",
        description: "At Culver University in Virginia, General Thaddeus Thunderbolt Ross meets with Dr. Bruce Banner, the colleague and boyfriend of his daughter Betty, regarding an experiment that Ross claims is meant to make humans immune to gamma radiation. The experiment—part of a World War II-era super-soldier program that Ross hopes to recreate—fails. The exposure to gamma radiation causes Banner to transform into the Hulk for brief periods of time, whenever his heart rate rises above 200 beats per minute. The Hulk destroys the lab and surrounding area, killing several people inside and injuring the General and Betty, and others outside. Banner becomes a fugitive from the U.S. military and Ross, who wants to weaponize the Hulk.",
        rating: 92,
        image: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg",
    },
    {
        name: "IRON MAN 2",
        description: "In Russia, the media covers Tony Stark's disclosure of his identity as Iron Man. Ivan Vanko, whose father, Anton Vanko, a former Stark Industries employee, has just died, sees this and begins building a miniature arc reactor similar to Stark's. Six months later,[N 2] Stark is a superstar and uses his Iron Man suit for peaceful means, resisting government pressure to sell his designs. To continue the legacy of his father Howard, he reinstitutes the Stark Expo in New York City's Flushing Meadows Corona Park.",
        rating: 92,
        image: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    },
    {
        name: "CIVIL WAR",
        description: "In 1991, the brainwashed super-soldier James Bucky Barnes is dispatched from a Hydra base in Siberia to intercept an automobile carrying a case of super-soldier serum. In the present day, approximately one year after Ultron is defeated by the Avengers in the nation of Sokovia,[N 1] Steve Rogers, Natasha Romanoff, Sam Wilson, and Wanda Maximoff stop Brock Rumlow from stealing a biological weapon from a lab in Lagos. Rumlow blows himself up, attempting to kill Rogers. Maximoff telekinetically diverts the explosion, accidentally destroying a nearby building and killing several Wakandan humanitarian workers in the process.",
        rating: 92,
        image: "http://nuggettheatre.com/wp-content/uploads/2016/05/Captain-America-Civil-War-movie-poster.jpg",
    }
])

const [page, setPage] = useState(PAGE_MOVIES);

const navigateTo = (nextPage) => {
    setPage(nextPage);
  }

  const getMovies = () => {
    return movies.filter(
      (movie) => movie === movie
    );
  }

  const movieSelected = (itemSelected) => {
    navigateTo(PAGE_MOVIE_SELECTED);

    let findMovie = movies.find(
        (item) => itemSelected.name === item.name
    );
    if (findMovie){
        renderSelectedMovie(itemSelected);
    }
}

const renderMovies = () => (
   <>
        <h1 className="movieHead">Movies List</h1>

        <div className="movies">
        {getMovies().map((movie,idx) => (

        <div className="movie" key ={idx}>

        <h3 className="text">{movie.name}</h3>
        <h4 className="text">{movie.rating}</h4>
        <p>
            <img src={movie.image} alt={movie.name} />
        </p>
        </div>
        ))}
        </div>
    </>
);

const renderSelectedMovie = (itemSelected) => (

    <div>

            <div>
            <p>
                {itemSelected.description}
            </p>
            </div>
            ))}
    </div>

);


    return (

    <div className="EveningCommerce">
      {/* <h1>items</h1> */}
      <header>
      </header>
      {page === PAGE_MOVIES && renderMovies()}
      {page === PAGE_MOVIE_SELECTED && movieSelected()}

    </div>
      );
}

export default MovieList;