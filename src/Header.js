import'./Header.css'
import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return ( 
        <div className='header'>
            <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />



            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon' />
                {/* logo */}
            </div>
            

            <div className='header__nav'>

                <div className='header__option'>
                    <span className='header__optionLineOne'>helloo guest</span>
                    <span className='header__optionLineTwo'>sign in</span>
                </div>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Return</span>
                    <span className='header__optionLineTwo'>& order</span>
                </div>
                
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
            </div>




        </div>
    )
}

export default Header;
