function ProfileCard({title, handle, image, description}){
    return (
    <div className='card'>
        <div>
            <figure class="image is-1by1">
                <img className='card-image' src={image} alt='pda logo'/>
            </figure>
        </div>
        <div className='card-content'>
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
                <div className="content">
                    <div>{description}</div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProfileCard;