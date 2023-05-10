import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
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
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

        </>
    );
}
export default Header;
