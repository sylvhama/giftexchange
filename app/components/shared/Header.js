import css from './header.css';

export default function Header(title, header = 1) {
  return `
    <header class="header">
      <h${header} class="header__title">
        ${title}
      </h${header}>
    </header>
  `;
}
