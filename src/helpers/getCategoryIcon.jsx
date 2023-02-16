import GeneralKnowledgeIcon from '@assets/icons/General Knowledge.svg';
import BooksIcon from '@assets/icons/Books.svg';
import FilmIcon from '@assets/icons/Film.svg';
import MusicIcon from '@assets/icons/Music.svg';
import MusicalsTheatresIcon from '@assets/icons/Musicals & Theatres.svg';
import TelevisionIcon from '@assets/icons/Television.svg';
import VideoGamesIcon from '@assets/icons/Video Games.svg';
import BoardGamesIcon from '@assets/icons/Board Games.svg';
import ScienceNatureIcon from '@assets/icons/Science & Nature.svg';
import ComputersIcon from '@assets/icons/Computers.svg';
import MathematicsIcon from '@assets/icons/Mathematics.svg';
import MythologyIcon from '@assets/icons/Mythology.svg';
import SportsIcon from '@assets/icons/Sports.svg';
import GeographyIcon from '@assets/icons/Geography.svg';
import HistoryIcon from '@assets/icons/History.svg';
import PoliticsIcon from '@assets/icons/Politics.svg';
import ArtIcon from '@assets/icons/Art.svg';
import CelebritiesIcon from '@assets/icons/Celebrities.svg';
import AnimalsIcon from '@assets/icons/Animals.svg';
import VehiclesIcon from '@assets/icons/Vehicles.svg';
import ComicsIcon from '@assets/icons/Comics.svg';
import GadgetsIcon from '@assets/icons/Gadgets.svg';
import JapaneseAnimeMangaIcon from '@assets/icons/Japanese Anime & Manga.svg';
import CartoonAnimationsIcon from '@assets/icons/Cartoon & Animations.svg';

const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
        case 'General Knowledge':
            return GeneralKnowledgeIcon;
        case 'Books':
            return BooksIcon;
        case 'Film':
            return FilmIcon;
        case 'Music':
            return MusicIcon;
        case 'Musicals & Theatres':
            return MusicalsTheatresIcon;
        case 'Television':
            return TelevisionIcon;
        case 'Video Games':
            return VideoGamesIcon;
        case 'Board Games':
            return BoardGamesIcon;
        case 'Science & Nature':
            return ScienceNatureIcon;
        case 'Computers':
            return ComputersIcon;
        case 'Mathematics':
            return MathematicsIcon;
        case 'Mythology':
            return MythologyIcon;
        case 'Sports':
            return SportsIcon;
        case 'Geography':
            return GeographyIcon;
        case 'History':
            return HistoryIcon;
        case 'Politics':
            return PoliticsIcon;
        case 'Art':
            return ArtIcon;
        case 'Celebrities':
            return CelebritiesIcon;
        case 'Animals':
            return AnimalsIcon;
        case 'Vehicles':
            return VehiclesIcon;
        case 'Comics':
            return ComicsIcon;
        case 'Gadgets':
            return GadgetsIcon;
        case 'Japanese Anime & Manga':
            return JapaneseAnimeMangaIcon;
        case 'Cartoon & Animations':
            return CartoonAnimationsIcon;
        default:
            return null;
    }
};

export default getCategoryIcon;
