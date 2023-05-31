import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {

    const handleClick = () => {
        document.getElementById('right').style.display = 'none';
        document.getElementById('left').style.display = 'block';
        // console.log({left:'block', right:'none'})
    }

    const onMenuClick = () => {
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        if ((right.style.display === 'none') && (left.style.display = 'block')) {
            left.style.display = 'none';
            right.style.display = 'block';
            // console.log({left:'none', right:'block'})

        }
    }

    return (
        <>
            <div className="fixed-header">
                <div className="row contacts">
                    <div className='column'>
                        <span > Tel: +25078XXXXXXX</span>
                    </div>
                    <div className='column'>
                        <span >Email: names@example.com</span>
                    </div>
                </div>

                <div className='menu'>
                    <div onClick={onMenuClick} className='left' id='left'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <div className='right' id='right'>
                        <div class="hamburger-menu" onClick={handleClick}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Header;
