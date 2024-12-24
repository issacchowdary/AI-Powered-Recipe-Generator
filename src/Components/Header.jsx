import ChefClaudeLogo from '../assets/Chef Claude Icon.png'

export default function Header(){
    return(
        <header>
            <img src={ChefClaudeLogo} alt="ChefClaudeLogo"/>
            <span>
                <h1>AI CHEF</h1>
            </span>
        </header>
    )
}