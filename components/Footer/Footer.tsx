import css from './Footer.module.css'

export default function Footer() {
    const newLocal = "mailto:yarynamarych@gmail.com";
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: Yaryna Marychevska</p>
          <p>
            Contact us:
            <a href={newLocal}>
              yarynamarych@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}