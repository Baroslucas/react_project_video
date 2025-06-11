import LogoImg from '../assets/img/logo.png'

export function Logo() {
    return (
        <div>
            <img src={LogoImg}></img>
            <p>Watowatch</p>
            <p>Find a show you may like</p>
        </div>
    )
}