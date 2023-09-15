import { SOCIAL } from '../../shared/SOCIAL';

const SocialButtons = () => {
    return (
        <>
            {SOCIAL.map((social) => {
                const { id, url, icon, className } = social;
                return (
                    <a
                        key={id}
                        href={url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={className}
                    >
                        <i className={icon}></i>
                    </a>
                );
            })}
        </>
    );
};

export default SocialButtons;
