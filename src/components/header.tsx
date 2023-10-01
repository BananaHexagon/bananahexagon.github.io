// import "./header.css"

export const Header = () => (
    <div id="header">
        <a href="/">
            <img src="/normal_icon.png" />
        </a>
        <ul>
            <li>Info
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/credit">Credit</a></li>
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
