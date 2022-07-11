import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import Tilt from 'react-tilt'
import './Brain.css'
 
const Brain = () => {
    return (
        <Tilt className="Tilt" options={{ max : 25, perspective: 1000, speed: 200,
         transition: true ,
         easing: "cubic-bezier(.03,.98,.52,.99)"}} style={{ height: 150, width: 100 }} >
            <div className='brain'>
                <PsychologyOutlinedIcon />
            </div>
        </Tilt>
    );
};

export default Brain;