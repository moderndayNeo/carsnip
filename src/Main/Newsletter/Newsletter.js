import React from 'react'
import './Newsletter.css'
import SocialLink from './SocialLink/SocialLink'

export default function Newsletter() {
    return (
        <section className="Newsletter">
            <div className="Social">
                <SocialLink
                    href1="https://linkedin.com/carsnip"
                    title1="Linkedin"
                    path1="M38,2c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H14C7.4,26,2,20.6,2,14C2,7.4,7.4,2,14,2H38 M38,0H14 C6.3,0,0,6.3,0,14v0c0,7.7,6.3,14,14,14h24c7.7,0,14-6.3,14-14v0C52,6.3,45.7,0,38,0L38,0z"
                    path2="M34.5,9c-0.6,0.3-1.3,0.5-2,0.6c0.7-0.4,1.3-1.1,1.5-1.9c-0.7,0.4-1.4,0.7-2.2,0.8c-0.7-0.7-1.6-1.1-2.6-1.1 c-1.9,0-3.5,1.6-3.5,3.5c0,0.3,0,0.5,0.1,0.8c-2.9-0.1-5.5-1.5-7.2-3.6c-0.3,0.5-0.5,1.1-0.5,1.8c0,1.2,0.6,2.3,1.5,2.9 c-0.6,0-1.1-0.2-1.6-0.4c0,0,0,0,0,0.1c0,1.7,1.2,3.1,2.8,3.4c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.5,0-0.7-0.1 c0.5,1.4,1.7,2.4,3.3,2.4c-1.2,0.9-2.7,1.5-4.3,1.5c-0.3,0-0.6,0-0.8-0.1c1.5,1,3.4,1.5,5.3,1.5c6.4,0,9.9-5.3,9.9-9.9 c0-0.2,0-0.3,0-0.5C33.4,10.3,34,9.7,34.5,9z"
                />
                    <SocialLink
                        href1="https://facebook.com/carsnip"
                        title1="Facebook"
                        path1="M38,2c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H14C7.4,26,2,20.6,2,14C2,7.4,7.4,2,14,2H38 M38,0H14 C6.3,0,0,6.3,0,14v0c0,7.7,6.3,14,14,14h24c7.7,0,14-6.3,14-14v0C52,6.3,45.7,0,38,0L38,0z"
                        path2="M24.5,20.9l0-6.2h-2.5v-2.5h2.5v-1.6c0-2.3,1.4-3.4,3.5-3.4c1,0,1.8,0.1,2.1,0.1v2.4l-1.4,0 c-1.1,0-1.3,0.5-1.3,1.3v1.1h3.3l-1.2,2.5h-2v6.2H24.5z"
                    />
                <SocialLink
                    href1="https://twitter.com/carsnip"
                    title1="Twitter"
                    path1="M38,2c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H14C7.4,26,2,20.6,2,14C2,7.4,7.4,2,14,2H38 M38,0H14 C6.3,0,0,6.3,0,14v0c0,7.7,6.3,14,14,14h24c7.7,0,14-6.3,14-14v0C52,6.3,45.7,0,38,0L38,0z"
                    path2="M24.3,12.2h2.1v1h0c0.3-0.6,1-1.2,2.1-1.2c2.3,0,2.7,1.5,2.7,3.4v3.9h-2.2v-3.5c0-0.8,0-1.9-1.2-1.9 c-1.2,0-1.3,0.9-1.3,1.8v3.5h-2.2V12.2z"
                    path3="M20.7,12.2h2.2v7.2h-2.2V12.2z M21.8,8.6c0.7,0,1.3,0.6,1.3,1.3c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3 C20.5,9.2,21.1,8.6,21.8,8.6"
                />
            </div>
        </section>
    )
}
