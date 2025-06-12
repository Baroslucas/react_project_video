import { Btn } from "../components/Btn";
import { Logo } from "../components/Logo";
import { MainSearchBar } from "../components/MainSearchBar";
import { ShowDescription } from "../components/showDescription";
import { ShowCarousel } from "../components/ShowCarousel";
import { PagesBackground } from "../components/PagesBackground";


export function HomePage() {

    return (
        <>
            <div>
                <PagesBackground />
                <Logo/>
                <MainSearchBar/>
                <Btn iconSrc='../assets/img/signIn_icon.png' alt='Bouton connexion' label='Sign in' />
                <Btn iconSrc='../assets/img/register_icon.png' alt='Bouton enrengistrement' label='register' />
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