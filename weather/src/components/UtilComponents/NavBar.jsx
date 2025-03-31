function NavBar() {
    function hideNav(e) {
        const content = e.currentTarget.nextElementSibling;
        content.classList.toggle('dropdown-visible');
    }
    return (
        <div className='nav-bar'>
            <button className='dropdown-button' onClick={(e) => hideNav(e)}>
                Menu
            </button>
            <nav className='dropdown-content'>
                <ul>
                    <li>
                        <a href="./todo">Task List</a>
                    </li>
                    <li>
                        <a href='./tictactoe'>Tic Tac Toe</a>
                    </li>
                    <li>
                        <a href='./indecision'>Indecision</a>
                    </li>
                    <li>
                        <a href='./notes'>Notes</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;