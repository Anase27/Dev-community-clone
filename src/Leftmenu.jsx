import { Icon } from '@iconify-icon/react';

const navMainContent = [
    { title: 'Home', id: 1, icon:"twemoji:house", type:"main" },
    { title: 'Podcasts', id: 3, icon:"twemoji:studio-microphone", type:"main" },
    { title: 'Videos', id: 4, icon:"twemoji:film-projector", type:"main" },
    { title: 'Tags', id: 5, icon:"twemoji:label", type:"main" },
    { title: 'FAQ', id: 6, icon:"twemoji:light-bulb", type:"main" },
    { title: 'Forem Shop', id: 7, icon:"twemoji:shopping-bags", type:"main" },
    { title: 'Advertise on DEV', id: 8, icon:"twemoji:red-heart", type:"main" },
    { title: 'About', id: 9, icon:"skill-icons:devto-dark", type:"main" },
    { title: 'Contact', id: 10, icon:"twemoji:postal-horn", type:"main" },
    { title: 'Guides', id: 11, icon:"twemoji:open-book", type:"main" },
    { title: 'Software Comparisons', id: 12, icon:"twemoji:thinking-face", type:"main" },
    
];
const navOtherContent = [
    { title: 'Code of Conduct', id: 1, icon:"twemoji:thumbs-up",type:"other" },
    { title: 'Privacy Policy', id: 2, icon:"twemoji:nerd-face",type:"other" },
    { title: 'Terms of use', id: 3, icon:"twemoji:eyes",type:"other" },
];
const socials = [
    {title: 'X',id:1, icon:"pajamas:x"},
    {title: 'facebook',id:2, icon:"fa:facebook-official"},
    {title: 'github',id:3, icon:"bi:github"},
    {title: 'instagram',id:4, icon:"formkit:instagram"},
    {title: 'twitch',id:5, icon:"ion:logo-twitch"},
    {title: 'mastodon',id:6, icon:"mdi:mastodon"}
]

function NavList({value}) {
    const listItems = value.map(e =>
        <li key={e.id}>
            <a href="">
                <div className={`left-nav-${e.type}-icon`}><Icon icon={e.icon} /></div>
                <div className={`left-nav-${e.type}-title`}><span>{e.title}</span></div>
            </a>
        </li>
    )
    return (<ul>{listItems}</ul>)
}
function Socials(){
    const listItems = socials.map(e =>
        <li key={e.id}>
            <a href="">
                <div className="nav-socials-icon white-icon"><Icon icon={e.icon} style={{color: 'white'}}/></div>
            </a>
        </li>
    )
    return (<ul>{listItems}</ul>)
}

function Leftmenu(){
    return (
        <>
            <div className="left-main-panel">
                <nav className="left-nav-main-panel">
                    <div className="left-nav-main-titles"><NavList value={navMainContent}></NavList></div>
                </nav>
            </div>
            
            <div className='left-nav-other'>
                <h3>Others</h3>
                <div className="left-other-panel">
                    <nav  className="left-nav-other-panel">
                        <div className="left-nav-other-titles"><NavList value={navOtherContent}></NavList></div>
                    </nav>
                </div>
            </div>
            <div className="left-nav-socials">
                <Socials />
            </div>
        </>
    )
}
export default Leftmenu