export function Btn({iconSrc, alt, label}) {
    return <button>
        {iconSrc && (
            <img src={iconSrc} alt={alt} className="" /> 
        )}
        <span>{label}</span>
    </button>
}