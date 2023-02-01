import Flag from '../src/american-flag/flag'
import RandomAmendment from './constitution/rand_amendments';
import Song from './audios/yankee.mp3';

const App = () => {
	const playMusic = () => {
		const newSong = new Audio(Song);
		newSong.loop = true;
		newSong.play();
	}

	playMusic(); 

	return (
		<div className='mainDiv'>
			<Flag/>
			<RandomAmendment className='amendment'/>
		</div>
	)
}

export default App;