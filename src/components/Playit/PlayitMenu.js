

const PlayitMenu = (props) => {
    const {url, name} = props
    return(
        <div className="each-menu">
            <img src={url} alt={name} className="menu-img" />
            <p className="menu-name">{name}</p>
        </div>
    
    )
}

export default PlayitMenu;