import { Btn } from "../components/Btn";
import { Logo } from "../components/Logo";
import { MainSearchBar } from "../components/MainSearchBar";
import { ShowDescription } from "../components/ShowDescription";
import { ShowCarousel } from "../components/ShowCarousel";
import { PagesBackground } from "../components/PagesBackground";
import signInIcon from '../assets/img/signIn_icon.png'
import registerIcon from '../assets/img/register.png'


export function HomePage() {

    return (
        <>
            <div>
                <PagesBackground />
                <Logo/>
                <MainSearchBar/>
                <Btn iconSrc={signInIcon} alt='Bouton connexion' label='Sign in' />
                <Btn iconSrc={registerIcon} alt='Bouton enrengistrement' label='register' />
            </div>
            <div>
                <ShowDescription/>
            </div>
            <div>
                <ShowCarousel/>
            </div>
        </>
    )
}