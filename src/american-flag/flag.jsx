import Img from './america.gif';
import './flag.css';

const Flag = () => {
	return (
		<div>
			<img alt='american-flag' className='flag' src={Img} />
		</div>
	)
}

export default Flag;