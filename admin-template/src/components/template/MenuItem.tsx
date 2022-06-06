
interface MenuItemProps{
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props:MenuItemProps){
    return (
        <li className={`
            hover
        `}>
            {props.icone}
        </li>
    )
}