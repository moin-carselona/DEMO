import { AsideMenuItem } from "../../AsideMenuItem"
import { AsideMenuItemWithSub } from "../../AsideMenuItemWithSub"
export const ReactsInterviewRoutes = () => {
    return <AsideMenuItemWithSub
        to='/react/interview/questions'
        title='REACT INTERVIEW Q&A'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
    >
        <AsideMenuItemWithSub to='/react/interview/questions/topics' title='topics' hasBullet={true}>
            <AsideMenuItem to='/react/interview/questions/topics/overview' title='Overview' hasBullet={true} />
            <AsideMenuItem to='/react/interview/questions/topics/projects' title='Projects' hasBullet={true} />
            <AsideMenuItem to='/react/interview/questions/topics/campaigns' title='Campaigns' hasBullet={true} />
            <AsideMenuItem to='/react/interview/questions/topics/documents' title='Documents' hasBullet={true} />
            <AsideMenuItem
                to='/react/interview/questions/topics/connections'
                title='Connections'
                hasBullet={true}
            />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to='/react/interview/questions/wizards' title='Wizards' hasBullet={true}>
            <AsideMenuItem
                to='/react/interview/questions/wizards/horizontal'
                title='Horizontal'
                hasBullet={true}
            />
            <AsideMenuItem to='/react/interview/questions/wizards/vertical' title='Vertical' hasBullet={true} />
        </AsideMenuItemWithSub>
    </AsideMenuItemWithSub>
}