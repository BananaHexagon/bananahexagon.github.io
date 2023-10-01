const Header = () => (
    <div id="header">
        <ul>
            <li><a href="/">Home</a></li>
            <li>Info
                <ul>
                    <li><a href="/info/about">About</a></li>
                    <li><a href="/info/profile">Profile</a></li>
                    <li><a href="/info/contact">Contact</a></li>
                    <li><a href="/info/credit">Credit</a></li>
                </ul>
            </li>
            <li><a href="/note">Note</a>
                <ul>
                    <li><a href="/note/2023">2023</a></li>
                </ul>
            </li>
            <li>Projects
                <ul>
                    <li><a href="https://github.com/bananahexagon/sugot-lang">Sugot</a></li>
                    <li><a href="/projects">Other</a></li>
                </ul>
            </li>
        </ul>
    </div>
);

export default Header