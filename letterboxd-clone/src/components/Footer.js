import classes from "../components/Footer.module.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <footer id="page-footer" className={classes['page-footer']}>
      <div className={classes['content-wrap']}>
        <nav className={classes['footer-nav']}>
          <ul>
            <li><a href="/about/">About</a></li>
            <li><a href="/journal/">News</a></li>
            <li className="js-hide-in-app"><a href="/pro/">Pro</a></li>
            <li><a href="/apps/">Apps</a></li>
            <li><a href="https://apple.co/3TfzHVG" target="_blank" rel="noopener noreferrer">Podcast</a></li>
            <li><a href="/year-in-review/">Year in Review</a></li>
            <li><a href="/gift-guide/">Gift Guide</a></li>
            <li><a href="/welcome/">Help</a></li>
            <li><a href="/legal/terms-of-use/">Terms</a></li>
            <li><a href="/api-beta/">API</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>

        <div className={classes.socials}>
          <nav className={classes['social-list']}>
            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://twitter.com/letterboxd" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on X">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg"
                     width="17" height="17">
                  <path fill-rule="nonzero"
                        d="m5.4 0 4 6 5-6h2.1l-.3.4-5.9 6.8 6.5 9.5.2.3h-5.3l-4.3-6.3L2 16.9 2 17H0l.3-.4 6.2-7.2L.3.4 0 0h5.3Zm-1 1.5H2.9l4.9 7 .6.9 4.3 6.1h1.6l-5-7.3-.7-.9-4-5.8Z"></path>
                </svg>
                <span className={classes.label}>X</span>
              </NavLink>
            </div>


            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://www.threads.net/@letterboxd" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on Threads">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg"
                     width="16" height="18">
                  <path fill-rule="nonzero"
                        d="M8.1 0c2.8 0 4.9.9 6.3 2.6.7.9 1.3 1.9 1.6 3v.1l-1.6.4c-.3-1-.7-1.8-1.3-2.4-1.1-1.3-2.8-2-5-2-2.1 0-3.8.7-4.9 2-1 1.2-1.5 3-1.5 5.3s.5 4 1.5 5.3c1.1 1.3 2.8 2 5 2 1.9 0 3.2-.4 4.3-1.5 1-1 1.3-2.4.8-3.5-.2-.5-.6-1-1.1-1.2-.2 1-.5 1.7-1 2.3-.7.8-1.6 1.3-2.8 1.3-1 .1-1.8-.1-2.5-.6A2.8 2.8 0 0 1 4.5 11C4.5 9 6 7.8 8.2 7.6l2.3.1c-.1-.5-.3-.9-.6-1.2-.4-.4-1-.6-1.7-.7-.9 0-1.6.3-2 1H6L4.7 6a4 4 0 0 1 3.5-1.7c2.3 0 3.8 1.4 4 3.8v.2h.2v.1c1.2.5 2 1.3 2.4 2.3.8 1.7.5 3.8-1.1 5.4A7.4 7.4 0 0 1 8 18c-2.7 0-4.8-1-6.2-2.6A10 10 0 0 1 0 9c0-2.7.7-4.8 2-6.4C3.2 1 5.3 0 8 0ZM9 9.3h-.6c-1.4 0-2.1.7-2 1.5 0 .8.9 1.3 2 1.3.6 0 1-.2 1.4-.5.4-.4.7-1 .8-2v-.2A8 8 0 0 0 9 9.3h-.1Z"></path>
                </svg>
                <span className={classes.label}>Threads</span>
              </NavLink>
            </div>


            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://www.facebook.com/letterboxd" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on Facebook">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" width="19" height="19"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.5 0a9.5 9.5 0 0 0-1.48 18.89V12H5.6V9.25h2.42V7.41c0-2.38 1.41-3.7 3.58-3.7 1.04 0 2.13.19 2.13.19v2.33h-1.2c-1.18 0-1.54.74-1.54 1.49v1.53h2.63L13.2 12h-2.21v6.89A9.5 9.5 0 0 0 9.5 0Z"></path>
                </svg>
                <span className={classes.label}>Facebook</span>
              </NavLink>
            </div>

            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://www.instagram.com/letterboxd" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on Instagram">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" width="20" height="20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.12.06c1.07.05 1.8.22 2.43.46.66.26 1.21.6 1.77 1.16.56.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.04.94.06 1.32.06 3.3v1.37c0 1.54 0 2.19-.03 2.77v.22l-.03.58a7.34 7.34 0 0 1-.47 2.43 4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.16c-.64.24-1.36.41-2.43.46l-.61.03h-.23c-.5.02-1.06.03-2.21.03H9.2c-2 0-2.37-.02-3.32-.06a7.34 7.34 0 0 1-2.43-.46 4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77 7.34 7.34 0 0 1-.46-2.43l-.03-.61v-.2A60.9 60.9 0 0 1 0 11.5V8.75C0 7.7.01 7.17.03 6.7v-.2l.03-.61C.1 4.8.28 4.08.52 3.45a4.9 4.9 0 0 1 1.16-1.77A4.9 4.9 0 0 1 3.45.52 7.34 7.34 0 0 1 5.88.06l.61-.03h.2C7.12 0 7.6 0 8.5 0h2.74c1.62 0 2 .02 2.88.06ZM11.02 2H8.97c-1.7 0-2.05.02-2.92.06a5.4 5.4 0 0 0-1.82.33c-.45.18-.78.39-1.12.73-.34.34-.55.67-.73 1.12-.13.35-.3.86-.33 1.82C2.02 6.93 2 7.29 2 8.98v2.04c0 1.7.02 2.05.06 2.92.04.95.2 1.47.33 1.81.18.46.39.78.73 1.13.34.34.67.55 1.12.73.35.13.86.29 1.82.33.83.04 1.2.05 2.7.06h2.47c1.51 0 1.87-.02 2.71-.06a5.4 5.4 0 0 0 1.81-.33c.46-.18.78-.4 1.12-.73.35-.35.56-.67.73-1.13.14-.34.3-.86.34-1.8a49 49 0 0 0 .06-2.72V8.77a49 49 0 0 0-.06-2.71 5.4 5.4 0 0 0-.34-1.82 3.02 3.02 0 0 0-.73-1.12 3.02 3.02 0 0 0-1.12-.73 5.4 5.4 0 0 0-1.81-.33c-.88-.04-1.23-.06-2.93-.06ZM10 4.86a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"></path>
                </svg>
                <span className={classes.label}>Instagram</span>
              </NavLink>
            </div>

            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://www.tiktok.com/@letterboxd" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on TikTok">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" width="17" height="18"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.48 4.32a4.62 4.62 0 0 1-3.92-2.66A4.04 4.04 0 0 1 12.23 0H9.07v11.85c0 1.93-1.19 3.07-2.65 3.07a2.71 2.71 0 0 1-2.04-.9 2.57 2.57 0 0 1-.6-2.1 2.55 2.55 0 0 1 1.26-1.81 2.7 2.7 0 0 1 2.24-.21V6.77a5.92 5.92 0 0 0-4.08.86 5.7 5.7 0 0 0-2.15 2.55 5.53 5.53 0 0 0 1.26 6.16 5.86 5.86 0 0 0 6.33 1.23 5.78 5.78 0 0 0 2.6-2.08c.64-.94.98-2.03.98-3.15V5.96a7.74 7.74 0 0 0 4.25 1.25V4.32Z"></path>
                </svg>
                <span className={classes.label}>TikTok</span>
              </NavLink>
            </div>

            <div className={classes.footerIcon}>
              <NavLink className="trigger tooltip" to="https://www.youtube.com/letterboxdhq" target="_blank"
                 rel="noopener noreferrer" data-original-title="Letterboxd on YouTube">
                <svg className={classes.glyph} aria-hidden="true" role="presentation" width="23" height="16"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.74 0c.61 0 2.33.02 4.11.08l.54.02c1.7.06 3.35.18 4.1.38a2.87 2.87 0 0 1 2.03 2.02c.45 1.67.48 5.04.48 5.46v.08c0 .42-.03 3.8-.48 5.46a2.87 2.87 0 0 1-2.03 2.02c-.75.2-2.4.32-4.1.38l-.54.02c-1.78.07-3.5.08-4.11.08H11.26c-.62 0-2.33-.01-4.11-.08l-.54-.02c-1.7-.06-3.36-.18-4.1-.38A2.87 2.87 0 0 1 .48 13.5C.04 11.9 0 8.68 0 8.1v-.2c0-.58.04-3.79.48-5.4A2.87 2.87 0 0 1 2.5.48c.74-.2 2.4-.32 4.1-.38l.54-.02C8.93.02 10.65 0 11.26 0ZM9 4.57v6.86L15 8 9 4.57Z"></path>
                </svg>
                <span className={classes.label}>YouTube</span>
              </NavLink>
            </div>
          </nav>
        </div>

        <p className={classes.copyright}>
          © Letterboxd Limited. Made by
          <NavLink to="/crew/" className="mute">
            &nbsp;fans&nbsp;
          </NavLink>
          in Aotearoa New Zealand.&nbsp;
          <span className="nobr">
            <NavLink to="https://letterboxd.com/about/film-data/" className="mute">
              Film data&nbsp;
            </NavLink>
            from&nbsp;
            <NavLink to="https://www.themoviedb.org" className="mute">
              TMDb
            </NavLink>.&nbsp;
						<NavLink to="#" className="mute mobile-site-switch" data-use-mobile-site="yes">
              Mobile&nbsp;site
            </NavLink>.&nbsp;
          </span>
          <span className="recap" >
            This site is protected by reCAPTCHA and the Google&nbsp;
              <NavLink to="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="mute">
                privacy policy&nbsp;
              </NavLink>
              and&nbsp;
              <NavLink to="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="mute">
                terms of service.
              </NavLink>
            </span>
        </p>
      </div>
    </footer>
);
}

export default Footer;
