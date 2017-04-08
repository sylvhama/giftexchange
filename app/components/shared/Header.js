import css from './header.css';

export default function Header({title = '', header = 1, colored = false}) {
  return `
    <header class="header ${colored ? 'header--colored' : ''}">
      <h${header} class="header__title">
        ${title}
      </h${header}>
    </header>
  `;
}
