import { LOGO_URL } from './utils/constants'
const Header = () => {
    return (
        <div className="header" 
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: '0 0 6px rgba(0,0,0,0.1)',
                alignItems: 'center'
                
            }}>
            <div className="logo-container">
                <img className="logo" 
                width="100px"
                src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul style={{
                    display: 'flex',
                    listStyle: 'none',
                   
                }}>
                    <li style={{ padding: '0 20px', display: 'flex'}}>Home</li>
                    <li style={{ padding: '0 20px', display: 'flex'}}>About Us</li>
                    <li style={{ padding: '0 20px', display: 'flex'}}>Contact Us</li>
                    <li style={{ padding: '0 20px', display: 'flex'}}>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header